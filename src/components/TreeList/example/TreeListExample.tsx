import { useState } from 'react';
import React from 'react';

import TreeList from '../TreeList';
import { TDragEvent, TNodeItem } from '../types';
import { DEFAULT_CHECKED_KEYS, DEFAULT_EXPANDED_KEYS, DEFAULT_TREE_DATA } from './constants';

export const TreeListExample = (): JSX.Element => {
  const [data, setData] = useState(DEFAULT_TREE_DATA);

  const onSelectedNode = () => {
    return null;
  };

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    setData(newData);
  };

  const onDragStart = (e: TDragEvent) => {
    // eslint-disable-next-line no-console
    console.log('Drag start event: ',  e.event)
  }

  const onDragEnd = (e: TDragEvent) => {
    // eslint-disable-next-line no-console
    console.log('Drag end event; ', e.event)
  }

  return (
    <TreeList
      data={data}
      draggable
      checkable
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      initialCheckedKeys={DEFAULT_CHECKED_KEYS}
      initialExpandedKeys={DEFAULT_EXPANDED_KEYS}
    />
  );
};
