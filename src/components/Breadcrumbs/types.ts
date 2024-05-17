export interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
  target?: string;
  isLast?: boolean;
}

export interface BreadcrumbsProps {
  className?: string;
  crumbs: Breadcrumb[];
  width?: number;
}

export type TNodeWidth = Pick<HTMLElement, 'offsetWidth' | 'scrollWidth'>;
