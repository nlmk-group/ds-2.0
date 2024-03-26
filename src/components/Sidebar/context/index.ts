import { createContext } from 'react';
import { ISidebarProperties, ISubmenuProperties } from '../types';
import { orientationMapping, submenuVersionMapping } from '../enums';

export const SidebarProperties = createContext<ISidebarProperties>({
  isExpanded: false,
  activeItem: null,
  allowFavorites: false,
  orientation: orientationMapping.vertical,
  setSubmenuItems: () => {},
  setActiveItem: () => {},
  setSubmenuOffset: () => {},
  isScrollingDueToClick: false,
  setIsScrollingDueToClick: () => {}
});

export const SubmenuProperties = createContext<ISubmenuProperties>({
  showFavorites: false,
  activeItem: null,
  version: submenuVersionMapping.version1,
  handleFavorites: () => {},
  checkIsFavorite: () => false,
  setActiveItem: () => {},
  setSubmenuItems: () => {}
});
