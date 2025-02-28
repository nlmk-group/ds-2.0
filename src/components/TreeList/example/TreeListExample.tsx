import { useState } from 'react';
import React from 'react';

import TreeList from '../TreeList';
import { TNodeItem } from '../types';
import { DEFAULT_CHECKED_KEYS, DEFAULT_EXPANDED_KEYS, DEFAULT_TREE_DATA } from './constants';

export const TreeListExample = (): JSX.Element => {
  const [data, setData] = useState(DEFAULT_TREE_DATA);

  const onSelectedNode = () => {
    return null;
  };

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    setData(newData);
  };

  return (
    <TreeList
      data={data}
      draggable
      checkable
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      initialCheckedKeys={DEFAULT_CHECKED_KEYS}
      initialExpandedKeys={DEFAULT_EXPANDED_KEYS}
    />
  );
};
