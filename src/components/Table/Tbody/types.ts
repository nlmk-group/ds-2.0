import { ReactNode, TableHTMLAttributes } from 'react';

export interface ITbodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}
