import { ReactNode } from 'react';

export interface ISwitchProps {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Состояние переключателя */
  checked: boolean;
  /** Функция обработки изменения состояния */
  onChange: (checked: boolean) => void;
  /** Отключает переключатель */
  disabled?: boolean;
  /** Метка для переключателя */
  label?: string;
  /** Иконка для активного состояния */
  activeIcon?: ReactNode;
  /** Иконка для неактивного состояния */
  inactiveIcon?: ReactNode;
}
