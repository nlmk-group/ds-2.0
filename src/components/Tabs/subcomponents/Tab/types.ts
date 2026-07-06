import { PropsWithChildren } from 'react';

import { EBadgeColors } from '@components/Badge/enums';

import { ETabsIndicatorPosition, ETabsOrientation } from '../../enums';

export interface ITabProps extends PropsWithChildren<any> {
  /** Текстовая метка вкладки */
  label: string;

  /** Флаг, указывающий, является ли вкладка активной */
  active?: boolean;

  /** Дочерний элемент, представляющий содержимое вкладки */
  children?: JSX.Element;

  /** Флаг, указывающий, нужно ли отображать значок (бейдж) на вкладке */
  hasBadge?: boolean;

  /** Содержимое значка (бейджа) */
  badgeChildren?: string | number;

  /** Дополнительный CSS класс для стилизации вкладки */
  className?: string;

  /** Цвет значка (бейджа) */
  badgeColor?: EBadgeColors;

  /** Флаг, указывающий, есть ли у вкладки иконка */
  hasIcon?: boolean;

  /** Ориентация табов (передаётся из родительского Tabs) */
  orientation?: `${ETabsOrientation}`;

  /** Позиция активного индикатора (передаётся из родительского Tabs) */
  indicatorPosition?: `${ETabsIndicatorPosition}`;

  /** Флаг фиксированной ширины таба (передаётся из родительского Tabs при maxTabWidth) */
  fixedWidth?: boolean;
}
