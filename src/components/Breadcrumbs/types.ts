export interface IBreadcrumbProps {
  /** Текст, отображаемый для элемента хлебных крошек */
  label: string;
  /** URL-адрес, на который ведет элемент хлебных крошек */
  href: string;
  /** Флаг, указывающий, является ли элемент активным */
  active?: boolean;
  /** Атрибут target для ссылки (например, "_blank" для открытия в новой вкладке) */
  target?: string;
  /** Флаг, указывающий, является ли элемент последним в цепочке хлебных крошек */
  isLast?: boolean;
}

export interface ILinkComponentProps extends IBreadcrumbProps {}

export interface IBreadcrumbsProps {
  /** Дополнительный CSS-класс для компонента */
  className?: string;
  /** Массив элементов хлебных крошек */
  crumbs: IBreadcrumbProps[];
  /** Ширина компонента хлебных крошек в процентах */
  width?: number;
}

/**
 * Тип для представления ширины DOM-узла
 */
export type TNodeWidth = Pick<HTMLElement, 'offsetWidth' | 'scrollWidth'>;
