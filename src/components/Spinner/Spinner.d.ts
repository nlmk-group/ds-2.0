import { FC } from 'react';

/**
 * Перечисление размеров спиннера.
 * Описывает возможные размеры компонента Spinner.
 */
export enum ESizesSpinner {
  xxl = '2xl',
  xl = 'xl',
  l = 'l',
  m = 'm'
}

/**
 * Свойства компонента Spinner.
 * Интерфейс, описывающий свойства, принимаемые компонентом Spinner.
 */
export interface ISpinnerProps {
  /** Размер спиннера. По умолчанию ESizesSpinner.l */
  size?: `${ESizesSpinner}`;

  /** Цвет заполнения спиннера */
  color?: string;

  /** Цвет фона спиннера */
  bgColor?: string;

  /** Процент выполнения для отображения в центре спиннера. Если null, процент не отображается */
  percent?: number | null;

  /** Содержимое спиннера (например, иконка) */
  children?: JSX.Element;

  /** Процент заполнения круга спиннера. Значение от 0 до 0.9 */
  progressPercentage?: number;
}


/**
 * Компонент Spinner отображает индикатор загрузки с различными размерами, цветами и процентами выполнения.
 */
declare const Spinner: FC<ISpinnerProps>;

export default Spinner;
