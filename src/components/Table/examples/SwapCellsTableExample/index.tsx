import React, { FC, useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import clsx from 'clsx';

import { Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';

import { initialData, IMachineRow } from './constants';

import styles from './SwapCells.module.scss';

const DRAG_TYPE = 'machine-order';

interface IDragItem {
  rowId: string;
}

interface ISwappableOrderCellProps {
  row: IMachineRow;
  onSwap: (fromRowId: string, toRowId: string) => void;
}

const SwappableOrderCell: FC<ISwappableOrderCellProps> = ({ row, onSwap }) => {
  const ref = useRef<HTMLTableCellElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: { rowId: row.id } as IDragItem,
    collect: monitor => ({ isDragging: monitor.isDragging() })
  });

  const [{ isOver }, drop] = useDrop({
    accept: DRAG_TYPE,
    canDrop: (item: IDragItem) => item.rowId !== row.id,
    drop: (item: IDragItem) => {
      if (item.rowId !== row.id) onSwap(item.rowId, row.id);
    },
    collect: monitor => ({ isOver: monitor.isOver() && monitor.canDrop() })
  });

  drag(drop(ref));

  return (
    <td ref={ref} className={clsx(styles.orderCell, isDragging && styles.dragging, isOver && styles.dropTarget)}>
      <Typography variant="Body1Table-Medium" color="var(--steel-90)">
        {row.order}
      </Typography>
      <Typography variant="Caption-Medium" color="var(--steel-60)">
        {row.priority}
      </Typography>
    </td>
  );
};

const SwapCellsTableExample: FC = () => {
  const [data, setData] = useState<IMachineRow[]>(initialData);

  const onSwap = useCallback((fromId: string, toId: string) => {
    setData(prev => {
      const a = prev.find(r => r.id === fromId);
      const b = prev.find(r => r.id === toId);
      if (!a || !b) return prev;
      return prev.map(r => {
        if (r.id === fromId) return { ...r, order: b.order, priority: b.priority };
        if (r.id === toId) return { ...r, order: a.order, priority: a.priority };
        return r;
      });
    });
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders>
          <Thead>
            <Row>
              <Top title="Станок" style={{ width: 180 }} />
              <Top title="Смена" style={{ width: 100 }} />
              <Top title="Оператор" style={{ width: 180 }} />
              <Top title="Заказ (столбец с интерактивными ячейками)" style={{ width: 200 }} />
            </Row>
          </Thead>
          <Tbody>
            {data.map(r => (
              <Row key={r.id}>
                <Cell text={r.machine} align="left" />
                <Cell text={r.shift} />
                <Cell text={r.assignee} />
                <SwappableOrderCell row={r} onSwap={onSwap} />
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </DndProvider>
  );
};

export default SwapCellsTableExample;
