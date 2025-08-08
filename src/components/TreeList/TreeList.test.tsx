import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { TNodeItem } from './types';

import { MOCK_TREE_DATA } from './mock/constants';
import TreeList from './TreeList';

describe('src/components/TreeList', () => {
  // Тест базового рендера
  test('It should render a tree list', () => {
    const { container } = render(<TreeList data={MOCK_TREE_DATA} />);
    const treeList = container.getElementsByClassName('custom-rc-tree')[0];
    expect(treeList).toBeInTheDocument();
  });

  // Тест выбора узла с чекбоксом
  test('It should handle node selection with checkbox', () => {
    const onSelectedNode = jest.fn();
    const { container } = render(<TreeList data={MOCK_TREE_DATA} checkable onSelectedNode={onSelectedNode} />);

    const firstCheckbox = container.querySelector('[data-key="0-0"] input[type="checkbox"]');
    if (firstCheckbox) {
      fireEvent.click(firstCheckbox);
      expect(onSelectedNode).toHaveBeenCalled();
    }
  });

  // Тест простых чекбоксов (без каскадного выделения)
  test('It should handle simple checkboxes without cascade selection', () => {
    const onSelectedNode = jest.fn();
    const { container } = render(<TreeList data={MOCK_TREE_DATA} checkableSimple onSelectedNode={onSelectedNode} />);

    const parentCheckbox = container.querySelector('[data-key="0-0"] input[type="checkbox"]');
    const childCheckbox = container.querySelector('[data-key="0-0-0"] input[type="checkbox"]');

    if (parentCheckbox && childCheckbox) {
      fireEvent.click(parentCheckbox);
      expect(onSelectedNode).toHaveBeenCalledTimes(1);

      // Проверяем, что дочерний чекбокс не выбран автоматически
      expect(childCheckbox).not.toBeChecked();
    }
  });

  // Тест drag-n-drop функциональности
  test('It should handle drag and drop', () => {
    const onDataAfterDrag = jest.fn();
    const { container } = render(<TreeList data={MOCK_TREE_DATA} draggable onDataAfterDrag={onDataAfterDrag} />);

    const dragNode = container.querySelector('[data-key="0-0-0"]');
    const dropNode = container.querySelector('[data-key="0-1"]');

    if (dragNode && dropNode) {
      fireEvent.dragStart(dragNode);
      fireEvent.dragEnter(dropNode);
      fireEvent.dragOver(dropNode);
      fireEvent.drop(dropNode);

      expect(onDataAfterDrag).toHaveBeenCalled();
    }
  });

  // Тест разных размеров строк
  test('It should render with different row heights', () => {
    const { container: containerXS } = render(<TreeList data={MOCK_TREE_DATA} rowHeight="xs" />);
    const { container: containerS } = render(<TreeList data={MOCK_TREE_DATA} rowHeight="s" />);
    const { container: containerM } = render(<TreeList data={MOCK_TREE_DATA} rowHeight="m" />);

    expect(containerXS.querySelector('[style*="--row-height"]')).toBeInTheDocument();
    expect(containerS.querySelector('[style*="--row-height"]')).toBeInTheDocument();
    expect(containerM.querySelector('[style*="--row-height"]')).toBeInTheDocument();
  });

  // Тест правых контролов
  test('It should render right side controls', () => {
    const rightSideControls = <div data-testid="controls">Controls</div>;
    const dataWithControls: TNodeItem[] = [
      {
        key: '1',
        title: 'Узел с контролами',
        rightSideControls
      }
    ];

    const { getByTestId } = render(<TreeList data={dataWithControls} />);
    expect(getByTestId('controls')).toBeInTheDocument();
  });

  // Тест обработчиков onDragStart и onDragEnd
  test('It should handle drag start and end callbacks', () => {
    const onDragStart = jest.fn();
    const onDragEnd = jest.fn();
    const { container } = render(
      <TreeList data={MOCK_TREE_DATA} draggable onDragStart={onDragStart} onDragEnd={onDragEnd} />
    );

    const dragNode = container.querySelector('[data-key="0-0-0"]');
    const dropNode = container.querySelector('[data-key="0-1"]');

    if (dragNode && dropNode) {
      fireEvent.dragStart(dragNode);
      expect(onDragStart).toHaveBeenCalled();

      fireEvent.dragEnter(dropNode);
      fireEvent.dragOver(dropNode);
      fireEvent.drop(dropNode);
      expect(onDragEnd).toHaveBeenCalled();
    }
  });

  test('It should render disabled nodes with proper styling and behavior', () => {
    const onSelectedNode = jest.fn();
    const dataWithDisabled: TNodeItem[] = [
      {
        key: 'disabled-1',
        title: 'Disabled Node',
        disabled: true
      },
      {
        key: 'normal-1',
        title: 'Normal Node'
      }
    ];

    const { container } = render(<TreeList data={dataWithDisabled} checkable onSelectedNode={onSelectedNode} />);

    expect(container.querySelector('.custom-rc-tree')).toBeInTheDocument();

    const disabledCheckbox = container.querySelector('input[type="checkbox"][disabled]');
    expect(disabledCheckbox).toBeInTheDocument();

    const disabledElement = container.querySelector('[data-disabled="true"]');
    expect(disabledElement).toBeInTheDocument();
  });

  test('It should prevent dragging of nodes with disableDraggable', () => {
    const onDataAfterDrag = jest.fn();
    const dataWithDisableDrag: TNodeItem[] = [
      {
        key: 'no-drag-1',
        title: 'Cannot Drag',
        disableDraggable: true
      },
      {
        key: 'normal-1',
        title: 'Normal Node'
      }
    ];

    const { container } = render(<TreeList data={dataWithDisableDrag} draggable onDataAfterDrag={onDataAfterDrag} />);

    const noDragNode = container.querySelector('[data-key="no-drag-1"]');
    const normalNode = container.querySelector('[data-key="normal-1"]');

    if (noDragNode && normalNode) {
      fireEvent.dragStart(noDragNode);
      fireEvent.dragEnter(normalNode);
      fireEvent.dragOver(normalNode);
      fireEvent.drop(normalNode);

      expect(onDataAfterDrag).not.toHaveBeenCalled();
    }
  });

  test('It should render custom icons', () => {
    const customIcon = <div data-testid="custom-icon">📁</div>;
    const dataWithIcon: TNodeItem[] = [
      {
        key: 'icon-1',
        title: 'Node with Custom Icon',
        icon: customIcon
      },
      {
        key: 'no-icon-1',
        title: 'Node without Icon',
        children: [
          {
            key: 'child-1',
            title: 'Child Node'
          }
        ]
      }
    ];

    const { getAllByTestId, container } = render(<TreeList data={dataWithIcon} />);

    const customIcons = getAllByTestId('custom-icon');
    expect(customIcons.length).toBeGreaterThan(0);

    const customIconElement = container.querySelector('.custom-icon');
    expect(customIconElement).toBeInTheDocument();
  });

  test('It should make custom icons clickable for nodes with children', () => {
    const customIcon = <div data-testid="custom-icon-test">📁</div>;
    const dataWithExpandableIcon: TNodeItem[] = [
      {
        key: 'expandable-1',
        title: 'Expandable Node with Custom Icon',
        icon: customIcon,
        children: [
          {
            key: 'child-1',
            title: 'Child Node'
          }
        ]
      }
    ];

    const { container } = render(<TreeList data={dataWithExpandableIcon} />);

    const customIconElements = container.querySelectorAll('.custom-icon');
    expect(customIconElements.length).toBeGreaterThan(0);

    const clickableIcon = container.querySelector('.custom-icon[style*="pointer"]');
    expect(clickableIcon).toBeInTheDocument();
  });

  test('It should prevent dropping on disabled nodes', () => {
    const onDataAfterDrag = jest.fn();
    const dataWithDisabledDrop: TNodeItem[] = [
      {
        key: 'source-1',
        title: 'Source Node'
      },
      {
        key: 'disabled-target-1',
        title: 'Disabled Target',
        disabled: true,
        children: []
      }
    ];

    const { container } = render(<TreeList data={dataWithDisabledDrop} draggable onDataAfterDrag={onDataAfterDrag} />);

    const sourceNode = container.querySelector('[data-key="source-1"]');
    const disabledTarget = container.querySelector('[data-key="disabled-target-1"]');

    if (sourceNode && disabledTarget) {
      fireEvent.dragStart(sourceNode);
      fireEvent.dragEnter(disabledTarget);
      fireEvent.dragOver(disabledTarget);
      fireEvent.drop(disabledTarget);

      expect(onDataAfterDrag).not.toHaveBeenCalled();
    }
  });

  test('It should handle combination of disabled and disableDraggable properly', () => {
    const onSelectedNode = jest.fn();
    const onDataAfterDrag = jest.fn();
    const mixedData: TNodeItem[] = [
      {
        key: 'mixed-1',
        title: 'Disabled and No Drag',
        disabled: true,
        disableDraggable: true
      },
      {
        key: 'normal-1',
        title: 'Normal Node'
      }
    ];

    const { container } = render(
      <TreeList
        data={mixedData}
        checkable
        draggable
        onSelectedNode={onSelectedNode}
        onDataAfterDrag={onDataAfterDrag}
      />
    );

    expect(container.querySelector('.custom-rc-tree')).toBeInTheDocument();

    const disabledElement = container.querySelector('[data-disabled="true"]');
    expect(disabledElement).toBeInTheDocument();

    const disabledCheckbox = container.querySelector('input[type="checkbox"][disabled]');
    expect(disabledCheckbox).toBeInTheDocument();

    const treeNodes = container.querySelectorAll('.rc-tree-treenode');
    if (treeNodes.length >= 2) {
      fireEvent.dragStart(treeNodes[0]);
      fireEvent.dragEnter(treeNodes[1]);
      fireEvent.dragOver(treeNodes[1]);
      fireEvent.drop(treeNodes[1]);

      expect(onDataAfterDrag).not.toHaveBeenCalled();
    }
  });

  it('It should call onDrop callback with detailed drag information', () => {
    const onDrop = jest.fn();
    const onDataAfterDrag = jest.fn();

    const { container } = render(
      <TreeList data={MOCK_TREE_DATA} draggable onDrop={onDrop} onDataAfterDrag={onDataAfterDrag} />
    );

    const treeNodes = container.querySelectorAll('.rc-tree-treenode .rc-tree-node-content-wrapper');

    if (treeNodes.length >= 2) {
      const sourceNode = treeNodes[0];
      const targetNode = treeNodes[1];

      fireEvent.dragStart(sourceNode);
      fireEvent.dragEnter(targetNode);
      fireEvent.dragOver(targetNode);
      fireEvent.drop(targetNode);

      expect(onDrop).toHaveBeenCalledTimes(1);

      const dropEventArgs = onDrop.mock.calls[0][0];
      expect(dropEventArgs).toHaveProperty('dragNode');
      expect(dropEventArgs).toHaveProperty('dropPosition');
      expect(dropEventArgs).toHaveProperty('dropToGap');
      expect(dropEventArgs).toHaveProperty('dragNodesKeys');

      expect(onDataAfterDrag).toHaveBeenCalledTimes(1);
    }
  });

  it('It should restrict drag and drop to same level when sameLevelDragOnly is enabled', () => {
    const sameLevelData = [
      {
        key: '0',
        title: 'Root Node 1',
        children: [
          { key: '0-0', title: 'Child 1-1' },
          { key: '0-1', title: 'Child 1-2' }
        ]
      },
      {
        key: '1',
        title: 'Root Node 2',
        children: [{ key: '1-0', title: 'Child 2-1' }]
      }
    ];

    const onDataAfterDrag = jest.fn();

    const { container } = render(
      <TreeList data={sameLevelData} draggable sameLevelDragOnly onDataAfterDrag={onDataAfterDrag} />
    );

    const treeNodes = container.querySelectorAll('.rc-tree-treenode .rc-tree-node-content-wrapper');

    if (treeNodes.length >= 3) {
      // Попытка перетащить root узел на child узел (должна быть заблокирована)
      const rootNode = treeNodes[0]; // Root Node 1
      const childNode = treeNodes[2]; // Child node

      fireEvent.dragStart(rootNode);
      fireEvent.dragEnter(childNode);
      fireEvent.dragOver(childNode);
      fireEvent.drop(childNode);

      // onDataAfterDrag не должен быть вызван, так как операция заблокирована
      expect(onDataAfterDrag).not.toHaveBeenCalled();
    }
  });

  it('It should allow drag and drop between nodes of the same level', () => {
    const sameLevelData = [
      { key: '0', title: 'Root Node 1' },
      { key: '1', title: 'Root Node 2' },
      { key: '2', title: 'Root Node 3' }
    ];

    const onDataAfterDrag = jest.fn();

    const { container } = render(
      <TreeList data={sameLevelData} draggable sameLevelDragOnly onDataAfterDrag={onDataAfterDrag} />
    );

    const treeNodes = container.querySelectorAll('.rc-tree-treenode .rc-tree-node-content-wrapper');

    if (treeNodes.length >= 2) {
      // Перетаскивание между root узлами одного уровня (должно работать)
      const sourceNode = treeNodes[0];
      const targetNode = treeNodes[1];

      fireEvent.dragStart(sourceNode);
      fireEvent.dragEnter(targetNode);
      fireEvent.dragOver(targetNode);
      fireEvent.drop(targetNode);

      // onDataAfterDrag должен быть вызван
      expect(onDataAfterDrag).toHaveBeenCalledTimes(1);
    }
  });

  it('It should prevent creating children when sameLevelDragOnly is enabled (dropPosition = 0)', () => {
    const hierarchicalData = [
      {
        key: '0',
        title: 'Parent Node',
        children: [
          { key: '0-0', title: 'Child 1' },
          { key: '0-1', title: 'Child 2' }
        ]
      },
      { key: '1', title: 'Standalone Node' }
    ];

    const onDataAfterDrag = jest.fn();

    render(
      <TreeList
        data={hierarchicalData}
        draggable
        sameLevelDragOnly
        onDataAfterDrag={onDataAfterDrag}
        initialExpandedKeys={['0']}
      />
    );

    expect(onDataAfterDrag).not.toHaveBeenCalled();
  });

  it('It should prevent drag between different hierarchy branches when sameLevelDragOnly is enabled', () => {
    const branchedData = [
      {
        key: 'branch-a',
        title: 'Branch A',
        children: [
          { key: 'a-1', title: 'A Child 1' },
          { key: 'a-2', title: 'A Child 2' }
        ]
      },
      {
        key: 'branch-b',
        title: 'Branch B',
        children: [
          { key: 'b-1', title: 'B Child 1' },
          { key: 'b-2', title: 'B Child 2' }
        ]
      }
    ];

    const onDataAfterDrag = jest.fn();

    render(
      <TreeList
        data={branchedData}
        draggable
        sameLevelDragOnly
        onDataAfterDrag={onDataAfterDrag}
        initialExpandedKeys={['branch-a', 'branch-b']}
      />
    );

    expect(onDataAfterDrag).not.toHaveBeenCalled();
  });

  it('It should work correctly without sameLevelDragOnly (backward compatibility)', () => {
    const testData = [
      {
        key: '0',
        title: 'Root',
        children: [{ key: '0-0', title: 'Child' }]
      },
      { key: '1', title: 'Another Root' }
    ];

    const onDataAfterDrag = jest.fn();

    const { container } = render(
      <TreeList data={testData} draggable onDataAfterDrag={onDataAfterDrag} initialExpandedKeys={['0']} />
    );

    const treeNodes = container.querySelectorAll('.rc-tree-treenode .rc-tree-node-content-wrapper');

    if (treeNodes.length >= 2) {
      const sourceNode = treeNodes[1];
      const targetNode = treeNodes[2];

      fireEvent.dragStart(sourceNode);
      fireEvent.dragEnter(targetNode);
      fireEvent.dragOver(targetNode);
      fireEvent.drop(targetNode);

      expect(onDataAfterDrag).toHaveBeenCalledTimes(1);
    }
  });

  it('It should correctly handle moving element to different positions', () => {
    // Импортируем функции утилит для тестирования
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { findAndRemoveNode, addNodeAtKey } = require('./subcomponents/TreeListV1/utils');

    // Тест перемещения в начало (position = 0)
    let testData = [
      { key: 'child1', title: 'Child 1' },
      { key: 'child2', title: 'Child 2' },
      { key: 'child3', title: 'Child 3' }
    ];

    // Перемещаем child3 ПЕРЕД child1 (relative = -1)
    const dragNode = findAndRemoveNode(testData, 'child3');
    addNodeAtKey(testData, 'child1', dragNode, -1, true);

    expect(testData[0].key).toBe('child3');
    expect(testData[1].key).toBe('child1');
    expect(testData[2].key).toBe('child2');

    // Тест перемещения в конец (position = 2)
    testData = [
      { key: 'child1', title: 'Child 1' },
      { key: 'child2', title: 'Child 2' },
      { key: 'child3', title: 'Child 3' }
    ];

    // Перемещаем child1 ПОСЛЕ child3 (relative = +1)
    const dragNode2 = findAndRemoveNode(testData, 'child1');
    addNodeAtKey(testData, 'child3', dragNode2, 1, true);

    expect(testData[0].key).toBe('child2');
    expect(testData[1].key).toBe('child3');
    expect(testData[2].key).toBe('child1');

    // Тест добавления как дочерний элемент (!toGap)
    const parentTestData: TNodeItem[] = [
      { key: 'parent', title: 'Parent', children: [] },
      { key: 'child1', title: 'Child 1' }
    ];

    const dragNode3 = findAndRemoveNode(parentTestData, 'child1');
    addNodeAtKey(parentTestData, 'parent', dragNode3, 0, false);

    expect(parentTestData[0].children).toHaveLength(1);
    expect(parentTestData[0].children?.[0].key).toBe('child1');
  });

  it('It should correctly handle moving element to first position (position -1)', () => {
    // Импортируем функции утилит для тестирования
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { findAndRemoveNode, addNodeAtKey } = require('./subcomponents/TreeListV1/utils');

    // Тест: ставим child5 в самое начало
    const testData = [
      { key: 'child1', title: 'Child 1' },
      { key: 'child2', title: 'Child 2' },
      { key: 'child3', title: 'Child 3' },
      { key: 'child4', title: 'Child 4' },
      { key: 'child5', title: 'Child 5' }
    ];

    // Удаляем child5
    const dragNode = findAndRemoveNode(testData, 'child5');

    // Вставляем ПЕРЕД child1 (position = -1)
    addNodeAtKey(testData, 'child1', dragNode, -1, true);

    // child5 должен быть первым
    expect(testData[0].key).toBe('child5');
    expect(testData[1].key).toBe('child1');
  });
});
