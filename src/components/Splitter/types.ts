import { ReactNode } from 'react';

import { ESplitterOrientation } from './enums';

export interface ISplitterProps {
  /** Компонент для отображения в верхней/левой панели */
  topComponent?: ReactNode;
  /** Компонент для отображения в нижней/правой панели */
  bottomComponent?: ReactNode;
  /** Ориентация разделителя */
  orientation?: `${ESplitterOrientation}`;
}
