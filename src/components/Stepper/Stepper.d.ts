import { FC } from 'react';

import { EStepColor, EStepState } from './subcomponents/Step/enums';

/**
 * Свойства отдельного шага (Step).
 * Интерфейс, описывающий свойства, принимаемые компонентом Step.
 */
export interface IStepProps {
  /** Название шага */
  stepName: string;

  /** Индекс шага (порядковый номер в цепочке) */
  index: number;

  /** Состояние шага (активен, завершён, с ошибкой и т.д.) */
  state: EStepState;

  /** Цвет индикатора шага */
  color: EStepColor;

  /** Флаг, указывающий, активен ли данный шаг */
  active?: boolean;
}

/**
 * Свойства компонента Stepper.
 * Интерфейс, описывающий свойства, принимаемые компонентом Stepper.
 */
export interface IStepperProps {
  /** Текущий активный шаг (по индексу) */
  currentStep: number;

  /** Состояние текущего шага */
  state: EStepState;

  /** Название текущего шага */
  stepName: string;

  /** Дополнительный CSS класс для стилизации компонента */
  className?: string;

  /** Индекс шага (если Stepper отображает один шаг) */
  index: number;

  /** Флаг, указывающий, должен ли отображаться данный шаг */
  showStep: boolean;

  /** Обработчик клика по шагу */
  onClick?: (value: { state: EStepState; index: number }) => void;

  /** Цвет отображения шага */
  color?: EStepColor;
}

/**
 * Компонент Stepper предоставляет визуальное представление шагов (этапов)
 * с возможностью отображения активных, завершённых и ошибок.
 */
declare const Stepper: FC<IStepperProps> & {
  /** Компонент отдельного шага */
  Step: FC<IStepProps>;
};

export default Stepper;
