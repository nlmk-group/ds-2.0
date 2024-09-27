import { FC } from 'react';

/**
 * Свойства компонента ProgressBar.
 * Интерфейс, описывающий свойства, принимаемые компонентом ProgressBar.
 */
export interface IProgressBarProps {
  /** Процент заполнения полосы прогресса */
  percentage: number;
  /** Метка, отображаемая внутри полосы прогресса */
  label?: string;
  /** Дополнительный CSS-класс */
  className?: string;
}

/**
 * Компонент ProgressBar.
 * Компонент ProgressBar принимает свойства, описанные в IProgressBarProps, и отображает полосу прогресса.
 */
declare const ProgressBar: FC<IProgressBarProps>;

export default ProgressBar;
