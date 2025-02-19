import { ReactNode, TableHTMLAttributes } from 'react';

export interface IFooterProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
