import React, { cloneElement, FC, ReactElement } from 'react';

import { IBasicBreadcrumbsProps } from '../types';

const BasicBreadcrumbs: FC<IBasicBreadcrumbsProps> = ({ crumbs }) => (
  <>
    {crumbs.map((crumb: ReactElement, index: number) => {
      const isLast = index === crumbs.length - 1;
      return cloneElement(crumb, {
        isLast,
        showSeparator: !isLast,
        key: index
      });
    })}
  </>
);

export default BasicBreadcrumbs;
