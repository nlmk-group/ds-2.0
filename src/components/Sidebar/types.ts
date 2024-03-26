import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction } from 'react';

import { orientationMapping, positionMapping, submenuVersionMapping, variantMapping } from './enums';
import { TIconName } from '@components/Icon/IconsDirectory/unionType';

export interface ISidebarProps extends PropsWithChildren {
  orientation?: `${orientationMapping}`;
  variant?: `${variantMapping}`;
  submenuVersion?: `${submenuVersionMapping}`;
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
}

export interface ISidebarProperties {
  isExpanded: boolean;
  activeItem: string | null;
  allowFavorites: boolean;
  orientation: `${orientationMapping}`;
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
  setActiveItem: Dispatch<SetStateAction<string | null>>;
  setSubmenuOffset: Dispatch<SetStateAction<number>>;
  isScrollingDueToClick: boolean;
  setIsScrollingDueToClick: Dispatch<SetStateAction<boolean>>;
}

export interface ISubmenuProperties {
  showFavorites: boolean;
  activeItem: string | null;
  version: `${submenuVersionMapping}`;
  handleFavorites: (id: string) => void;
  checkIsFavorite: (id: string) => boolean;
  setActiveItem: Dispatch<SetStateAction<string | null>>;
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
}

export interface ISubmenuProps extends PropsWithChildren {
  orientation: `${orientationMapping}`;
  version?: `${submenuVersionMapping}`;
  isOpen: boolean;
  title: string;
  offset?: number;
  menuWidth?: number;
  direction?: string;
  isNested?: boolean;
  image?: string;
}

export interface ISubmenuItemProps extends PropsWithChildren {
  id?: string;
  label: string;
  image?: string;
  depth?: number;
  onClick?: () => void;
}

export interface IComponentWithType extends FC<ISidebarProps> {
  componentType?: string;
}


