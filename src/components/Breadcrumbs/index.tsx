import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { BreadcrumbsProps } from './types';

import styles from './Breadcrumbs.module.scss';

import BasicBreadcrumbs from './BasicBreadcrumbs';
import ShortenBreadcrumbs from './ShortenBreadcrumbs';

const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs, width = 100, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [linkSumWidth, setLinkSumWidth] = useState<number>(0);

  const charsOverflow = (): number => {
    let result = 0;
    const nodeArray: NodeListOf<HTMLElement> = document.querySelectorAll('a#linkWidth');
    nodeArray.forEach(({ clientWidth }) => {
      result += clientWidth + 8 + 16;
    });
    return result;
  };

  useEffect(() => {
    handleSetElementWidth();
  }, [width]);

  useEffect(() => {
    if (linkSumWidth === 0) {
      setLinkSumWidth(charsOverflow());
    }
  }, [elementWidth, width]);

  const handleSetElementWidth = (): void => {
    if (!!ref && !!ref.current && elementWidth !== ref.current.offsetWidth) {
      setElementWidth(ref.current.offsetWidth);
    }
  };

  useLayoutEffect(() => {
    handleSetElementWidth();
  }, []);

  useEffect(() => {
    function handleWindowResize() {
      handleSetElementWidth();
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [ref?.current?.offsetWidth]);

  const condition = elementWidth > linkSumWidth || crumbs.length <= 2;

  return (
    <div
      data-testid="BREADCRUMBS_WRAPPER"
      ref={ref}
      className={clsx(styles.wrapper, className)}
      style={{ width: `${width}%` }}
    >
      {condition ? <BasicBreadcrumbs crumbs={crumbs} /> : <ShortenBreadcrumbs crumbs={crumbs} />}
    </div>
  );
};

export default Breadcrumbs;
