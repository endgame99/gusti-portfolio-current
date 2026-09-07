import type { Language, WorkItem } from '../types/content';
import { getProjectDetail } from '../content/projects/details';
import { ContouraDetail } from '../components/work/ContouraDetail';
import { ProjectContent } from '../components/work/ProjectContent';
import { ProjectPreview } from '../components/work/ProjectPreview';

interface ProjectDetailProps { work: WorkItem; lang: Language; onBack: () => void; }

export function ProjectPage({ work, lang, onBack }: ProjectDetailProps) {
  if (work.id === 'w1') return <ContouraDetail work={work} lang={lang} onBack={onBack} />;
  const detail = getProjectDetail(work.id);
  return detail
    ? <ProjectContent work={work} lang={lang} detail={detail} onBack={onBack} />
    : <ProjectPreview work={work} lang={lang} onBack={onBack} />;
}
