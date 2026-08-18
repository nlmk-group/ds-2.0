import { CSSProperties, FC, PropsWithChildren, ReactNode } from 'react';

import { IAvatarProps } from '@components/Avatar/types';
import { ELocaleMapping } from '@components/declaration';
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

type ChangeFavoritesHandler = (v: string[]) => void;

type TContentLabel = ReactNode | string;

/**
 * Свойства компонента Sidebar.
 * Интерфейс, описывающий свойства, принимаемые компонентом Sidebar.
 */
export interface ISidebarProps extends PropsWithChildren {
  /**
   * Локаль для текстов интерфейса.
   * @default 'ru'
   */
  locale?: `${ELocaleMapping}`;

  /**
   * Ориентация бокового меню.
   * @default ${ESidebarOrientationMapping.vertical}
   */
  orientation?: `${ESidebarOrientationMapping}`;

  /**
   * Вариант бокового меню.
   * @default ${ESidebarVariantMapping.default}
   */
  variant?: `${ESidebarVariantMapping}`;

  /**
   * Разрешает ли боковое меню избранное.
   * @default false
   */
  allowFavorites?: boolean;

  /**
   * Обработчик, позволяющий отслеживать изменения в списке избранного
   */
  onChangeFavorites?: ChangeFavoritesHandler;

  /**
   * Флаг, показывающий, вошел ли пользователь в систему.
   */
  isLoggedIn?: boolean;

  /**
   * Системное имя для отображения в меню.
   */
  systemName?: string;

  /**
   * Имя пользователя.
   */
  userName?: string;

  /**
   * Фамилия пользователя.
   */
  userSurname?: string;

  /**
   * Функция, вызываемая при открытии профиля пользователя.
   */
  onOpenUser?: () => void;

  /**
   * Функция, вызываемая при выходе из аккаунта.
   */
  onLogout?: () => void;

  /**
   * Функция, вызываемая при входе в аккаунт.
   */
  onLogin?: () => void;

  /**
   * Функция, вызываемая при клике на логотип.
   */
  onClickLogo?: () => void;

  /**
   * Текущий путь (URL) для определения активного элемента.
   */
  currentPath: string;

  /**
   * Флаг, указывающий, должно ли боковое меню быть развернуто по умолчанию.
   * @default false
   */
  defaultMenuOpen?: boolean;

  /**
   * Флаг, для показа оверлея при открытом submenu.
   * @default false
   */
  overlay?: boolean;

  /**
   * Флаг для отображения UserControl.
   * @default true
   */
  isShowUserControl?: boolean;

  /**
   * Кастомный логотип. Если не передан, используется стандартный.
   */
  logo?: ReactNode;

  /**
   * Дополнительный класс для стилизации.
   */
  className?: string;

  /**
   * Inline стили для компонента.
   */
  style?: CSSProperties;
  /**
   * Флаг, указывающий, что меню должно открываться и закрываться только по кнопке.
   */
  manualExpansion?: boolean;
}

/**
 * Свойства кнопки сворачивания.
 */
export interface ICollapseButtonProps {
  /**
   * Флаг, указывающий, развернуто ли меню.
   */
  isExpanded?: boolean;
  /**
   * Функция обработки клика по кнопке сворачивания.
   */
  onClick: () => void;

  /**
   * Локаль для текстов кнопки.
   * @default 'ru'
   */
  locale?: `${ELocaleMapping}`;
}

/**
 * Свойства управления пользователем в боковом меню.
 */
export interface IUserControlProps extends PropsWithChildren {
  /**
   * Флаг, указывающий, развернуто ли меню.
   */
  isExpanded: boolean;

  /**
   * Флаг, указывающий вертикальную ориентацию меню.
   */
  isVertical: boolean;

  /**
   * Флаг, показывающий, вошел ли пользователь в систему.
   */
  isLoggedIn?: boolean;

  /**
   * Имя пользователя.
   */
  userName?: string;

  /**
   * Фамилия пользователя.
   */
  userSurname?: string;

  /**
   * Функция, вызываемая при открытии профиля пользователя.
   */
  onOpenUser?: () => void;

  /**
   * Функция, вызываемая при входе в аккаунт.
   */
  onLogin?: () => void;

  /**
   * Функция, вызываемая при выходе из аккаунта.
   */
  onLogout?: () => void;
}

/**
 * Свойства элемента меню.
 */
export interface IMenuItemProps extends PropsWithChildren {
  /**
   * Позиция элемента меню.
   */
  position?: `${ESidebarPositionMapping}`;

  /**
   * Текстовая метка элемента меню.
   */
  label: string;

  /**
   * Текстовая или кастомная метка для отображения элемента подменю (используется label по умолчанию)
   */
  content?: TContentLabel;

  /**
   * Иконка элемента меню.
   */
  icon?: TIconName | JSX.Element;

  /**
   * Функция обработки клика по элементу меню.
   */
  onClick?: () => void;

  /**
   * Путь для навигации.
   */
  path: string;

  /**
   * Флаг, указывающий, что элемент меню отключен.
   */
  disabled?: boolean;
}

/**
 * Свойства подменю.
 */
export interface ISubmenuProps extends PropsWithChildren {
  /**
   * Ориентация подменю.
   */
  orientation: `${ESidebarOrientationMapping}`;

  /**
   * Флаг, указывающий, открыто ли подменю.
   */
  isOpen: boolean;

  /**
   * Заголовок подменю.
   */
  title: string;
}

/**
 * Свойства элемента подменю.
 */
export interface ISubmenuItemProps extends PropsWithChildren {
  /**
   * Уникальный идентификатор элемента подменю.
   */
  id?: string;

  /**
   * Текстовая метка элемента подменю.
   */
  label: string;

  /**
   * Текстовая или кастомная метка для отображения элемента подменю (используется label по умолчанию)
   */
  content?: TContentLabel;

  /**
   * URL изображения элемента подменю.
   */
  image?: string;

  /**
   * Уровень вложенности элемента подменю.
   */
  depth?: number;

  /**
   * Функция обработки клика по элементу подменю.
   */
  onClick?: () => void;

  /**
   * Путь для навигации.
   */
  path: string;

  /**
   * Флаг, указывающий, что элемент подменю отключен.
   */
  disabled?: boolean;
}

/**
 * Интерфейс обозначающий функциональный компонент с поддержкой `componentType`.
 */
export interface IComponentWithType extends FC<ISidebarProps> {
  /**
   * Тип компонента.
   */
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
