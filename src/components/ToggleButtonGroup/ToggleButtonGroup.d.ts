import { MouseEventHandler, ReactNode, FC } from 'react';
import { EToggleButtonGroupSizeMapping } from './enums';

/**
 * Перечисление размеров кнопок в группе.
 * Описывает возможные размеры кнопок.
 */
export enum EToggleButtonGroupSizeMapping {
  compact = 'compact',
  default = 'default'
}

/**
 * Свойства компонента ToggleButtonGroup.
 * Интерфейс, описывающий свойства, принимаемые компонентом ToggleButtonGroup.
 */
export interface IToggleButtonGroupProps {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Размер кнопок в группе */
  size?: `${EToggleButtonGroupSizeMapping}`;
  /** Флаг блокировки всей группы кнопок */
  disabled?: boolean;
  /** Дочерние элементы (кнопки) */
  children: ReactNode;
    /** Inline стили для кастомизации компонента */
  style?: CSSProperties;
}

/**
 * Свойства отдельной кнопки в группе.
 * Интерфейс, описывающий свойства для каждой кнопки внутри ToggleButtonGroup.
 */
export interface IToggleButtonGroupItemWithProps {
  /** Дополнительный CSS-класс для кнопки */
  className?: string;
  /** Флаг блокировки отдельной кнопки */
  disabled?: boolean;
  /** Обработчик клика по кнопке */
  onClick?: MouseEventHandler<HTMLDivElement> | null;
  /** Флаг активного состояния кнопки */
  active?: boolean;
  /** Функция переключения состояния кнопки */
  toggleButton?: () => void;
  /** Флаг последней кнопки в группе */
  isLast?: boolean;
  /** Дочерние элементы кнопки */
  children: ReactNode;
}

/**
 * Свойства контекста группы кнопок.
 * Интерфейс, описывающий свойства, передаваемые через контекст ButtonGroupProperties.
 */
export interface IButtonGroupPropertiesProps {
  /** Размер кнопок */
  size: `${EToggleButtonGroupSizeMapping}`;
  /** Флаг блокировки группы */
  disabled: boolean;
}

/**
 * Свойства контекста кнопки.
 * Интерфейс, описывающий свойства, передаваемые через контекст ButtonProperties.
 */
export interface IButtonPropertiesProps {
  /** Флаг активного состояния */
  active: boolean;
}

/**
 * Свойства компонента иконки.
 * Интерфейс, описывающий свойства для компонента WithIcon.
 */
export interface IToggleButtonIconProps {
  /** Цвет иконки */
  htmlColor?: string;
  /** Компонент иконки */
  children?: ReactNode;
}

/**
 * Компонент ToggleButtonGroup предоставляет группу переключаемых кнопок с единым состоянием активности.
 */
export declare const ToggleButtonGroup: FC<IToggleButtonGroup> & {
  Button: FC<IToggleButtonGroupItemWithProps>;
};

export default ToggleButtonGroup;