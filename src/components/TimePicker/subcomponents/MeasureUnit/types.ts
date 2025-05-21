import { MouseEvent, MouseEventHandler, ReactNode } from 'react';

export interface IMeasureUnitProps {
  /** Флаг выбранного состояния */
  selected?: boolean;
  /** Флаг блокировки компонента */
  disabled?: boolean;
  /** Обработчик клика */
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
  /** Обработчик наведения мыши */
  onHover?: (event: MouseEvent<HTMLDivElement>) => void;
  /** Дочерние элементы */
  children?: ReactNode;
  /** Флаг блокировки изменения времени */
  disableTimeChange?: boolean;
}
