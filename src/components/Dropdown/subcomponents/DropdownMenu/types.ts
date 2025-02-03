import { ReactNode } from 'react';

/**
 * Интерфейс пропсов для компонента DropdownMenu
 */
export interface IDropdownMenuProps {
  /** Элементы, которые будут отображаться в меню */
  children: ReactNode;
  /** Определяет, будет ли меню рендериться через портал */
  withPortal?: boolean;
}
