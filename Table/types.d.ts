import { CSSProperties, ReactNode, TableHTMLAttributes } from '../../../node_modules/react';

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode;
    horizontalBorders?: boolean;
    verticalBorders?: boolean;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map