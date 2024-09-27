export interface IBreadcrumbProps {
    label: string;
    href: string;
    active?: boolean;
    target?: string;
    isLast?: boolean;
}
export interface ILinkComponentProps extends IBreadcrumbProps {
}
export interface IBreadcrumbsProps {
    className?: string;
    crumbs: IBreadcrumbProps[];
    width?: number;
}
export type TNodeWidth = Pick<HTMLElement, 'offsetWidth' | 'scrollWidth'>;
//# sourceMappingURL=types.d.ts.map