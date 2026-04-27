import React, { FC, useRef, useState } from 'react';
import clsx from 'clsx';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
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
import { flexRender, getCoreRowModel, Row as TableRow, useReactTable } from '@tanstack/react-table';

import { getCellProps } from '..';
import { columns, initialData } from './constants';
import { IOperationRow } from './types';

import styles from './DraggableRowsIndicator.module.scss';

const HANDLE_COL_WIDTH = 40;

interface IIndicator {
  overId: string;
  position: 'before' | 'after';
  lineY: number;
}

interface IDraggableRowProps {
  row: TableRow<IOperationRow>;
  isActive: boolean;
  rowRefs: React.MutableRefObject<Map<string, HTMLTableRowElement>>;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, isActive, rowRefs }) => {
  const { setNodeRef: setDragRef, attributes, listeners } = useDraggable({ id: row.id });
  const { setNodeRef: setDropRef } = useDroppable({ id: row.id });

  const composedRef = (node: HTMLTableRowElement | null) => {
    setDragRef(node);
    setDropRef(node);
    if (!node) {
      rowRefs.current.delete(row.id);
      return;
    }
    rowRefs.current.set(row.id, node);
  };

  return (
    <Row ref={composedRef} className={clsx(styles.row, isActive && styles.ghost)}>
      <Cell>
        <span {...listeners} {...attributes} className={styles.handle}>
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

interface IDragOverlayPreviewProps {
  row: TableRow<IOperationRow>;
  width: number;
  height: number;
}

const DragOverlayPreview: FC<IDragOverlayPreviewProps> = ({ row, width, height }) => (
  <div className={styles.dragPreview} style={{ width, height }}>
    <Table horizontalBorders verticalBorders className={styles.dragPreviewTable}>
      <Tbody>
        <Row>
          <Cell>
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

const DraggableRowsIndicatorDndKitExample: FC = () => {
  const [data, setData] = useState<IOperationRow[]>(initialData);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const indicatorRef = useRef<IIndicator | null>(null);
  const sourceSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Map<string, HTMLTableRowElement>>(new Map());

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const handleDragStart = (event: DragStartEvent) => {
    const id = String(event.active.id);
    setActiveId(id);
    const node = rowRefs.current.get(id);
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
    const hoveredRect = over.rect;
    const containerRect = containerRef.current.getBoundingClientRect();
    const activeCenterY = activeRect.top + activeRect.height / 2;
    const hoveredMiddleY = hoveredRect.top + hoveredRect.height / 2;
    const position: 'before' | 'after' = activeCenterY < hoveredMiddleY ? 'before' : 'after';
    const lineY =
      position === 'before'
        ? hoveredRect.top - containerRect.top
        : hoveredRect.top + hoveredRect.height - containerRect.top;
    updateIndicator({ overId: String(over.id), position, lineY });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active } = event;
    const ind = indicatorRef.current;
    setActiveId(null);
    updateIndicator(null);
    if (!ind) return;
    const sourceIndex = data.findIndex(d => d.id === active.id);
    const targetIndex = data.findIndex(d => d.id === ind.overId);
    if (sourceIndex === -1 || targetIndex === -1) return;
    let insertIndex = ind.position === 'before' ? targetIndex : targetIndex + 1;
    if (insertIndex > sourceIndex) insertIndex -= 1;
    if (insertIndex === sourceIndex) return;
    setData(prev => {
      const next = [...prev];
      const [moved] = next.splice(sourceIndex, 1);
      next.splice(insertIndex, 0, moved);
      return next;
    });
  };

  const handleDragCancel = () => {
    setActiveId(null);
    updateIndicator(null);
  };

  const table = useReactTable({
    data,
    columns,
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel()
  });

  const activeRow = activeId ? table.getRowModel().rows.find(r => r.id === activeId) : null;

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
        <Table horizontalBorders verticalBorders style={{ width: '100%' }}>
          <Thead>
            {table.getHeaderGroups().map(hg => (
              <Row key={hg.id}>
                <Top title="" style={{ width: HANDLE_COL_WIDTH }} />
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
            {table.getRowModel().rows.map(row => (
              <DraggableRow key={row.id} row={row} isActive={row.id === activeId} rowRefs={rowRefs} />
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ top: indicator.lineY }} />}
      </div>
      <DragOverlay dropAnimation={null}>
        {activeRow ? (
          <DragOverlayPreview row={activeRow} width={sourceSize.current.width} height={sourceSize.current.height} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableRowsIndicatorDndKitExample;
