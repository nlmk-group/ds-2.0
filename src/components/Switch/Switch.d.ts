import { FC } from 'react';

/**
 * Свойства компонента Switch.
 * Интерфейс, описывающий свойства, принимаемые компонентом Switch.
 */
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

/**
 * Компонент Switch предоставляет переключатель с возможностью настройки состояния, иконок и метки.
 */
declare const Switch: FC<ISwitchProps>;

export default Switch;
