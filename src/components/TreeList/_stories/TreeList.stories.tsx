import React, { useState } from 'react';

import { Box } from '@components/index';

import styles from './TreeList.module.scss';

import TreeList from '../TreeList';
import { TDragEvent, TNodeItem, TSelectedNodeEvent, TTreeListProps } from '../types';
import { DEFAULT_TREE_DATA } from './constants';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/TreeList/Stories',
  component: TreeList,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const TreeListDefault = (argTypes: TTreeListProps): JSX.Element => {
  const [data, setData] = useState(DEFAULT_TREE_DATA);

  const onSelectedNode = (e: TSelectedNodeEvent) => {
    console.log('SelectedNodeEvent: ', e);
  };

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag: ', newData);
    setData(newData);
  };

  const onDragStart = (e: TDragEvent) => {
      console.log('Drag start event: ',  e.event)
    }
  
    const onDragEnd = (e: TDragEvent) => {
      console.log('Drag end event; ', e.event)
    }

  return (
    <TreeList
      data={data}
      checkable={argTypes.checkable}
      draggable={argTypes.draggable}
      rowHeight={argTypes.rowHeight}
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

TreeListDefault.args = {
  checkable: true,
  draggable: true,
  rowHeight: 's'
};
TreeListDefault.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
TreeListDefault.storyName = 'TreeList по умолчанию';

export const TreeListCheckableOnly = (): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />;
TreeListCheckableOnly.storyName = 'TreeList только с чекбоксами';
TreeListCheckableOnly.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListDraggableOnly = (): JSX.Element => <TreeList data={DEFAULT_TREE_DATA} draggable rowHeight="s" />;
TreeListDraggableOnly.storyName = 'TreeList с drag-n-drop';
TreeListDraggableOnly.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListSimpleCheckboxes = (): JSX.Element => (
  <TreeList data={DEFAULT_TREE_DATA} checkableSimple rowHeight="s" />
);
TreeListSimpleCheckboxes.storyName = 'TreeList с простыми чекбоксами';
TreeListSimpleCheckboxes.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListSizes = (): JSX.Element => (
  <Box flexDirection="column" gap="20px">
    <div>
      <h4>Размер XS</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="xs" />
    </div>
    <div>
      <h4>Размер S</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="s" />
    </div>
    <div>
      <h4>Размер M</h4>
      <TreeList data={DEFAULT_TREE_DATA} checkable rowHeight="m" />
    </div>
  </Box>
);
TreeListSizes.storyName = 'TreeList с разными размерами строк';
TreeListSizes.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
