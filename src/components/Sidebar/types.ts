import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction } from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';

import { orientationMapping, positionMapping, variantMapping } from './enums';

export interface ISidebarProps extends PropsWithChildren {
  orientation?: `${orientationMapping}`;
  variant?: `${variantMapping}`;
  allowFavorites?: boolean;
  isLoggedIn?: boolean;
  systemName?: string;
  userName?: string;
  userSurname?: string;
  onOpenUser: () => void;
  onLogout?: () => void;
  onLogin?: () => void;
  onSearch?: () => void;
  onClickLogo?: () => void;
  currentPath: string;
}

export interface ICollapseButtonProps {
  isExpanded?: boolean;
  onClick: () => void;
}

export interface IUserControlProps extends PropsWithChildren {
  isExpanded: boolean;
  isVertical: boolean;
  isLoggedIn?: boolean;
  userName?: string;
  userSurname?: string;
  onOpenUser: () => void;
  onLogin?: () => void;
  onLogout?: () => void;
}

export interface IMenuItemProps extends PropsWithChildren {
  position?: `${positionMapping}`;
  label: string;
  icon: TIconName;
  onClick?: () => void;
  path: string;
  disabled?: boolean;
}

export interface ISidebarProperties {
  isExpanded: boolean;
  activeItem: string | null;
  allowFavorites: boolean;
  orientation: `${orientationMapping}`;
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
  setActiveItem: Dispatch<SetStateAction<string | null>>;
  isScrollingDueToClick: boolean;
  setIsScrollingDueToClick: Dispatch<SetStateAction<boolean>>;
  currentPath: string;
}

export interface ISubmenuProperties {
  showFavorites: boolean;
  activeItem: string | null;
  handleFavorites: (id: string,  children: string[]) => void;
  checkIsFavorite: (id: string) => boolean;
  checkChildIsFavorite: (id: string) => boolean;
  setActiveItem: Dispatch<SetStateAction<string | null>>;
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
}

export interface ISubmenuProps extends PropsWithChildren {
  orientation: `${orientationMapping}`;
  isOpen: boolean;
  title: string;
}

export interface ISubmenuItemProps extends PropsWithChildren {
  id?: string;
  label: string;
  image?: string;
  depth?: number;
  onClick?: () => void;
  path: string;
  disabled?: boolean;
}

export interface IComponentWithType extends FC<ISidebarProps> {
  componentType?: string;
}
