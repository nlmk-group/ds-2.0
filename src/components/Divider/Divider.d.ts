import { FC, PropsWithChildren } from 'react';

/**
 * Ориентация разделителя.
 * Перечисление всех возможных ориентаций для разделителя.
 */
export enum EDividerOrientation {
  /** Ориентация влево */
  left = 'left',
  /** Ориентация вправо */
  right = 'right',
  /** Центральная ориентация */
  center = 'center'
}

/**
 * Тип разделителя.
 * Перечисление всех возможных типов разделителя.
 */
export enum EDividerType {
  /** Горизонтальный разделитель */
  horizontal = 'horizontal',
  /** Вертикальный разделитель */
  vertical = 'vertical'
}

/**
 * Свойства компонента Divider.
 * Интерфейс, описывающий свойства, принимаемые компонентом Divider.
 */
export interface IDividerProps extends PropsWithChildren<any> {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Определяет, является ли линия пунктирной */
  dashed?: boolean;
  /** Ориентация разделителя */
  orientation?: `${EOrientationDivider}`;
  /** Пространство для ориентации */
  orientationSpace?: number;
  /** Тип разделителя */
  type?: `${ETypeDivider}`;
}

/**
 * Свойства горизонтального разделителя.
 * Интерфейс, описывающий свойства, принимаемые горизонтальным разделителем.
 */
export interface IHorizontalBorder {
  /** Определяет, является ли разделитель маленьким */
  isSmall: boolean;
  /** Определяет, является ли линия пунктирной */
  dashed?: boolean;
  /** Ориентация разделителя */
  orientation?: `${EOrientationDivider}`;
  /** Пространство для ориентации */
  orientationSpace?: number;
}

/**
 * Свойства вертикального разделителя.
 * Интерфейс, описывающий свойства, принимаемые вертикальным разделителем.
 */
export interface IVerticalBorder {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Определяет, является ли линия пунктирной */
  dashed?: boolean;
}

/**
 * Компонент Divider отображает разделитель с возможностью настройки типа, ориентации и стиля.
 */
declare const Divider: FC<IDividerProps>;

export default Divider;
