import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

const root = process.cwd();
const failures = [];
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const sources = walk(path.join(root, 'src')).filter(file => /\.tsx?$/.test(file));
const resolveModule = (from, specifier) => {
  const base = path.resolve(path.dirname(from), specifier);
  return [base, base + '.ts', base + '.tsx', path.join(base, 'index.ts'), path.join(base, 'index.tsx')].find(file => fs.existsSync(file) && fs.statSync(file).isFile());
};
const graph = new Map();
const media = new Set();
const collectMedia = value => {
  if (typeof value === 'string' && /^\/(media|brand|flags|fonts|cv)\//.test(value) && !value.includes('${')) media.add(value);
  else if (Array.isArray(value)) value.forEach(collectMedia);
  else if (value && typeof value === 'object') Object.values(value).forEach(collectMedia);
};
for (const file of sources) {
  const text = fs.readFileSync(file, 'utf8');
  const dependencies = [];
  for (const { fileName } of ts.preProcessFile(text).importedFiles) {
    if (!fileName.startsWith('.')) continue;
    const resolved = resolveModule(file, fileName);
    if (!resolved) failures.push(`Broken import: ${path.relative(root, file)} -> ${fileName}`);
    else dependencies.push(resolved);
  }
  graph.set(file, dependencies);
  const syntax = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
  function visit(node) {
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) collectMedia(node.text);
    ts.forEachChild(node, visit);
  }
  visit(syntax);
}
const reachable = new Set();
function visit(file) { if (reachable.has(file)) return; reachable.add(file); (graph.get(file) ?? []).forEach(visit); }
visit(path.join(root, 'src/main.tsx'));
for (const file of sources) if (!reachable.has(file)) failures.push(`Unreachable source file: ${path.relative(root, file)}`);

// Evaluate only the repository's pure content modules to expand generated media
// arrays (SKU thumbnails, product folders, galleries). Types are erased by TS.
const cache = new Map();
const nodeRequire = createRequire(import.meta.url);
function loadContent(file) {
  if (cache.has(file)) return cache.get(file).exports;
  if (!file.startsWith(path.join(root, 'src/content') + path.sep)) throw new Error('Content module imports runtime code: ' + file);
  const module = { exports: {} }; cache.set(file, module);
  const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  new Function('require', 'module', 'exports', compiled)(specifier => {
    if (!specifier.startsWith('.')) return nodeRequire(specifier);
    const resolved = resolveModule(file, specifier);
    if (!resolved) throw new Error('Unresolved content dependency ' + specifier);
    return loadContent(resolved);
  }, module, module.exports);
  return module.exports;
}
for (const file of walk(path.join(root, 'src/content')).filter(file => file.endsWith('.ts'))) collectMedia(loadContent(file));
for (const file of walk(path.join(root, 'src/styles')).filter(file => file.endsWith('.css'))) {
  const text = fs.readFileSync(file, 'utf8');
  for (const match of text.matchAll(/url\(["']?(\/[^"')]+)["']?\)/g)) media.add(match[1]);
}
for (const url of media) {
  const local = path.join(root, 'public', decodeURIComponent(url.split('?')[0]));
  if (!fs.existsSync(local)) failures.push('Missing local media: ' + url);
}
if (process.argv.includes('--inventory')) {
  const used = new Set([...media].map(url => path.normalize(decodeURIComponent(url.split('?')[0]))));
  const unused = walk(path.join(root, 'public')).filter(file => !used.has(path.normalize('/' + path.relative(path.join(root, 'public'), file))));
  console.log(JSON.stringify({ used: [...media], unused: unused.map(file => path.relative(root, file).replaceAll('\\', '/')) }, null, 2));
}
const details = loadContent(path.join(root, 'src/content/projects/details.ts'));
if (details.getProjectDetail('nonexistent-project') !== undefined) failures.push('Missing projects must not generate fallback facts');
const { skuSets } = loadContent(path.join(root, 'src/content/services/pdp.ts'));
if (skuSets.some(sku => !sku.slides.length)) failures.push('Every published PDP set needs media');
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`PASS: ${sources.length} connected source modules, ${media.size} local media references, explicit project details, and ${skuSets.length} PDP sets.`);
}
