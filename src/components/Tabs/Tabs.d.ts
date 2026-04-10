import { FC, PropsWithChildren } from 'react';

import { TIconProps } from '@components/Icon/types';
import { ITooltipProps } from '@components/Tooltip/types';

import { ETabsIndicatorPosition, ETabsOrientation, ETabsTabPosition } from './enums';

/**
 * Свойства компонента вкладки (Tab).
 * Интерфейс, описывающий свойства, принимаемые компонентом вкладки.
 */
export interface ITabProps extends PropsWithChildren<any> {
  /** Текс��овая метк�� вкладки */
  label: string;

  /** Фл��г, указывающий, является л�� вкладка активной */
  active?: boolean;

  /** Дочерний элемент, представляющий содержимое вкладки */
  children?: JSX.Element;

  /** Флаг, указывающий, нужно ли отображать значок (бейдж) на вкладке */
  hasBadge?: boolean;

  /** Содерж��мое значка (бейджа) */
  badgeChildren?: string | number;

  /** Дополнительный CSS класс для стилизации вкладки */
  className?: string;

  /** Цвет значка (бейдж��) */
  badgeColor?: EBadgeColors;

  /** Флаг, указывающий, есть ли у вкладки иконк�� */
  hasIcon?: boolean;

  /** Ориентация табо�� (передаётся из родительского Tabs) */
  orientation?: ETabsOrientation;

  /** По��иция активного и��дикатора (передаётся из родительского Tabs) */
  indicatorPosition?: ETabsIndicatorPosition;
}

/**
 * Свойства компонента Tabs.
 * Интерфейс, описыв��ющий свойства, п��инимаемые компонентом Tabs.
 */
export interface ITabsProps {
  /** Дочерние элементы, представляющие содержим��е вкладок */
  children: JSX.Element | JSX.Element[];

  /** ��ополнительный CSS класс для стилизации компонента вкладок */
  className?: string;

  /** Флаг, указы��ающий, должны ли вкладки быть прокручиваемыми */
  scrollable?: boolean;

  /** Ориентация табов (горизонтальная или вертикальная) */
  orientation?: ETabsOrientation;

  /** Позиция п��нели табов относительно контента (для вертикального режима) */
  tabPosition?: ETabsTabPosition;

  /** ��озиция активного индикатора */
  indicatorPosition?: ETabsIndicatorPosition;

  /** Максимальна�� ширина таба в вертикальном режиме (px) */
  maxTabWidth?: number;
}

/**
 * Компонент Tabs предоставляет вкладки с возмож��остью прокрутки.
 * Поддерживает горизонтальную и вертикальную ориентацию.
 */
declare const Tabs: FC<ITabsProps> & {
  Tab: FC<ITabProps>;
  Tooltip: FC<ITooltipProps>;
  Icon: FC<TIconProps>;
};

export default Tabs;
