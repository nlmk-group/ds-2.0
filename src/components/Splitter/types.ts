import { ReactNode } from 'react';

import { ESplitterOrientation } from './enums';

export interface ISplitterProps {
  /** Компонент для отображения в верхней/левой панели */
  topComponent?: ReactNode;
  /** Компонент для отображения в нижней/правой панели */
  bottomComponent?: ReactNode;
  /** Ориентация разделителя */
  orientation?: `${ESplitterOrientation}`;
  /** Размер верхней панели */
  topComponentSize?: number;
  /** Размер нижней панели */
  bottomComponentSize?: number;
  /** Показ нижней панели */
  isShowBottomComponent?: boolean;
}
