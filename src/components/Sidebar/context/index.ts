import { createContext } from 'react';

import { ESidebarOrientationMapping } from '../enums';
import { ISidebarProperties, ISubmenuProperties } from '../types';

export const SidebarProperties = createContext<ISidebarProperties>({
  isExpanded: false,
  activeItem: null,
  allowFavorites: false,
  orientation: ESidebarOrientationMapping.vertical,
  setSubmenuItems: () => {},
  setActiveItem: () => {},
  isScrollingDueToClick: false,
  setIsScrollingDueToClick: () => {},
  currentPath: ''
});

export const SubmenuProperties = createContext<ISubmenuProperties>({
  showFavorites: false,
  activeItem: null,
  handleFavorites: () => {},
  checkIsFavorite: () => false,
  checkChildIsFavorite: () => false,
  setActiveItem: () => {},
  setSubmenuItems: () => {}
});
