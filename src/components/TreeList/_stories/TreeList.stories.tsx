import React, { useState } from 'react';

import { Box, IconCircleOutlined24, IconFolderFilled24, Typography } from '@components/index';

import styles from './TreeList.module.scss';

import TreeList from '../TreeList';
import { TDragEvent, TDropEvent, TNodeItem, TSelectedNodeEvent, TTreeListProps } from '../types';
import { DEFAULT_TREE_DATA, ENHANCED_TREE_DATA } from './constants';

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
    console.log('Drag start event: ', e.event);
  };

  const onDragEnd = (e: TDragEvent) => {
    console.log('Drag end event; ', e.event);
  };

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

export const TreeListWithEnhancements = (): JSX.Element => {
  const [data, setData] = useState(ENHANCED_TREE_DATA);

  const onSelectedNode = (e: TSelectedNodeEvent) => {
    console.log('SelectedNodeEvent: ', e);
  };

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag: ', newData);
    setData(newData);
  };

  const onDragStart = (e: TDragEvent) => {
    console.log('Drag start event: ', e.event);
  };

  const onDragEnd = (e: TDragEvent) => {
    console.log('Drag end event: ', e.event);
  };

  return (
    <TreeList
      data={data}
      checkable
      draggable
      rowHeight="s"
      onSelectedNode={onSelectedNode}
      onDataAfterDrag={onDataAfterDrag}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};
TreeListWithEnhancements.storyName = 'TreeList с комплексным примером';
TreeListWithEnhancements.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListCustomIcons = (): JSX.Element => {
  const iconsData: TNodeItem[] = [
    {
      key: '0-0',
      title: 'Папка проекта',
      icon: <IconFolderFilled24 />,
      children: [
        {
          key: '0-0-0',
          title: 'Файл документации',
          icon: <IconCircleOutlined24 />
        },
        {
          key: '0-0-1',
          title: 'Файл конфигурации',
          icon: <IconCircleOutlined24 />
        }
      ]
    },
    {
      key: '0-1',
      title: 'Папка с исходным кодом',
      icon: <IconFolderFilled24 />,
      children: [
        {
          key: '0-1-0',
          title: 'Главный файл',
          icon: <IconCircleOutlined24 />
        }
      ]
    },
    {
      key: '0-2',
      title: 'Узел без иконки (стандартная стрелка)',
      children: [{ key: '0-2-0', title: 'Дочерний элемент' }]
    }
  ];

  return <TreeList data={iconsData} rowHeight="s" />;
};
TreeListCustomIcons.storyName = 'TreeList с кастомными иконками';
TreeListCustomIcons.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListDragDisabled = (): JSX.Element => {
  const dragDisabledData: TNodeItem[] = [
    {
      key: '0-0',
      title: 'Обычный узел (можно перетаскивать)',
      children: [
        { key: '0-0-0', title: 'Дочерний узел' } as TNodeItem,
        { key: '0-0-1', title: 'Еще один дочерний узел' } as TNodeItem
      ]
    },
    {
      key: '0-1',
      title: 'Узел с блокировкой перетаскивания',
      disableDraggable: true,
      children: [{ key: '0-1-0', title: 'Дочерний узел' } as TNodeItem]
    },
    {
      key: '0-2',
      title: 'Секция без перетаскивания',
      disableDraggable: true,
      children: [
        {
          key: '0-2-0',
          title: 'Обычный дочерний узел (можно перетаскивать)',
          children: [{ key: '0-2-0-0', title: 'Внук' } as TNodeItem]
        } as TNodeItem,
        {
          key: '0-2-1',
          title: 'Заблокированный дочерний узел',
          disableDraggable: true
        } as TNodeItem
      ]
    }
  ];

  return <TreeList data={dragDisabledData} draggable rowHeight="s" />;
};
TreeListDragDisabled.storyName = 'TreeList с блокировкой перетаскивания';
TreeListDragDisabled.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListDisabledNodes = (): JSX.Element => {
  const disabledData: TNodeItem[] = [
    {
      key: '0-0',
      title: 'Обычный узел',
      children: [
        { key: '0-0-0', title: 'Подчиненный узел' },
        { key: '0-0-1', title: 'Заблокированный узел', disabled: true }
      ]
    },
    {
      key: '0-1',
      title: 'Полностью заблокированный раздел',
      disabled: true,
      children: [
        { key: '0-1-0', title: 'Дочерний узел 1' },
        { key: '0-1-1', title: 'Дочерний узел 2' }
      ]
    }
  ];

  return <TreeList data={disabledData} checkable draggable rowHeight="s" />;
};
TreeListDisabledNodes.storyName = 'TreeList с заблокированными узлами';
TreeListDisabledNodes.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListWithOnDrop = (): JSX.Element => {
  const onDrop = (dropEvent: TDropEvent) => {
    console.log('onDrop вызван с деталями:');
    console.log('- Ключ перетаскиваемого узла:', dropEvent.dragNode.key);
    console.log('- Ключ целевого узла:', dropEvent.node.key);
    console.log('- Позиция сброса:', dropEvent.dropPosition);
    console.log('- Сброшен между узлами:', dropEvent.dropToGap);
    console.log('- Все ключи перетаскиваемых узлов:', dropEvent.dragNodesKeys);
    console.log('- Полный объект события:', dropEvent);
  };

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('onDataAfterDrag - новые данные:', newData);
  };

  const simpleData: TNodeItem[] = [
    {
      key: '0-0',
      title: 'Перетащите меня в другой узел',
      children: [
        { key: '0-0-0', title: 'Дочерний узел 1' } as TNodeItem,
        { key: '0-0-1', title: 'Дочерний узел 2' } as TNodeItem
      ]
    } as TNodeItem,
    {
      key: '0-1',
      title: 'Целевой узел для перетаскивания',
      children: [{ key: '0-1-0', title: 'Существующий дочерний узел' } as TNodeItem]
    } as TNodeItem,
    {
      key: '0-2',
      title: 'Еще один целевой узел'
    } as TNodeItem
  ];

  return (
    <div>
      <TreeList data={simpleData} draggable rowHeight="s" onDrop={onDrop} onDataAfterDrag={onDataAfterDrag} />
    </div>
  );
};
TreeListWithOnDrop.storyName = 'TreeList с onDrop callback';
TreeListWithOnDrop.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListSameLevelDragOnly = (): JSX.Element => {
  const [data, setData] = useState<TNodeItem[]>([
    {
      key: '0',
      title: 'Корневой узел 1',
      children: [
        { key: '0-0', title: 'Дочерний 1.1' } as TNodeItem,
        { key: '0-1', title: 'Дочерний 1.2' } as TNodeItem,
        {
          key: '0-2',
          title: 'Дочерний 1.3 с детьми',
          children: [
            { key: '0-2-0', title: 'Внук 1.3.1' } as TNodeItem,
            { key: '0-2-1', title: 'Внук 1.3.2' } as TNodeItem
          ]
        } as TNodeItem
      ]
    } as TNodeItem,
    {
      key: '1',
      title: 'Корневой узел 2',
      children: [{ key: '1-0', title: 'Дочерний 2.1' } as TNodeItem, { key: '1-1', title: 'Дочерний 2.2' } as TNodeItem]
    } as TNodeItem,
    { key: '2', title: 'Корневой узел 3 (без детей)' } as TNodeItem
  ]);

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    console.log('Обновленные данные после перетаскивания:', newData);
    setData(newData);
  };

  return (
    <div>
      <TreeList
        data={data}
        draggable
        sameLevelDragOnly
        rowHeight="s"
        onDataAfterDrag={onDataAfterDrag}
        initialExpandedKeys={['0', '1', '0-2']}
      />
    </div>
  );
};
TreeListSameLevelDragOnly.storyName = 'TreeList с ограничением DnD на одном уровне';
TreeListSameLevelDragOnly.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TreeListDragPositions = (): JSX.Element => {
  const [data, setData] = useState([
    {
      key: 'parent',
      title: 'Parent',
      children: [
        { key: 'child1', title: 'Child 1' } as TNodeItem,
        { key: 'child2', title: 'Child 2' } as TNodeItem,
        { key: 'child3', title: 'Child 3' } as TNodeItem,
        { key: 'child4', title: 'Child 4' } as TNodeItem,
        { key: 'child5', title: 'Child 5' } as TNodeItem
      ]
    } as TNodeItem
  ]);

  const onDataAfterDrag = (newData: TNodeItem[]) => {
    setData(newData);
  };

  const onDrop = (e: TDropEvent) => {
    console.log('Drop event:', {
      dragKey: e.dragNode.key,
      dropKey: e.node.key,
      dropPosition: e.dropPosition,
      dropToGap: e.dropToGap,
      interpretation: e.dropToGap
        ? e.dropPosition < 0
          ? `Insert ${e.dragNode.key} BEFORE ${e.node.key}`
          : `Insert ${e.dragNode.key} AFTER ${e.node.key}`
        : `Add ${e.dragNode.key} as CHILD of ${e.node.key}`,
      hint:
        e.dropToGap && e.dropPosition === -1
          ? '🎯 Ставим ПЕРЕД целевым элементом (в начало, если цель первая)'
          : e.dropToGap && e.dropPosition === 1
          ? '🎯 Ставим ПОСЛЕ целевого элемента'
          : '✅ Добавляем как дочерний элемент'
    });
  };

  return (
    <Box style={{ padding: '20px' }}>
      <TreeList
        data={data}
        draggable
        onDataAfterDrag={onDataAfterDrag}
        onDrop={onDrop}
        initialExpandedKeys={['parent']}
      />
    </Box>
  );
};
TreeListDragPositions.storyName = 'TreeList DnD ';
TreeListDragPositions.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
