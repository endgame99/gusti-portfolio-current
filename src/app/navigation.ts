export type ActiveNav = 'home' | 'work' | 'services' | 'library';
export type ActiveTab = 'recommended' | 'services' | 'library';
export function mainNavUrl(nav: ActiveNav): string {
  return nav === 'home' ? '/' : `/?tab=${nav === 'work' ? 'recommended' : nav}`;
}
