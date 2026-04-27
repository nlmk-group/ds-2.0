import React, { FC, useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';

import { IOperationRow } from './types';

import styles from './DraggableRows.module.scss';

import { getCellProps } from '..';
import { columns, initialData } from './constants';

const DRAG_TYPE = 'operation-row';

interface IDragItem {
  id: string;
  index: number;
}

interface IDraggableRowProps {
  row: any;
  index: number;
  moveRow: (from: number, to: number) => void;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, index, moveRow }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: { id: row.id, index } as IDragItem,
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (item: IDragItem, monitor) => {
      if (!ref.current || item.index === index) return;
      const rect = ref.current.getBoundingClientRect();
      const midY = (rect.bottom - rect.top) / 2;
      const offset = monitor.getClientOffset();
      if (!offset) return;
      const hoverY = offset.y - rect.top;
      const draggedIndex = item.index;
      const targetIndex = index;
      const hasNotCrossedMiddle =
        (draggedIndex < targetIndex && hoverY < midY) || (draggedIndex > targetIndex && hoverY > midY);
      if (hasNotCrossedMiddle) return;
      moveRow(draggedIndex, targetIndex);
      item.index = targetIndex;
    }
  });

  preview(drop(ref));

  return (
    <Row ref={ref} className={clsx(styles.row, isDragging && styles.dragging)}>
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
      {row.getVisibleCells().map((cell: any, colIdx: number) => (
        <Cell key={cell.id} align={colIdx === 0 ? 'left' : undefined} {...getCellProps(cell)} />
      ))}
    </Row>
  );
};

const DraggableRowsTableExample: FC = () => {
  const [data, setData] = useState<IOperationRow[]>(initialData);

  const moveRow = useCallback((from: number, to: number) => {
    setData(prev => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  const table = useReactTable({
    data,
    columns,
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.tableContainer}>
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
              <DraggableRow key={row.id} row={row} index={idx} moveRow={moveRow} />
            ))}
          </Tbody>
        </Table>
      </div>
    </DndProvider>
  );
};

export default DraggableRowsTableExample;
