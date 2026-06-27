export type Language = 'id' | 'en' | 'cn';
export type Theme = 'light' | 'dark';

export interface WorkItem {
  id: string;
  title: string;
  label: string;
  image: string;
  tags: string[];
  type: 'project' | 'asset';
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  includes: string[];
  image: string;
  icon: string;
  isMain: boolean;
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
  image: string;
}
