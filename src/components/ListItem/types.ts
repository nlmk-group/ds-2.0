import { HTMLAttributes, ReactNode } from 'react';

export interface IListItemProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
