import { CSSProperties, ReactElement, ReactNode } from '../../../node_modules/react';

export interface IBreadcrumbsProps {
    width?: CSSProperties['width'];
    className?: string;
    children: ReactNode;
}
export interface IBasicBreadcrumbsProps {
    crumbs: ReactElement[];
}
export interface IInternalCrumbProps {
    isLast?: boolean;
    children: ReactElement;
}
export interface ICrumbProps {
    children: ReactElement;
}
export interface IShortenBreadcrumbsProps {
    crumbs: ReactElement[];
}
//# sourceMappingURL=types.d.ts.map