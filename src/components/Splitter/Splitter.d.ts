import { FC, ReactNode } from 'react';

export enum ESplitterOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical'
}

/**
 * Свойства компонента Splitter.
 * Интерфейс, описывающий свойства, принимаемые компонентом Splitter.
 */
export interface ISplitterProps {
  /** Компонент для отображения в верхней/левой панели */
  topComponent?: ReactNode;
  /** Компонент для отображения в нижней/правой панели */
  bottomComponent?: ReactNode;
  /** Ориентация разделителя */
  orientation?: `${ESplitterOrientation}`;
}

/**
 * Компонент Splitter.
 * Компонент Splitter разделяет экран на две части с возможностью изменения их размеров.
 */
declare const Splitter: FC<ISplitterProps>;

export default Splitter;
