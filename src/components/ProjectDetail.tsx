import { Language, WorkItem } from '../types';
import { getProjectDetail } from '../data/projectDetails';
import { ContouraDetail } from './project-details/ContouraDetail';
import { AlfasDetail } from './project-details/AlfasDetail';
import { FabilDetail } from './project-details/FabilDetail';
import { FatSportDetail } from './project-details/FatSportDetail';
import { DefaultProjectDetail } from './project-details/DefaultProjectDetail';

interface ProjectDetailProps {
  work: WorkItem;
  lang: Language;
  onBack: () => void;
}

export function ProjectDetail({ work, lang, onBack }: ProjectDetailProps) {
  const detail = getProjectDetail(work.id, work.title, work.tags);

  switch (work.id) {
    case 'w1':
      return <ContouraDetail work={work} lang={lang} detail={detail} onBack={onBack} />;
    case 'w2':
      return <AlfasDetail work={work} lang={lang} detail={detail} onBack={onBack} />;
    case 'w3':
      return <FabilDetail work={work} lang={lang} detail={detail} onBack={onBack} />;
    case 'w4':
      return <FatSportDetail work={work} lang={lang} detail={detail} onBack={onBack} />;
    default:
      return <DefaultProjectDetail work={work} lang={lang} detail={detail} onBack={onBack} />;
  }
}
