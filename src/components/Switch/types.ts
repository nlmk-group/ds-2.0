import { CSSProperties, ReactNode } from 'react';

import { ESwitchColors } from './enums';

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
  /** Цвет switch */
  color?: `${ESwitchColors}`;
  /** Inline стили для кастомизации компонента */
  style?: CSSProperties;
}
