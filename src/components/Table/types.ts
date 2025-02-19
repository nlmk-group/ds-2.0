import { CSSProperties, ReactNode, TableHTMLAttributes } from 'react';

export interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;

  /** Флаг, включающий горизонтальные линии между строками (по умолчанию true) */
  horizontalBorders?: boolean;

  /** Флаг, включающий вертикальные линии между колонками (по умолчанию false) */
  verticalBorders?: boolean;

  className?: string;

  style?: CSSProperties;
}
