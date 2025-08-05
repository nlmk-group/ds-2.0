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
});
