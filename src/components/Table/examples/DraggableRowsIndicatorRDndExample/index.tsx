import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider, useDrag, useDragLayer, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';
import clsx from 'clsx';

import { Cell, Icon, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { columns, initialData } from './constants';
import { IOperationRow } from './types';

import styles from './DraggableRowsIndicator.module.scss';

const DRAG_TYPE = 'operation-row-indicator-rdnd';
const HANDLE_COL_WIDTH = 40;

interface IDragItem {
  id: string;
  index: number;
  rowData: IOperationRow;
  width: number;
  height: number;
}

interface IIndicator {
  targetIndex: number;
  position: 'before' | 'after';
  lineY: number;
}

interface IDraggableRowProps {
  row: any;
  index: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onHover: (indicator: IIndicator) => void;
  onDrop: (sourceIndex: number) => void;
}

const DraggableRow: FC<IDraggableRowProps> = ({ row, index, containerRef, onHover, onDrop }) => {
  const ref = useRef<HTMLTableRowElement>(null);

  const [{ isDragging }, drag, preview] = useDrag({
    type: DRAG_TYPE,
    item: (): IDragItem => {
      const rect = ref.current!.getBoundingClientRect();
      return {
        id: row.id,
        index,
        rowData: row.original,
        width: rect.width,
        height: rect.height
      };
    },
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const [, drop] = useDrop({
    accept: DRAG_TYPE,
    hover: (_item: IDragItem, monitor) => {
      if (!ref.current || !containerRef.current) return;
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

const DragPreviewLayer: FC = () => {
  const { isDragging, item, currentOffset, initialSourceOffset, initialClientOffset } = useDragLayer(monitor => ({
    isDragging: monitor.isDragging() && monitor.getItemType() === DRAG_TYPE,
    item: monitor.getItem() as IDragItem | null,
    currentOffset: monitor.getClientOffset(),
    initialSourceOffset: monitor.getInitialSourceClientOffset(),
    initialClientOffset: monitor.getInitialClientOffset()
  }));

  if (!isDragging || !item || !currentOffset || !initialClientOffset || !initialSourceOffset) return null;

  const offsetX = initialClientOffset.x - initialSourceOffset.x;
  const offsetY = initialClientOffset.y - initialSourceOffset.y;
  const left = currentOffset.x - offsetX;
  const top = currentOffset.y - offsetY;

  return (
    <div className={styles.dragPreview} style={{ width: item.width, height: item.height, transform: `translate(${left}px, ${top}px)` }}>
      <div className={styles.previewCell} style={{ width: HANDLE_COL_WIDTH, justifyContent: 'center' }}>
        <Icon name="IconDragIndicatorDotsOutlined24" containerSize={24} />
      </div>
      {columns.map((col, idx) => {
        const accessor = (col as { accessorKey: keyof IOperationRow }).accessorKey;
        const value = item.rowData[accessor];
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
};

const DraggableRowsIndicatorRDndExample: FC = () => {
  const [data, setData] = useState<IOperationRow[]>(initialData);
  const [indicator, setIndicator] = useState<IIndicator | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleHover = useCallback((next: IIndicator) => {
    setIndicator(prev => {
      if (prev && prev.targetIndex === next.targetIndex && prev.position === next.position) return prev;
      return next;
    });
  }, []);

  const handleDrop = useCallback(
    (sourceIndex: number) => {
      setIndicator(current => {
        if (!current) return null;
        const { targetIndex, position } = current;
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
        return null;
      });
    },
    []
  );

  const table = useReactTable({
    data,
    columns,
    getRowId: row => row.id,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <div ref={containerRef} className={styles.tableContainer} onDragLeave={() => setIndicator(null)}>
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
            {table.getRowModel().rows.map((row, idx) => (
              <DraggableRow
                key={row.id}
                row={row}
                index={idx}
                containerRef={containerRef}
                onHover={handleHover}
                onDrop={handleDrop}
              />
            ))}
          </Tbody>
        </Table>
        {indicator && <div className={styles.insertLine} style={{ top: indicator.lineY }} />}
      </div>
      <DragPreviewLayer />
    </DndProvider>
  );
};

export default DraggableRowsIndicatorRDndExample;
