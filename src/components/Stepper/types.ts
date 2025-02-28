import { EStepState } from './subcomponents/Step/enums';

export interface IStepperProps {
  /**
   * Текущий активный шаг.
   */
  currentStep: number;

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
