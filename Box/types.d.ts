import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from '../../../node_modules/react';

type TBorderProps = string | number;
export interface IBox extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children?: ReactNode;
    p?: TBorderProps;
    px?: TBorderProps;
    py?: TBorderProps;
    pt?: TBorderProps;
    pb?: TBorderProps;
    pl?: TBorderProps;
    pr?: TBorderProps;
    background?: string;
    height?: TBorderProps;
    width?: TBorderProps;
    maxWidth?: TBorderProps;
    border?: string;
    color?: string;
    borderRadius?: TBorderProps;
    display?: CSSProperties['display'];
    flexDirection?: CSSProperties['flexDirection'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    flexWrap?: CSSProperties['flexWrap'];
    st?: CSSProperties;
    className?: string;
    gap?: TBorderProps;
}
export {};
//# sourceMappingURL=types.d.ts.map