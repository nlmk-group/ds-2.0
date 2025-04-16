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
    const { container } = render(<TreeList data={MOCK_TREE_DATA} draggable onDragStart={onDragStart} onDragEnd={onDragEnd} />);

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
});
