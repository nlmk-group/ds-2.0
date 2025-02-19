import React from 'react';

import { TTreeListProps } from './types';

import { TreeListV1 } from './subcomponents';

const TreeList = (prop: TTreeListProps) => {
  return <TreeListV1 {...prop} />;
};

export default TreeList;
