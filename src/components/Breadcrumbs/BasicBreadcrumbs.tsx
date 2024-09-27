import React, { FC } from 'react';

import { IBreadcrumbProps } from './types';

import LinkComponent from './LinkComponent';

const BasicBreadcrumbs: FC<{ crumbs: IBreadcrumbProps[] }> = ({ crumbs }): JSX.Element => (
  <>
    {crumbs.map((item: IBreadcrumbProps, index) => (
      <LinkComponent key={index} {...item} isLast={crumbs.length === index+1} />
    ))}
  </>
);

export default BasicBreadcrumbs;
