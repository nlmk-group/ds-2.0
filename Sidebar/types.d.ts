import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction } from '../../../node_modules/react';
import { TIconName } from '../Icon/IconsDirectory/unionType';
import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from './enums';

export interface ISidebarProps extends PropsWithChildren {
    orientation?: `${ESidebarOrientationMapping}`;
    variant?: `${ESidebarVariantMapping}`;
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
    position?: `${ESidebarPositionMapping}`;
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
    orientation: `${ESidebarOrientationMapping}`;
    setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
    setActiveItem: Dispatch<SetStateAction<string | null>>;
    isScrollingDueToClick: boolean;
    setIsScrollingDueToClick: Dispatch<SetStateAction<boolean>>;
    currentPath: string;
}
export interface ISubmenuProperties {
    showFavorites: boolean;
    activeItem: string | null;
    handleFavorites: (id: string, children: string[]) => void;
    checkIsFavorite: (id: string) => boolean;
    checkChildIsFavorite: (id: string) => boolean;
    setActiveItem: Dispatch<SetStateAction<string | null>>;
    setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
}
export interface ISubmenuProps extends PropsWithChildren {
    orientation: `${ESidebarOrientationMapping}`;
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
//# sourceMappingURL=types.d.ts.map