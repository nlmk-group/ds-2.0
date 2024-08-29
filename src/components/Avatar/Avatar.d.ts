import { CSSProperties, FC, ReactNode } from 'react';

import { TIconProps } from '@components/Icon/types';
import { ITypographyProps } from '@components/Typography/types';

/**
 * Размеры аватара.
 * Перечисление всех возможных размеров для аватара.
 */
export enum EAvatarSize {
  /** Очень большой аватар */
  xxxl = 'xxxl',
  /** Очень большой аватар */
  xxl = 'xxl',
  /** Большой аватар */
  xl = 'xl',
  /** Средний аватар */
  l = 'l',
  /** Маленький аватар */
  m = 'm',
  /** Очень маленький аватар */
  s = 's'
}

/**
 * Свойства компонента Avatar.
 * Интерфейс, описывающий свойства, принимаемые компонентом Avatar.
 */
export interface IAvatarProps {
  /** Размер аватара */
  size?: `${EAvatarSize}`;
  /** URL изображения пользователя */
  imageSrc?: string;
  /** Имя пользователя для отображения инициалов */
  userName?: string;
  /** Фамилия пользователя для отображения инициалов */
  userSurname?: string;
  /** Индикатор онлайн статуса пользователя */
  online?: boolean;
  /** Иконка индикатора на аватаре */
  badgeIconName?: ReactNode;
  /** Флаг для отображения специального бейджа */
  badgeSpecialIcon?: boolean;
  /** Отображение числового индикатора */
  numberIndicator?: number;
  /** Дополнительные CSS классы */
  className?: string;
}

/**
 * Параметры размера аватара.
 * Описывает параметры каждого размера аватара, включая размеры, радиусы и т.д.
 */
export type TAvatarSizeParameter = {
  /** Размер аватара */
  avatarSize: number;
  /** Размер числового индикатора */
  numberIndicatorSize: number;
  /** Размер инициалов */
  lettersSize: number;
  /** Размер числового бейджа */
  badgeNumbersSize: number;
  /** Размер онлайн индикатора */
  onlineIndicatorSize: number;
  /** Размер бейджа */
  badgeSize: number;
  /** Размер специального бейджа */
  specialBadgeSize: number;
  /** Размер иконки */
  iconSize: TIconProps['containerSize'];
  /** Вариант типографии для инициалов */
  lettersVariant: ITypographyProps['variant'];
  /** Перевод бейджа по осям X и Y */
  badgeTranslate: [number, number];
};

/**
 * Стили для различных элементов аватара.
 * Тип для определения стилей CSS для различных элементов аватара.
 */
export type TSizingStyles = {
  /** Стили для аватара */
  avatarStyles: CSSProperties;
  /** Стили для инициалов */
  lettersStyles: CSSProperties;
  /** Стили для числового индикатора */
  numberIndicatorStyles: CSSProperties;
  /** Стили для индикатора онлайн статуса */
  onlineIndicatorStyles: CSSProperties;
  /** Стили для бейджа */
  badgeStyles: CSSProperties;
};

/**
 * Аргументы для функции, возвращающей стили для аватара.
 * Описывает аргументы, передаваемые в функцию для получения стилей аватара.
 */
export type TGetSizingStylesArgs = {
  /** Параметры размера аватара */
  sizeParameters: TAvatarSizeParameter;
  /** Флаг, указывающий, отображается ли специальный бейдж */
  isSpecialBadge: boolean;
  /** Размер аватара */
  sizeVariant: IAvatarProps['size'];
};

/**
 * Компонент Avatar для отображения аватаров пользователей.
 * Компонент Avatar принимает свойства, описанные в IAvatarProps, и отображает аватар пользователя.
 */
declare const Avatar: FC<IAvatarProps> & { componentType?: string };

export default Avatar;
