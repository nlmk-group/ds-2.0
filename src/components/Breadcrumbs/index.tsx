import React, { Children, FC, isValidElement, ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { IBreadcrumbsProps } from './types';

import styles from './Breadcrumbs.module.scss';

import { BasicBreadcrumbs, Crumb, ShortenBreadcrumbs } from './subcomponents';

const CRUMB_MARGIN = 8;
const SEPARATOR_WIDTH = 16;

/**
 * Компонент Breadcrumbs для отображения навигационной цепочки (хлебных крошек).
 * Использует паттерн Compound Components для гибкости использования.
 *
 * @param {object} props - Свойства компонента Breadcrumbs.
 * @param {CSSProperties['width']} [props.width=100] - Ширина компонента. По умолчанию 100.
 * @param {string} [props.className] - Дополнительный CSS-класс для компонента.
 * @param {ReactNode} props.children - Дочерние элементы, обычно компоненты Crumb.
 * @returns {JSX.Element} Компонент Breadcrumbs.
 *
 */
const Breadcrumbs: FC<IBreadcrumbsProps> & {
  Crumb: typeof Crumb;
} = ({ width = '100%', className, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [linkSumWidth, setLinkSumWidth] = useState<number>(0);

  const handleSetElementWidth = (): void => {
    if (ref.current && elementWidth !== ref.current.offsetWidth) {
      setElementWidth(ref.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    handleSetElementWidth();
  }, [width, children]);

  useEffect(() => {
    const handleWindowResize = () => {
      handleSetElementWidth();
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setLinkSumWidth(charsOverflow());
  }, [elementWidth, width, children]);

  const charsOverflow = (): number => {
    let result = 0;
    const nodeArray: NodeListOf<HTMLElement> | [] = ref.current?.querySelectorAll('[data-link-width]') || [];
    nodeArray.forEach(({ clientWidth }) => {
      result += clientWidth + CRUMB_MARGIN + SEPARATOR_WIDTH;
    });
    return result;
  };

  const crumbs = Children.toArray(children).filter(
    (child): child is ReactElement =>
      isValidElement(child) && (child.type as unknown as { displayName?: string }).displayName === 'Crumb'
  );

  const condition = elementWidth > linkSumWidth || crumbs.length <= 2;

  return (
    <div
      ref={ref}
      className={clsx(styles.breadcrumbs, className)}
      style={{ width: width }}
      data-ui-breadcrumbs
      data-testid="BREADCRUMBS_WRAPPER"
    >
      {condition ? <BasicBreadcrumbs crumbs={crumbs} /> : <ShortenBreadcrumbs crumbs={crumbs} />}
    </div>
  );
};

Breadcrumbs.Crumb = Crumb;

export default Breadcrumbs;
