import React, { FC, useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';
import { createPortal } from 'react-dom';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
import Scrollbar from '@components/Scrollbar';
import { flexRender, getCoreRowModel, Row as TableRow, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';

import { IOperationRow } from './types';

import styles from './DraggableRowsIndicator.module.scss';

import { getCellProps } from '../utils';
import { columns, initialData } from './constants';

const DRAG_TYPE = 'operation-row-indicator-rdnd';

interface IDragItem {
  id: string;
  index: number;
  width: number;
  height: number;
  initialLeft: number;
  initialTop: number;
  cellWidths: number[];
}

interface IIndicator {
  targetIndex: number;
  position: 'before' | 'after';
  lineY: number;
}

interface IDraggableRowProps {
  row: TableRow<IOperationRow>;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onHover: (indicator: IIndicator | null) => void;
  onMove: (from: number, to: number) => void;
  onDrop: (sourceIndex: number) => void;
  onDragEnd: () => void;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, index, containerRef, onHover, onDrop, onMove, onDragEnd }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: (): IDragItem => {
      const { width, height, left: initialLeft, top: initialTop } = ref.current!.getBoundingClientRect();
      return {
        id: row.id,
        index,
        width,
        height,
        initialLeft,
        initialTop,
        cellWidths: Array.from(ref.current!.cells, cell => cell.getBoundingClientRect().width)
      };
    },
    end: () => onDragEnd(),
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item: IDragItem, monitor) => {
      if (!ref.current || !containerRef.current) return;
      if (item.index === index) {
        onHover(null);
        return;
      }
      const pointerOffset = monitor.getClientOffset();
      if (!pointerOffset) return;
      const hoveredRect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const hoveredMiddleY = hoveredRect.top + hoveredRect.height / 2;
      const position: 'before' | 'after' = pointerOffset.y < hoveredMiddleY ? 'before' : 'after';
      const lineY =
        position === 'before' ? hoveredRect.top - containerRect.top : hoveredRect.bottom - containerRect.top;
      onHover({
        targetIndex: index,
        position,
        lineY: lineY + containerRef.current.scrollTop - containerRef.current.clientTop
      });
    },
    drop: (item: IDragItem) => {
      onDrop(item.index);
    }
  });

  drop(ref);

  return (
    <Row ref={ref} className={clsx(styles.row, isDragging && styles.ghost)}>
      <Cell>
        <button
          type="button"
          aria-label={`Переместить строку «${row.original.operation}»`}
          onKeyDown={event => {
            if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return;
            event.preventDefault();
            onMove(index, index + (event.key === 'ArrowUp' ? -1 : 1));
          }}
          ref={node => {
            drag(node);
          }}
          className={styles.handle}
        >
          <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
        </button>
      </Cell>
      {row.getVisibleCells().map((cell, colIdx) => (
        <Cell
          key={cell.id}
          align={colIdx === 0 ? 'left' : undefined}
          {...getCellProps(cell)}
          style={{ width: cell.column.getSize() }}
        />
      ))}
    </Row>
  );
};

interface IDragPreviewLayerProps {
  rows: TableRow<IOperationRow>[];
}

const DragPreviewLayer: FC<IDragPreviewLayerProps> = ({ rows }) => {
  const { isDragging, item, delta } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging() && monitor.getItemType() === DRAG_TYPE,
    item: monitor.getItem() as IDragItem | null,
    delta: monitor.getDifferenceFromInitialOffset()
  }));

  if (!isDragging || !item || !delta) return null;
  const row = rows.find(r => r.id === item.id);
  if (!row) return null;

  const left = item.initialLeft;
  const top = item.initialTop + delta.y;

  return createPortal(
    <div
      className={styles.dragPreview}
      style={{ width: item.width, height: item.height, transform: `translate(${left}px, ${top}px)` }}
    >
      <Table
        horizontalBorders
        verticalBorders
        className={styles.dragPreviewTable}
        style={{ tableLayout: 'fixed', width: item.width }}
      >
        <Tbody>
          <Row>
            <Cell style={{ width: item.cellWidths[0] }}>
              <span className={styles.handle}>
                <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
              </span>
            </Cell>
            {row.getVisibleCells().map((cell, colIdx) => (
              <Cell
                key={cell.id}
                align={colIdx === 0 ? 'left' : undefined}
                {...getCellProps(cell)}
                style={{ width: item.cellWidths[colIdx + 1] }}
              />
            ))}
          </Row>
        </Tbody>
      </Table>
    </div>,
    document.body
  );
};

const DraggableRowsIndicatorRDndExample: FC = () => {
  const [data, setData] = useState<IOperationRow[]>(initialData);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const indicatorRef = useRef<IIndicator | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = (next: IIndicator | null) => {
    indicatorRef.current = next;
    setIndicator(prev => {
      if (!next) return null;
      if (prev && prev.targetIndex === next.targetIndex && prev.position === next.position && prev.lineY === next.lineY)
        return prev;
      return next;
    });
  };

  const moveRow = (source: number, target: number) => {
    setData(previous => {
      if (source === target || target < 0 || target >= previous.length) return previous;
      const next = [...previous];
      const [moved] = next.splice(source, 1);
      next.splice(target, 0, moved);
      return next;
    });
  };

  const handleDrop = (sourceIndex: number) => {
    const ind = indicatorRef.current;
    if (!ind) {
      updateIndicator(null);
      return;
    }
    const { targetIndex, position } = ind;
    let insertIndex = position === 'before' ? targetIndex : targetIndex + 1;
    if (insertIndex > sourceIndex) insertIndex -= 1;
    moveRow(sourceIndex, insertIndex);
    updateIndicator(null);
  };

  const handleDragEnd = () => updateIndicator(null);

  const table = useReactTable({
    data,
    columns,
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <Scrollbar ref={containerRef} className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders>
          <Thead>
            {table.getHeaderGroups().map(hg => (
              <Row key={hg.id}>
                <Top title="" style={{ width: 40 }} />
                {hg.headers.map((header, idx) => (
                  <Top
                    key={header.id}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric && idx !== 0}
                    style={{ width: header.getSize() }}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row, idx) => (
              <DraggableRow
                key={row.id}
                row={row}
                index={idx}
                containerRef={containerRef}
                onHover={updateIndicator}
                onMove={moveRow}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
              />
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ top: indicator.lineY }} />}
      </Scrollbar>
      <DragPreviewLayer rows={table.getRowModel().rows} />
    </DndProvider>
  );
};

export default DraggableRowsIndicatorRDndExample;
