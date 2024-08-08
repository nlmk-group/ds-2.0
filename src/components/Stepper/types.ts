import { EStepState } from './subcomponents/Step/types';

export interface IStepperProps {
  /**
   * Состояние шага.
   */
  state: `${EStepState}`;

  /**
   * Название шага.
   */
  stepName: string;

  /**
   * Дополнительный CSS класс.
   */
  className?: string;

  /**
   * Индекс шага.
   */
  index: number;

  /**
   * Показывать ли шаг.
   */
  showStep: boolean;

  /**
   * Обработчик клика по шагу.
   */
  onClick?: (value: { state: `${EStepState}`; index: number }) => void;
}
