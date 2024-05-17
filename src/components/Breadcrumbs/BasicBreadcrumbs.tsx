import React, { FC } from 'react';

import { Breadcrumb } from './types';

import LinkComponent from './LinkComponent';

const BasicBreadcrumbs: FC<{ crumbs: Breadcrumb[] }> = ({ crumbs }): JSX.Element => (
  <>
    {crumbs.map((item: Breadcrumb, index) => (
      <LinkComponent key={index} {...item} isLast={crumbs.length === index+1} />
    ))}
  </>
);

export default BasicBreadcrumbs;
