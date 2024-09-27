import { ESizesSpinner } from './enums';

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
