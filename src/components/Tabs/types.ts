import { ETabsOrientation, ETabsTabPosition } from './enums';

export interface ITabsProps {
  /** Дочерние элементы, представляющие содержимое вкладок */
  children: JSX.Element | JSX.Element[];

  /** Дополнительный CSS класс для стилизации компонента вкладок */
  className?: string;

  /** Флаг, указывающий, должны ли вкладки быть прокручиваемыми */
  scrollable?: boolean;

  /** Ориентация табов (горизонтальная или вертикальная) */
  orientation?: `${ETabsOrientation}`;

  /** Позиция панели табов относительно контента (для вертикального режима) */
  tabPosition?: `${ETabsTabPosition}`;

  /** Максимальная ширина таба в вертикальном режиме (px). При установке включает режим фиксированной ширины колонки с ellipsis у длинных лейблов */
  maxTabWidth?: number;
}
