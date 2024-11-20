import { Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction } from 'react';

import { IAvatarProps } from '@components/Avatar/types';
import { TIconName } from '@components/Icon/IconsDirectory/unionType';

// Перечисления

/**
 * Ориентация бокового меню.
 */
export enum ESidebarOrientationMapping {
  /** Вертикальная ориентация */
  vertical = 'vertical',
  /** Горизонтальная ориентация */
  horizontal = 'horizontal'
}

/**
 * Вариант бокового меню.
 */
export enum ESidebarVariantMapping {
  /** Стандартный вариант меню */
  default = 'default',
  /** Вариант бургер-меню */
  burger = 'burger'
}

/**
 * Позиция элемента в меню.
 */
export enum ESidebarPositionMapping {
  /** Верхняя позиция */
  top = 'top',
  /** Нижняя позиция */
  bottom = 'bottom'
}

// Интерфейсы

/**
 * Свойства компонента Sidebar.
 * Интерфейс, описывающий свойства, принимаемые компонентом Sidebar.
 */
export interface ISidebarProps extends PropsWithChildren {
  /** Ориентация бокового меню */
  orientation?: `${ESidebarOrientationMapping}`;
  /** Вариант бокового меню */
  variant?: `${ESidebarVariantMapping}`;
  /** Разрешает ли меню избранное */
  allowFavorites?: boolean;
  /** Вошел ли пользователь в систему */
  isLoggedIn?: boolean;
  /** Системное имя */
  systemName?: string;
  /** Имя пользователя */
  userName?: string;
  /** Фамилия пользователя */
  userSurname?: string;
  /** Функция, вызываемая при открытии профиля пользователя */
  onOpenUser: () => void;
  /** Функция, вызываемая при выходе из аккаунта */
  onLogout?: () => void;
  /** Функция, вызываемая при входе в аккаунт */
  onLogin?: () => void;
  /** Функция, вызываемая при поиске */
  onSearch?: () => void;
  /** Функция, вызываемая при клике на логотип */
  onClickLogo?: () => void;
  /** Текущий путь (URL) для определения активного элемента */
  currentPath: string;
}

/**
 * Свойства кнопки сворачивания.
 */
export interface ICollapseButtonProps {
  /** Раскрито ли меню */
  isExpanded?: boolean;
  /** Функция нажатия на кнопку */
  onClick: () => void;
}

/**
 * Свойства управления пользователем в боковом меню.
 */
export interface IUserControlProps extends PropsWithChildren {
  /** Расширено ли боковое меню */
  isExpanded: boolean;
  /** В вертикальной ли ориентации */
  isVertical: boolean;
  /** Логин */
  isLoggedIn?: boolean;
  /** Имя пользователя */
  userName?: string;
  /** Фамилия пользователя */
  userSurname?: string;
  /** Функция, вызываемая при открытии профиля пользователя */
  onOpenUser: () => void;
  /** Функция, вызываемая при входе в аккаунт */
  onLogin?: () => void;
  /** Функция, вызываемая при выходе из аккаунта */
  onLogout?: () => void;
}

/**
 * Свойства элемента меню.
 */
export interface IMenuItemProps extends PropsWithChildren {
  /** Позиция элемента в меню */
  position?: `${ESidebarPositionMapping}`;
  /** Метка элемента меню */
  label: string;
  /** Иконка элемента меню */
  icon: TIconName;
  /** Обработчик клика на элемент меню */
  onClick?: () => void;
  /** Путь (URL) к элементу меню */
  path: string;
  /** Отключен ли элемент меню */
  disabled?: boolean;
}

/**
 * Свойства бокового меню.
 */
export interface ISidebarProperties {
  /** Расширено ли боковое меню */
  isExpanded: boolean;
  /** Активный элемент меню */
  activeItem: string | null;
  /** Разрешает ли меню избранное */
  allowFavorites: boolean;
  /** Ориентация бокового меню */
  orientation: `${ESidebarOrientationMapping}`;
  /** Функция нажатия на элемент подменю */
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
  /** Функция активации элемента меню */
  setActiveItem: Dispatch<SetStateAction<string | null>>;
  /** Находится ли меню в состоянии прокрутки */
  isScrollingDueToClick: boolean;
  /** Функция нажатия для изменения состояния прокрутки */
  setIsScrollingDueToClick: Dispatch<SetStateAction<boolean>>;
  /** Текущий путь (URL) для определения активного элемента */
  currentPath: string;
}

/**
 * Свойства подменю.
 */
export interface ISubmenuProps extends PropsWithChildren {
  /** Ориентация подменю */
  orientation: `${ESidebarOrientationMapping}`;
  /** Открыто ли подменю */
  isOpen: boolean;
  /** Заголовок подменю */
  title: string;
}

/**
 * Свойства элемента подменю.
 */
export interface ISubmenuItemProps extends PropsWithChildren {
  /** ID элемента подменю */
  id?: string;
  /** Метка элемента подменю */
  label: string;
  /** Изображение элемента подменю */
  image?: string;
  /** Глубина вложенности элемента подменю */
  depth?: number;
  /** Обработчик кликов по элементу подменю */
  onClick?: () => void;
  /** Путь (URL) к элементу подменю */
  path: string;
  /** Отключен ли элемент подменю */
  disabled?: boolean;
}

/**
 * Интерфейс обозначающий функциональный компонент с поддержкой `componentType`.
 */
export interface IComponentWithType extends FC<ISidebarProps> {
  /** Тип компонента */
  componentType?: string;
}

/**
 * Компонент Sidebar представляет интерфейс бокового меню с различными возможностями расширения.
 */
declare const Sidebar: FC<ISidebarProps> & {
  Avatar: FC<IAvatarProps>;
  MenuItem: FC<IMenuItemProps>;
  SubmenuItem: FC<ISubmenuItemProps>;
};

export default Sidebar;
