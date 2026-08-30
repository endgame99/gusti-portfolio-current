type ProductShotAspect = 'portrait' | 'square' | 'landscape' | 'tall';

export interface ProductShotTemplate {
  id: string;
  title: string;
  category: 'Product Shot';
  media: string;
  gallery: string[];
  aspect: ProductShotAspect;
}

const root = '/service-templates/product-shot';
const aspects: ProductShotAspect[] = ['portrait', 'square', 'tall', 'landscape'];

const assetPath = (folder: string, file: string) =>
  `${root}/${folder.split('/').map(encodeURIComponent).join('/')}/${encodeURIComponent(file)}`;

const parenthesizedFiles = (count: number, extension: string, numbers?: number[]) =>
  (numbers ?? Array.from({ length: count }, (_, index) => index + 1)).map(
    (number) => `1 (${number}).${extension}`,
  );

const numberedFiles = (count: number, extension: string) =>
  Array.from({ length: count }, (_, index) => `${index + 1}.${extension}`);

const product = (
  id: string,
  title: string,
  folder: string,
  files: string[],
  index: number,
): ProductShotTemplate => {
  const gallery = files.map((file) => assetPath(folder, file));

  return {
    id,
    title,
    category: 'Product Shot',
    media: gallery[0],
    gallery,
    aspect: aspects[index % aspects.length],
  };
};

const definitions: Array<[string, string, string, string[]]> = [
  ['bosie-product-1', 'Bosie Product 1', 'Bosie/Product (1)', parenthesizedFiles(14, 'webp')],
  ['bosie-product-2', 'Bosie Product 2', 'Bosie/Product (2)', parenthesizedFiles(13, 'jpg')],
  ['bosie-product-3', 'Bosie Product 3', 'Bosie/Product (3)', parenthesizedFiles(10, 'jpg')],
  ['bosie-product-4', 'Bosie Product 4', 'Bosie/Product (4)', parenthesizedFiles(9, 'jpg')],
  ['bosie-product-5', 'Bosie Product 5', 'Bosie/Product (5)', parenthesizedFiles(3, 'jpg')],
  ['bosie-product-6', 'Bosie Product 6', 'Bosie/Product (6)', parenthesizedFiles(4, 'jpg')],
  ['bosie-product-7', 'Bosie Product 7', 'Bosie/Product (7)', parenthesizedFiles(4, 'jpg')],
  ['bosie-product-8', 'Bosie Product 8', 'Bosie/Product (8)', parenthesizedFiles(4, 'jpg')],
  ['bosie-product-9', 'Bosie Product 9', 'Bosie/Product (9)', parenthesizedFiles(3, 'jpg')],
  ['bosie-product-10', 'Bosie Product 10', 'Bosie/Product (10)', parenthesizedFiles(7, 'jpg')],
  ['contoura-1', 'Contoura 1', 'Contoura/Contoura 1', numberedFiles(10, 'webp')],
  ['contoura-2', 'Contoura 2', 'Contoura/Contoura 2', parenthesizedFiles(11, 'webp')],
  ['contoura-3', 'Contoura 3', 'Contoura/Contoura 3', numberedFiles(4, 'webp')],
  [
    'contoura-4',
    'Contoura 4',
    'Contoura/Contoura 4',
    parenthesizedFiles(14, 'webp', [1, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]),
  ],
  ['contoura-5', 'Contoura 5', 'Contoura/Contoura 5', parenthesizedFiles(7, 'webp')],
  ['contoura-6', 'Contoura 6', 'Contoura/Contoura 6', parenthesizedFiles(13, 'webp')],
  ['contoura-7', 'Contoura 7', 'Contoura/Contoura 7', parenthesizedFiles(11, 'webp')],
  ['contoura-8', 'Contoura 8', 'Contoura/Contoura 8', parenthesizedFiles(11, 'webp')],
  ['contoura-9', 'Contoura 9', 'Contoura/Contoura 9', parenthesizedFiles(14, 'webp')],
  ['contoura-10', 'Contoura 10', 'Contoura/Contoura 10', parenthesizedFiles(13, 'webp')],
  [
    'jersey-product',
    'Jersey Product',
    'Jersey/Product',
    [
      '1 (1).jpeg',
      '1 (1).jpg',
      '1 (2).jpeg',
      '1 (2).jpg',
      '1 (3).jpeg',
      '1 (3).jpg',
      ...parenthesizedFiles(6, 'jpeg', [4, 5, 6, 7, 8, 9]),
    ],
  ],
  ['kids-cloth-product-1', 'Kids Cloth Product 1', 'Kids Cloth/Product (1)', parenthesizedFiles(5, 'avif')],
  ['kids-cloth-product-2', 'Kids Cloth Product 2', 'Kids Cloth/Product (2)', parenthesizedFiles(5, 'avif')],
  ['kids-cloth-product-3', 'Kids Cloth Product 3', 'Kids Cloth/Product (3)', parenthesizedFiles(6, 'avif')],
  ['kids-cloth-product-4', 'Kids Cloth Product 4', 'Kids Cloth/Product (4)', parenthesizedFiles(6, 'avif')],
  ['kids-cloth-product-5', 'Kids Cloth Product 5', 'Kids Cloth/Product (5)', parenthesizedFiles(7, 'avif')],
  ['palesun-product-1', 'Palesun Eyewear Product 1', 'Palesun Eyewear/Product (1)', parenthesizedFiles(5, 'avif')],
  ['palesun-product-2', 'Palesun Eyewear Product 2', 'Palesun Eyewear/Product (2)', parenthesizedFiles(6, 'avif')],
  ['palesun-product-3', 'Palesun Eyewear Product 3', 'Palesun Eyewear/Product (3)', parenthesizedFiles(5, 'avif')],
  ['palesun-product-4', 'Palesun Eyewear Product 4', 'Palesun Eyewear/Product (4)', parenthesizedFiles(8, 'avif')],
  ['palesun-product-5', 'Palesun Eyewear Product 5', 'Palesun Eyewear/Product (5)', parenthesizedFiles(4, 'avif')],
  ['palesun-product-6', 'Palesun Eyewear Product 6', 'Palesun Eyewear/Product (6)', parenthesizedFiles(4, 'jpg')],
  [
    'palesun-product-7',
    'Palesun Eyewear Product 7',
    'Palesun Eyewear/Product (7)',
    ['1 (1).jpg', '1 (1).png', '1 (2).jpg'],
  ],
  ['palesun-product-8', 'Palesun Eyewear Product 8', 'Palesun Eyewear/Product (8)', parenthesizedFiles(6, 'webp')],
  ['palesun-product-9', 'Palesun Eyewear Product 9', 'Palesun Eyewear/Product (9)', parenthesizedFiles(9, 'jpg')],
  ['palesun-product-10', 'Palesun Eyewear Product 10', 'Palesun Eyewear/Product (10)', parenthesizedFiles(3, 'jpg')],
  ['skincare-product-1', 'Skincare Product 1', 'Skincare/Product 1', parenthesizedFiles(6, 'webp')],
];

export const productShotTemplates = definitions.map(([id, title, folder, files], index) =>
  product(id, title, folder, files, index),
);
