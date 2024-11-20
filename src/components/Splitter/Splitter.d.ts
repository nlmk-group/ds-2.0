import { FC, ReactNode } from 'react';

/**
 * Свойства компонента Splitter.
 * Интерфейс, описывающий свойства, принимаемые компонентом Splitter.
 */
export interface ISplitterProps {
  /** Компонент для отображения в верхней панели */
  topComponent?: ReactNode;
  /** Компонент для отображения в нижней панели */
  bottomComponent?: ReactNode;
}

/**
 * Компонент Splitter.
 * Компонент Splitter разделяет экран на две части с возможностью изменения их размеров.
 */
declare const Splitter: FC<ISplitterProps>;

export default Splitter;