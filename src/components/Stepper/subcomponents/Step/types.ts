import { EStepColor, EStepState } from './enums';

/**
 * Свойства компонента шага (Step).
 * Интерфейс, описывающий свойства одного шага в компоненте Stepper.
 */
export interface IStepProps {
  /** Название шага */
  stepName: string;

  /** Индекс шага (порядковый номер в последовательности) */
  index: number;

  /** Состояние шага (например: active, done, error, disabled) */
  state: `${EStepState}`;

  /** Цвет шага (например: primary, success, error) */
  color: `${EStepColor}`;

  /** Флаг, указывающий, активен ли данный шаг */
  active?: boolean;
}
