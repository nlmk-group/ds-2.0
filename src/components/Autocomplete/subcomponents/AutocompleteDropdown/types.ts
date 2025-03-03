import { ReactNode } from 'react';

export interface IAutocompleteDropdownProps {
  /** Элементы, которые будут отображаться в меню */
  children?: ReactNode;
  /** Определяет, будет ли меню рендериться через портал */
  withPortal?: boolean;
}
