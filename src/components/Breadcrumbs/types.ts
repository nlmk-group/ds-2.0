import { CSSProperties, ReactElement, ReactNode } from 'react';

/**
 * Интерфейс для компонента Breadcrumbs.
 */
export interface IBreadcrumbsProps {
  /** Ширина компонента в процентах */
  width?: CSSProperties['width'];
  /** Дополнительный CSS-класс */
  className?: string;
  /** Дочерние элементы, обычно Crumb */
  children: ReactNode;
}

/**
 * Интерфейс для компонента BasicBreadcrumbs.
 */
export interface IBasicBreadcrumbsProps {
  crumbs: ReactElement[];
}

/**
 * Интерфейс для внутреннего использования компонента Crumb.
 */
export interface IInternalCrumbProps {
  /** Флаг, указывающий, является ли элемент последним */
  isLast?: boolean;
  /** Дочерний элемент, обычно ссылка */
  children: ReactElement;
}

/**
 * Интерфейс для публичного API компонента Crumb.
 */
export interface ICrumbProps {
  /** Дочерний элемент, обычно ссылка */
  children: ReactElement;
}

/**
 * Интерфейс для компонента ShortenBreadcrumbs.
 */
export interface IShortenBreadcrumbsProps {
  crumbs: ReactElement[];
}
