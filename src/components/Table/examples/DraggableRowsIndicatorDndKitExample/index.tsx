import React, { FC, useRef, useState } from 'react';
import clsx from 'clsx';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  DndContext,
  DragOverlay,
  DragMoveEvent,
  DragEndEvent,
  DragStartEvent,
  PointerSensor,
  pointerWithin,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors
} from '@dnd-kit/core';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

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
  row: any;
  isActive: boolean;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, isActive }) => {
  const { setNodeRef: setDragRef, attributes, listeners } = useDraggable({ id: row.id });
  const { setNodeRef: setDropRef } = useDroppable({ id: row.id });

  const composedRef = (node: HTMLTableRowElement | null) => {
    setDragRef(node);
    setDropRef(node);
  };

  return (
    <Row ref={composedRef} className={clsx(styles.row, isActive && styles.ghost)}>
      <Cell>
        <span {...listeners} {...attributes} className={styles.handle}>
          <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
        </span>
      </Cell>
      {row.getVisibleCells().map((cell: any, colIdx: number) => {
        const value = cell.getValue();
        const isNumeric = cell.column.columnDef.meta?.isNumeric;
        const text = value instanceof Date ? value.toLocaleDateString() : String(value);
        return (
          <Cell
            key={cell.id}
            align={colIdx === 0 ? 'left' : undefined}
            {...(isNumeric ? { number: Number(value) } : { text })}
          />
        );
      })}
    </Row>
  );
};

const DragOverlayPreview: FC<{ rowData: IOperationRow; width: number; height: number }> = ({
  rowData,
  width,
  height
}) => (
  <div className={styles.dragPreview} style={{ width, height }}>
    <div className={styles.previewCell} style={{ width: HANDLE_COL_WIDTH, justifyContent: 'center' }}>
      <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
    </div>
    {columns.map((col, idx) => {
      const accessor = (col as { accessorKey: keyof IOperationRow }).accessorKey;
      const value = rowData[accessor];
      const isNumeric = col.meta?.isNumeric;
      return (
        <div
          key={String(accessor)}
          className={clsx(styles.previewCell, isNumeric && idx !== 0 && styles.right)}
          style={{ width: col.size }}
        >
          {String(value)}
        </div>
      );
    })}
  </div>
);

const DraggableRowsIndicatorDndKitExample: FC = () => {
  const [data, setData] = useState<IOperationRow[]>(initialData);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const sourceSize = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 4 } }));

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
    const node = event.active.rect.current.initial;
    if (node) sourceSize.current = { width: node.width, height: node.height };
  };

  const handleDragMove = (event: DragMoveEvent) => {
    const { active, over } = event;
    if (!over || !active.rect.current.translated || !containerRef.current) {
      setIndicator(null);
      return;
    }
    const activeRect = active.rect.current.translated;
    const overRect = over.rect;
    const activeCenterY = activeRect.top + activeRect.height / 2;
    const midY = overRect.top + overRect.height / 2;
    const position: 'before' | 'after' = activeCenterY < midY ? 'before' : 'after';
    const containerRect = containerRef.current.getBoundingClientRect();
    const lineY =
      position === 'before' ? overRect.top - containerRect.top : overRect.top + overRect.height - containerRect.top;
    setIndicator({ overId: String(over.id), position, lineY });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    setIndicator(null);
    if (!over || !indicator) return;
    const sourceIndex = data.findIndex(d => d.id === active.id);
    const targetIndex = data.findIndex(d => d.id === over.id);
    if (sourceIndex === -1 || targetIndex === -1) return;
    let insertIndex = indicator.position === 'before' ? targetIndex : targetIndex + 1;
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
    setIndicator(null);
  };

  const table = useReactTable({
    data,
    columns,
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel()
  });

  const activeRow = activeId ? data.find(d => d.id === activeId) : null;

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
        <Table horizontalBorders verticalBorders>
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
              <DraggableRow key={row.id} row={row} isActive={row.id === activeId} />
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ top: indicator.lineY }} />}
      </div>
      <DragOverlay dropAnimation={null}>
        {activeRow ? (
          <DragOverlayPreview rowData={activeRow} width={sourceSize.current.width} height={sourceSize.current.height} />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default DraggableRowsIndicatorDndKitExample;
