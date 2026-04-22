import React, { FC, useCallback, useRef, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import clsx from 'clsx';

import { Cell, Divider, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';

import { defectCodes, IDefectCode, initialJournal, IJournalRow } from './constants';

import styles from './CrossTable.module.scss';

const DRAG_TYPE = 'defect-code';

interface IDragItem {
  code: string;
}

const DraggableCodeCell: FC<{ code: IDefectCode }> = ({ code }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE,
    item: { code: code.code } as IDragItem,
    collect: m => ({ isDragging: m.isDragging() })
  });
  drag(ref);

  return (
    <td ref={ref} className={clsx(styles.codeCell, isDragging && styles.dragging)}>
      <Typography variant="Body1Table-Medium" color="var(--steel-90)">
        {code.code}
      </Typography>
    </td>
  );
};

interface IDropCellProps {
  row: IJournalRow;
  onAssign: (rowId: string, code: string) => void;
}

const DroppableJournalCell: FC<IDropCellProps> = ({ row, onAssign }) => {
  const ref = useRef<HTMLTableCellElement>(null);
  const [{ isOver }, drop] = useDrop({
    accept: DRAG_TYPE,
    drop: (item: IDragItem) => onAssign(row.id, item.code),
    collect: m => ({ isOver: m.isOver() })
  });
  drop(ref);
  const filled = row.defectCode !== null;
  return (
    <td
      ref={ref}
      className={clsx(styles.dropTarget, isOver && styles.dropTargetOver, filled && styles.dropTargetFilled)}
    >
      {filled ? (
        <Typography variant="Body1Table-Medium" color="var(--steel-90)">
          {row.defectCode}
        </Typography>
      ) : (
        <Typography variant="Caption-Medium" color="var(--steel-60)">
          перетащите код
        </Typography>
      )}
    </td>
  );
};

const CrossTableCellTransferExample: FC = () => {
  const [journal, setJournal] = useState<IJournalRow[]>(initialJournal);

  const onAssign = useCallback((rowId: string, code: string) => {
    setJournal(prev => prev.map(r => (r.id === rowId ? { ...r, defectCode: code } : r)));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <div className={styles.tableBlock}>
          <Typography className={styles.caption} variant="Subheading3-Medium">
            Справочник кодов дефектов
          </Typography>
          <div className={styles.tableContainer}>
            <Table horizontalBorders verticalBorders>
              <Thead>
                <Row>
                  <Top title="Код" style={{ width: 120 }} />
                  <Top title="Название" style={{ width: 220 }} />
                  <Top title="Категория" style={{ width: 140 }} />
                </Row>
              </Thead>
              <Tbody>
                {defectCodes.map(c => (
                  <Row key={c.id}>
                    <DraggableCodeCell code={c} />
                    <Cell text={c.name} align="left" />
                    <Cell text={c.category} />
                  </Row>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>

        <Divider type="vertical" />

        <div className={styles.tableBlock}>
          <Typography className={styles.caption} variant="Subheading3-Medium">
            Журнал ОТК
          </Typography>
          <div className={styles.tableContainer}>
            <Table horizontalBorders verticalBorders>
              <Thead>
                <Row>
                  <Top title="Партия" style={{ width: 140 }} />
                  <Top title="Продукт" style={{ width: 220 }} />
                  <Top title="Код дефекта" style={{ width: 160 }} />
                </Row>
              </Thead>
              <Tbody>
                {journal.map(r => (
                  <Row key={r.id}>
                    <Cell text={r.batch} align="left" />
                    <Cell text={r.product} />
                    <DroppableJournalCell row={r} onAssign={onAssign} />
                  </Row>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default CrossTableCellTransferExample;
