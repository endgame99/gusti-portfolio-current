export type Language = 'id' | 'en' | 'cn';
export type Theme = 'light' | 'dark';

export interface WorkItem {
  id: string;
  title: string;
  label: string;
  image: string;
  tags: string[];
  type: 'project' | 'asset';
  clientName?: string;
  clientLogo?: string;
  projectSubtitle?: string;
  mediaType?: 'image' | 'video' | 'comparison';
  videoSrc?: string;
  beforeImage?: string;
  afterImage?: string;
}

export interface LibraryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
}

export interface SlideItem {
  id: string;
  mediaType: 'image' | 'video';
  src: string;
  href?: string;
  alt: string;
  external?: boolean;
}
