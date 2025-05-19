import { CSSProperties, ReactNode } from 'react';

export interface IOptionsProps {
  /** Дочерние элементы */
  children: ReactNode;
  
  /** Дополнительные стили для меню */
  menuStyle?: CSSProperties;
}