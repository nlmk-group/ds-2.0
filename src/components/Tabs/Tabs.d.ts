import { FC, PropsWithChildren } from 'react';

import { TIconProps } from '@components/Icon/types';
import { ITooltipProps } from '@components/Tooltip/types';

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
}

/**
 * Компонент Tabs предоставляет вкладки с возможностью прокрутки.
 */
declare const Tabs: FC<ITabs> & {
  Tab: FC<ITab>;
  Tooltip: FC<ITooltipProps>;
  Icon: FC<TIconProps>;
};

export default Tabs;
