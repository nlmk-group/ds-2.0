import { createContext } from 'react';

import { ESidebarOrientationMapping } from '../enums';
import { ISidebarProperties, ISubmenuProperties } from '../types';

/**
 * Контекст для управления состоянием Sidebar.
 */
export const SidebarProperties = createContext<ISidebarProperties>({
  isExpanded: false,
  activeItem: null,
  allowFavorites: false,
  orientation: ESidebarOrientationMapping.vertical,
  setSubmenuItems: () => {},
  setActiveItem: () => {},
  onChangeFavorites: () => {},
  isScrollingDueToClick: false,
  setIsScrollingDueToClick: () => {},
  currentPath: '',
  collapseSidebar: () => {}
});

/**
 * Контекст для управления состоянием Submenu.
 */
export const SubmenuProperties = createContext<ISubmenuProperties>({
  showFavorites: false,
  activeItem: null,
  handleFavorites: () => {},
  checkIsFavorite: () => false,
  checkChildIsFavorite: () => false,
  setActiveItem: () => {},
  setSubmenuItems: () => {}
});
