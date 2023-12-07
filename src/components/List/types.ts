import { HTMLAttributes, ReactNode } from 'react';

export interface IListProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
