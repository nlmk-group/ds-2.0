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
}

const DraggableHeader: FC<IDraggableHeaderProps> = ({ header, isActive, index }) => {
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

const DragOverlayPreview: FC<{ label: string; width: number; height: number }> = ({ label, width, height }) => (
  <div className={styles.dragPreview} style={{ width, height }}>
    {label}
  </div>
);

const DraggableColumnsIndicatorDndKitExample: FC = () => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumns.map(c => c.id as string));
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const sourceSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
    const rect = event.active.rect.current.initial;
    if (rect) sourceSize.current = { width: rect.width, height: rect.height };
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    if (!over || !active.rect.current.translated || !containerRef.current) {
      setIndicator(null);
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
    setIndicator({ overColumnId: String(over.id), position, lineX });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active } = event;
    const currentIndicator = indicator;
    setActiveId(null);
    setIndicator(null);
    if (!currentIndicator) return;
    const sourceId = String(active.id);
    const { overColumnId, position } = currentIndicator;
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
    setIndicator(null);
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
