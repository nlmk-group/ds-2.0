import React, { FC, MouseEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnOrderState,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  Header,
  useReactTable
} from '@tanstack/react-table';

import { getCellProps } from '..';
import { initialColumns, initialData, IShiftRow } from './constants';

import styles from './DraggableColumnsIndicator.module.scss';

const DRAG_TYPE = 'shift-column-indicator-rdnd';

interface IDragItem {
  columnId: string;
  headerLabel: string;
  width: number;
  height: number;
  initialLeft: number;
  initialTop: number;
}

interface IIndicator {
  overColumnId: string;
  position: 'before' | 'after';
  lineX: number;
}

interface IDraggableHeaderProps {
  header: Header<IShiftRow, unknown>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  index: number;
  onHover: (indicator: IIndicator) => void;
  onDrop: (sourceId: string) => void;
  onDragEnd: () => void;
}

const DraggableHeader: FC<IDraggableHeaderProps> = ({
  header,
  containerRef,
  index,
  onHover,
  onDrop,
  onDragEnd
}) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const resizingRef = useRef(false);
  const { column } = header;
  const columnId = column.id;
  const headerText = typeof column.columnDef.header === 'string' ? column.columnDef.header : columnId;

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: (): IDragItem => {
      const { width, height, left: initialLeft, top: initialTop } = ref.current!.getBoundingClientRect();
      return { columnId, headerLabel: headerText, width, height, initialLeft, initialTop };
    },
    canDrag: () => !resizingRef.current,
    end: () => onDragEnd(),
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item: IDragItem, monitor) => {
      if (!ref.current || !containerRef.current || item.columnId === columnId) return;
      const pointerOffset = monitor.getClientOffset();
      if (!pointerOffset) return;
      const hoveredRect = ref.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const hoveredMiddleX = hoveredRect.left + hoveredRect.width / 2;
      const position: 'before' | 'after' = pointerOffset.x < hoveredMiddleX ? 'before' : 'after';
      const lineX =
        position === 'before' ? hoveredRect.left - containerRect.left : hoveredRect.right - containerRect.left;
      onHover({ overColumnId: columnId, position, lineX });
    },
    drop: (item: IDragItem) => onDrop(item.columnId)
  });

  const composedRef = (node: HTMLTableCellElement | null) => {
    ref.current = node;
    drag(node);
    drop(node);
  };

  const resizeMouseDown = (e: MouseEvent) => {
    resizingRef.current = true;
    header.getResizeHandler()(e);
    const onUp = () => {
      resizingRef.current = false;
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mouseup', onUp);
  };

  const resizeTouchStart = (e: TouchEvent) => {
    resizingRef.current = true;
    header.getResizeHandler()(e);
    const onEnd = () => {
      resizingRef.current = false;
      document.removeEventListener('touchend', onEnd);
    };
    document.addEventListener('touchend', onEnd);
  };

  return (
    <Top
      ref={composedRef}
      title={flexRender(column.columnDef.header, header.getContext())}
      right={column.columnDef.meta?.isNumeric && index !== 0}
      drag
      onMouseDown={resizeMouseDown}
      onTouchStart={resizeTouchStart}
      style={{
        width: header.getSize(),
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1
      }}
    />
  );
};

const DragPreviewLayer: FC = () => {
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

  const left = item.initialLeft + delta.x;
  const top = item.initialTop + delta.y;

  return (
    <div
      className={styles.dragPreview}
      style={{ width: item.width, height: item.height, transform: `translate(${left}px, ${top}px)` }}
    >
      <Table className={styles.dragPreviewTable}>
        <Thead>
          <Row>
            <Top title={item.headerLabel} style={{ width: item.width }} />
          </Row>
        </Thead>
      </Table>
    </div>
  );
};

const DraggableColumnsIndicatorRDndExample: FC = () => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumns.map(c => c.id as string));
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const indicatorRef = useRef<IIndicator | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateIndicator = (next: IIndicator | null) => {
    indicatorRef.current = next;
    setIndicator(prev => {
      if (!next) return null;
      if (prev && prev.overColumnId === next.overColumnId && prev.position === next.position) return prev;
      return next;
    });
  };

  const handleHover = (next: IIndicator) => updateIndicator(next);

  const handleDrop = (sourceId: string) => {
    const ind = indicatorRef.current;
    if (!ind || sourceId === ind.overColumnId) {
      updateIndicator(null);
      return;
    }
    const { overColumnId, position } = ind;
    setColumnOrder(order => {
      const fromIdx = order.indexOf(sourceId);
      const toIdx = order.indexOf(overColumnId);
      if (fromIdx === -1 || toIdx === -1) return order;
      let insertIdx = position === 'before' ? toIdx : toIdx + 1;
      if (insertIdx > fromIdx) insertIdx -= 1;
      if (insertIdx === fromIdx) return order;
      const next = [...order];
      const [moved] = next.splice(fromIdx, 1);
      next.splice(insertIdx, 0, moved);
      return next;
    });
    updateIndicator(null);
  };

  const handleDragEnd = () => updateIndicator(null);

  const table = useReactTable({
    data: initialData,
    columns: initialColumns,
    state: { columnOrder },
    onColumnOrderChange: setColumnOrder,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode,
    defaultColumn: { minSize: 80, maxSize: 500, size: 140 }
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div ref={containerRef} className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders style={{ tableLayout: 'fixed', width: table.getCenterTotalSize() }}>
          <Thead>
            {table.getHeaderGroups().map(hg => (
              <Row key={hg.id}>
                {hg.headers.map((header, idx) => (
                  <DraggableHeader
                    key={header.id}
                    header={header}
                    containerRef={containerRef}
                    index={idx}
                    onHover={handleHover}
                    onDrop={handleDrop}
                    onDragEnd={handleDragEnd}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell, idx) => (
                  <Cell
                    key={cell.id}
                    align={idx === 0 ? 'left' : undefined}
                    {...getCellProps(cell)}
                    style={{ width: cell.column.getSize() }}
                  />
                ))}
              </Row>
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ left: indicator.lineX }} />}
      </div>
      <DragPreviewLayer />
    </DndProvider>
  );
};

export default DraggableColumnsIndicatorRDndExample;
