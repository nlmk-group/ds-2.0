export interface Breadcrumb {
    label: string;
    href: string;
    active?: boolean;
    target?: string;
}
export interface BreadcrumbsProps {
    crumbs: Breadcrumb[];
    width?: number;
}
export type TNodeWidth = Pick<HTMLElement, 'offsetWidth' | 'scrollWidth'>;
//# sourceMappingURL=types.d.ts.map