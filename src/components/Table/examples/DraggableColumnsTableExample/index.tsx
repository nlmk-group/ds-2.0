import React, { FC, MouseEvent, TouchEvent, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnOrderState,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  Header,
  useReactTable
} from '@tanstack/react-table';

import styles from './DraggableColumns.module.scss';

import { getCellProps } from '..';
import { initialColumns, initialData, IShiftRow } from './constants';

const DRAG_TYPE = 'shift-column';

interface IDragItem {
  columnId: string;
}

interface IDraggableHeaderProps {
  header: Header<IShiftRow, unknown>;
  columnOrder: string[];
  setColumnOrder: (next: string[]) => void;
  index: number;
}

const DraggableHeader: FC<IDraggableHeaderProps> = ({ header, columnOrder, setColumnOrder, index }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const resizingRef = useRef(false);
  const { column } = header;
  const columnId = column.id;

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: { columnId } as IDragItem,
    canDrag: () => !resizingRef.current,
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item: IDragItem) => {
      if (item.columnId === columnId) return;
      const from = columnOrder.indexOf(item.columnId);
      const to = columnOrder.indexOf(columnId);
      if (from === -1 || to === -1) return;
      const next = [...columnOrder];
      next.splice(from, 1);
      next.splice(to, 0, item.columnId);
      setColumnOrder(next);
    }
  });

  preview(drop(ref));

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
      ref={node => {
        ref.current = node;
        drag(node);
      }}
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

const DraggableColumnsTableExample: FC = () => {
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>(initialColumns.map(c => c.id as string));
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

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
      <div className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders style={{ tableLayout: 'fixed', width: table.getCenterTotalSize() }}>
          <Thead>
            {table.getHeaderGroups().map(hg => (
              <Row key={hg.id}>
                {hg.headers.map((header, idx) => (
                  <DraggableHeader
                    key={header.id}
                    header={header}
                    columnOrder={columnOrder}
                    setColumnOrder={setColumnOrder}
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
      </div>
    </DndProvider>
  );
};

export default DraggableColumnsTableExample;
