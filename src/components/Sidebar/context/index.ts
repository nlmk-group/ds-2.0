import { createContext } from 'react';
import { ISidebarProperties, ISubmenuProperties } from '../types';
import { orientationMapping } from '../enums';

export const SidebarProperties = createContext<ISidebarProperties>({
  isExpanded: false,
  activeItem: null,
  allowFavorites: false,
  orientation: orientationMapping.vertical,
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
