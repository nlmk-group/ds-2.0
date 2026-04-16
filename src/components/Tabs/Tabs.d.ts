import { FC, PropsWithChildren } from 'react';

import { TIconProps } from '@components/Icon/types';
import { ITooltipProps } from '@components/Tooltip/types';

import { ETabsIndicatorPosition, ETabsOrientation, ETabsTabPosition } from './enums';

/**
 * Свойства компонента вкладки (Tab).
 * Интерфейс, описывающий свойства, принимаемые компонентом вкладки.
 */
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
  orientation?: ETabsOrientation;

  /** Позиция активного индикатора (передаётся из родительского Tabs) */
  indicatorPosition?: ETabsIndicatorPosition;

  /** Флаг фиксированной ширины таба (передаётся из родительского Tabs при maxTabWidth) */
  fixedWidth?: boolean;
}

/**
 * Свойства компонента Tabs.
 * Интерфейс, описывающий свойства, принимаемые компонентом Tabs.
 */
export interface ITabsProps {
  /** Дочерние элементы, представляющие содержимое вкладок */
  children: JSX.Element | JSX.Element[];

  /** Дополнительный CSS класс для стилизации компонента вкладок */
  className?: string;

  /** Флаг, указывающий, должны ли вкладки быть прокручиваемыми */
  scrollable?: boolean;

  /** Ориентация табов (горизонтальная или вертикальная) */
  orientation?: ETabsOrientation;

  /** Позиция панели табов относительно контента (для вертикального режима) */
  tabPosition?: ETabsTabPosition;

  /** Максимальная ширина таба в вертикальном режиме (px). При установке включает режим фиксированной ширины колонки с ellipsis у длинных лейблов */
  maxTabWidth?: number;

  /** Позиция активного индикатора. По умолчанию: horizontal → bottom, vertical+left → right, vertical+right → left */
  indicatorPosition?: ETabsIndicatorPosition;
}

/**
 * Компонент Tabs предоставляет вкладки с возможностью прокрутки.
 * Поддерживает горизонтальную и вертикальную ориентацию.
 */
declare const Tabs: FC<ITabsProps> & {
  Tab: FC<ITabProps>;
  Tooltip: FC<ITooltipProps>;
  Icon: FC<TIconProps>;
};

export default Tabs;
