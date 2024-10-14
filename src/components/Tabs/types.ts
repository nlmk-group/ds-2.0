export interface ITabsProps {
  /** Дочерние элементы, представляющие содержимое вкладок */
  children: JSX.Element | JSX.Element[];
  
  /** Дополнительный CSS класс для стилизации компонента вкладок */
  className?: string;
  
  /** Флаг, указывающий, должны ли вкладки быть прокручиваемыми */
  scrollable?: boolean;
}

