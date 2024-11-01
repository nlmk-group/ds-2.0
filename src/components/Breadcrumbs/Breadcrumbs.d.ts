import { CSSProperties, FC, ReactElement, ReactNode } from 'react';

export interface IBreadcrumbsProps {
  /** Ширина компонента */
  width?: CSSProperties['width'];
  /** Дополнительный CSS-класс для компонента хлебных крошек */
  className?: string;
  /** Дочерние элементы, обычно Crumb */
  children: ReactNode;
}

export interface ICrumbProps {
  /** Дочерний элемент, обычно ссылка */
  children: ReactElement;
}

interface IBreadcrumbsComponent extends FC<IBreadcrumbsProps> {
  Crumb: FC<ICrumbProps>;
}

declare const Breadcrumbs: IBreadcrumbsComponent;

export default Breadcrumbs;
