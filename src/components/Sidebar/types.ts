import { CSSProperties, Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction } from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';

import { ESidebarOrientationMapping, ESidebarPositionMapping, ESidebarVariantMapping } from './enums';

type ChangeFavoritesHandler = (v: string[]) => void;

type TContentLabel = ReactNode | string;

export interface ISidebarProps extends PropsWithChildren {
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
   * Функция, вызываемая при поиске.
   */
  onSearch?: () => void;

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
}

export interface ICollapseButtonProps {
  /**
   * Флаг, указывающий, развернуто ли меню.
   */
  isExpanded?: boolean;

  /**
   * Функция обработки клика по кнопке сворачивания.
   */
  onClick: () => void;
}

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
  icon: TIconName;

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

export interface ISidebarProperties {
  /**
   * Флаг, указывающий, развернуто ли меню.
   */
  isExpanded: boolean;

  /**
   * Идентификатор активного элемента.
   */
  activeItem: string | null;

  /**
   * Флаг, разрешающий использование избранного.
   */
  allowFavorites: boolean;

  /**
   * Обработчик, позволяющий отслеживать изменения в списке избранного
   */
  onChangeFavorites: ChangeFavoritesHandler;

  /**
   * Ориентация бокового меню.
   */
  orientation: `${ESidebarOrientationMapping}`;

  /**
   * Функция установки элементов подменю.
   */
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;

  /**
   * Функция установки активного элемента.
   */
  setActiveItem: Dispatch<SetStateAction<string | null>>;

  /**
   * Флаг, указывающий на прокрутку в результате клика.
   */
  isScrollingDueToClick: boolean;

  /**
   * Функция установки флага прокрутки.
   */
  setIsScrollingDueToClick: Dispatch<SetStateAction<boolean>>;

  /**
   * Текущий путь (URL).
   */
  currentPath: string;

  /**
   * Функция сворачивания бокового меню.
   */
  collapseSidebar: () => void;
}

export interface ISubmenuProperties {
  /**
   * Флаг отображения избранного.
   */
  showFavorites: boolean;

  /**
   * Идентификатор активного элемента.
   */
  activeItem: string | null;

  /**
   * Функция управления избранным.
   */
  handleFavorites: (id: string, children: string[]) => void;

  /**
   * Функция проверки элемента на наличие в избранном.
   */
  checkIsFavorite: (id: string) => boolean;

  /**
   * Функция проверки дочернего элемента на наличие в избранном.
   */
  checkChildIsFavorite: (id: string) => boolean;

  /**
   * Функция установки активного элемента.
   */
  setActiveItem: Dispatch<SetStateAction<string | null>>;

  /**
   * Функция установки элементов подменю.
   */
  setSubmenuItems: Dispatch<SetStateAction<ReactNode | ReactNode[]>>;
}

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

export interface IComponentWithType extends FC<ISidebarProps> {
  /**
   * Тип компонента.
   */
  componentType?: string;
}
