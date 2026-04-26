import React, { FC, MouseEvent, TouchEvent, useRef, useState } from 'react';
import clsx from 'clsx';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  pointerWithin,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors
} from '@dnd-kit/core';
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

interface IIndicator {
  overColumnId: string;
  position: 'before' | 'after';
  lineX: number;
}

interface IDraggableHeaderProps {
  header: Header<IShiftRow, unknown>;
  isActive: boolean;
  index: number;
  headerRefs: React.MutableRefObject<Map<string, HTMLTableCellElement>>;
}

const DraggableHeader: FC<IDraggableHeaderProps> = ({ header, isActive, index, headerRefs }) => {
  const resizingRef = useRef(false);
  const { column } = header;
  const columnId = column.id;

  const { setNodeRef: setDragRef, attributes, listeners } = useDraggable({
    id: columnId,
    disabled: resizingRef.current
  });
  const { setNodeRef: setDropRef } = useDroppable({ id: columnId });

  const composedRef = (node: HTMLTableCellElement | null) => {
    setDragRef(node);
    setDropRef(node);
    if (node) {
      headerRefs.current.set(columnId, node);
    } else {
      headerRefs.current.delete(columnId);
    }
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
      className={clsx(styles.header, isActive && styles.ghost)}
      style={{ width: header.getSize() }}
      {...attributes}
      {...listeners}
    />
  );
};

interface IDragOverlayPreviewProps {
  label: string;
  width: number;
  height: number;
}

const DragOverlayPreview: FC<IDragOverlayPreviewProps> = ({ label, width, height }) => (
  <div className={styles.dragPreview} style={{ width, height }}>
    <Table className={styles.dragPreviewTable}>
      <Thead>
        <Row>
          <Top title={label} style={{ width }} />
        </Row>
      </Thead>
    </Table>
  </div>
);

const DraggableColumnsIndicatorDndKitExample: FC = () => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumns.map(c => c.id as string));
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const indicatorRef = useRef<IIndicator | null>(null);
  const sourceSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRefs = useRef<Map<string, HTMLTableCellElement>>(new Map());

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const handleDragStart = (event: DragStartEvent) => {
    const id = String(event.active.id);
    setActiveId(id);
    const node = headerRefs.current.get(id);
    if (node) {
      const rect = node.getBoundingClientRect();
      sourceSize.current = { width: rect.width, height: rect.height };
    }
  };

  const updateIndicator = (next: IIndicator | null) => {
    indicatorRef.current = next;
    setIndicator(next);
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    if (!over || over.id === active.id || !active.rect.current.translated || !containerRef.current) {
      updateIndicator(null);
      return;
    }
    const activeRect = active.rect.current.translated;
    const overRect = over.rect;
    const activeCenterX = activeRect.left + activeRect.width / 2;
    const midX = overRect.left + overRect.width / 2;
    const position: 'before' | 'after' = activeCenterX < midX ? 'before' : 'after';
    const containerRect = containerRef.current.getBoundingClientRect();
    const lineX =
      position === 'before' ? overRect.left - containerRect.left : overRect.left + overRect.width - containerRect.left;
    updateIndicator({ overColumnId: String(over.id), position, lineX });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active } = event;
    const ind = indicatorRef.current;
    setActiveId(null);
    updateIndicator(null);
    if (!ind) return;
    const sourceId = String(active.id);
    const { overColumnId, position } = ind;
    if (sourceId === overColumnId) return;
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
  };

  const handleDragCancel = () => {
    setActiveId(null);
    updateIndicator(null);
  };

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

  const activeHeader = activeId ? initialColumns.find(c => c.id === activeId) : null;
  const activeLabel = activeHeader && typeof activeHeader.header === 'string' ? activeHeader.header : activeId ?? '';

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragMove={handleDragMove}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div ref={containerRef} className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders style={{ tableLayout: 'fixed', width: table.getCenterTotalSize() }}>
          <Thead>
            {table.getHeaderGroups().map(hg => (
              <Row key={hg.id}>
                {hg.headers.map((header, idx) => (
                  <DraggableHeader
                    key={header.id}
                    header={header}
                    isActive={header.column.id === activeId}
                    index={idx}
                    headerRefs={headerRefs}
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
      <DragOverlay dropAnimation={null}>
        {activeHeader ? (
          <DragOverlayPreview label={activeLabel} width={sourceSize.current.width} height={sourceSize.current.height} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableColumnsIndicatorDndKitExample;
