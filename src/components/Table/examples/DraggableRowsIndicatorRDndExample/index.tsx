import React, { FC, useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';
import clsx from 'clsx';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, Row as TableRow, useReactTable } from '@tanstack/react-table';

import { getCellProps } from '..';
import { columns, initialData } from './constants';
import { IOperationRow } from './types';

import styles from './DraggableRowsIndicator.module.scss';

const DRAG_TYPE = 'operation-row-indicator-rdnd';

interface IDragItem {
  id: string;
  index: number;
  width: number;
  height: number;
  initialLeft: number;
  initialTop: number;
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
  onHover: (indicator: IIndicator) => void;
  onDrop: (sourceIndex: number) => void;
  onDragEnd: () => void;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, index, containerRef, onHover, onDrop, onDragEnd }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: (): IDragItem => {
      const rect = ref.current!.getBoundingClientRect();
      return {
        id: row.id,
        index,
        width: rect.width,
        height: rect.height,
        initialLeft: rect.left,
        initialTop: rect.top
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
      if (item.index === index) return;
      const rowRect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const offset = monitor.getClientOffset();
      if (!offset) return;
      const midY = rowRect.top + rowRect.height / 2;
      const position: 'before' | 'after' = offset.y < midY ? 'before' : 'after';
      const lineY = position === 'before' ? rowRect.top - containerRect.top : rowRect.bottom - containerRect.top;
      onHover({ targetIndex: index, position, lineY });
    },
    drop: (item: IDragItem) => {
      onDrop(item.index);
    }
  });

  drop(ref);

  return (
    <Row ref={ref} className={clsx(styles.row, isDragging && styles.ghost)}>
      <Cell>
        <span
          ref={node => {
            drag(node);
          }}
          className={styles.handle}
        >
          <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
        </span>
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

  useEffect(() => {
    if (!isDragging) return;
    const prevent = (e: DragEvent) => e.preventDefault();
    window.addEventListener('dragover', prevent);
    return () => window.removeEventListener('dragover', prevent);
  }, [isDragging]);

  if (!isDragging || !item || !delta) return null;
  const row = rows.find(r => r.id === item.id);
  if (!row) return null;

  const left = item.initialLeft + delta.x;
  const top = item.initialTop + delta.y;

  return (
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
            <Cell style={{ width: 40 }}>
              <span className={styles.handle}>
                <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
              </span>
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
        </Tbody>
      </Table>
    </div>
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
      if (prev && prev.targetIndex === next.targetIndex && prev.position === next.position) return prev;
      return next;
    });
  };

  const handleHover = (next: IIndicator) => updateIndicator(next);

  const handleDrop = (sourceIndex: number) => {
    const ind = indicatorRef.current;
    if (ind) {
      const { targetIndex, position } = ind;
      let insertIndex = position === 'before' ? targetIndex : targetIndex + 1;
      if (insertIndex > sourceIndex) insertIndex -= 1;
      if (insertIndex !== sourceIndex) {
        setData(prev => {
          const next = [...prev];
          const [moved] = next.splice(sourceIndex, 1);
          next.splice(insertIndex, 0, moved);
          return next;
        });
      }
    }
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
      <div ref={containerRef} className={styles.tableContainer}>
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
                onHover={handleHover}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
              />
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ top: indicator.lineY }} />}
      </div>
      <DragPreviewLayer rows={table.getRowModel().rows} />
    </DndProvider>
  );
};

export default DraggableRowsIndicatorRDndExample;
