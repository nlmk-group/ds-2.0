import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { Row, Table, Tbody, Thead, Top, Typography } from '@components/index';

import { DAY_KEYS, DAY_LABELS, initialData, IPlanRow } from './constants';

import styles from './FillCell.module.scss';

interface ICellPos {
  rowIdx: number;
  colIdx: number;
}

interface IRange {
  startRow: number;
  endRow: number;
  startCol: number;
  endCol: number;
}

const inRange = (pos: ICellPos, r: IRange) =>
  pos.rowIdx >= r.startRow &&
  pos.rowIdx <= r.endRow &&
  pos.colIdx >= r.startCol &&
  pos.colIdx <= r.endCol;

const FillCellTableExample: FC = () => {
  const [data, setData] = useState<IPlanRow[]>(initialData);
  const [selected, setSelected] = useState<ICellPos | null>(null);
  const [dragRange, setDragRange] = useState<IRange | null>(null);
  const dragSource = useRef<ICellPos | null>(null);

  const handleFillMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (!selected) return;
      e.preventDefault();
      dragSource.current = selected;

      const onMove = (ev: MouseEvent) => {
        const target = document.elementFromPoint(ev.clientX, ev.clientY);
        const td = target?.closest('td[data-fill-row][data-fill-col]') as HTMLTableCellElement | null;
        if (!td || !dragSource.current) return;
        const r = parseInt(td.dataset.fillRow!, 10);
        const c = parseInt(td.dataset.fillCol!, 10);
        const src = dragSource.current;
        setDragRange({
          startRow: Math.min(src.rowIdx, r),
          endRow: Math.max(src.rowIdx, r),
          startCol: Math.min(src.colIdx, c),
          endCol: Math.max(src.colIdx, c)
        });
      };

      const onUp = () => {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        setDragRange(current => {
          const src = dragSource.current;
          dragSource.current = null;
          if (!current || !src) return null;
          if (current.startRow === current.endRow && current.startCol === current.endCol) return null;
          const srcValue = data[src.rowIdx][DAY_KEYS[src.colIdx]] as number;
          setData(prev => {
            const next = prev.map(r => ({ ...r }));
            for (let rIdx = current.startRow; rIdx <= current.endRow; rIdx++) {
              for (let cIdx = current.startCol; cIdx <= current.endCol; cIdx++) {
                (next[rIdx] as any)[DAY_KEYS[cIdx]] = srcValue;
              }
            }
            return next;
          });
          return null;
        });
      };

      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', onUp);
    },
    [selected, data]
  );

  useEffect(
    () => () => {
      dragSource.current = null;
    },
    []
  );

  return (
    <div className={styles.tableContainer}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          <Row>
            <Top title="Бригада" style={{ width: 160 }} />
            {DAY_KEYS.map(k => (
              <Top key={k as string} title={DAY_LABELS[k as string]} style={{ width: 80 }} />
            ))}
          </Row>
        </Thead>
        <Tbody>
          {data.map((r, rowIdx) => (
            <Row key={r.id}>
              <td style={{ padding: '12px 16px', borderBottom: '1px solid var(--steel-20)' }}>
                <Typography variant="Body1Table-Medium" color="var(--steel-90)">
                  {r.brigade}
                </Typography>
              </td>
              {DAY_KEYS.map((key, colIdx) => {
                const pos: ICellPos = { rowIdx, colIdx };
                const isSelected = selected?.rowIdx === rowIdx && selected?.colIdx === colIdx;
                const highlighted = dragRange ? inRange(pos, dragRange) : false;
                return (
                  <td
                    key={key as string}
                    data-fill-row={rowIdx}
                    data-fill-col={colIdx}
                    className={clsx(styles.cell, isSelected && styles.selected, highlighted && styles.inRange)}
                    style={{
                      padding: '12px 16px',
                      borderBottom: '1px solid var(--steel-20)',
                      textAlign: 'right'
                    }}
                    onClick={() => setSelected(pos)}
                  >
                    <Typography variant="Body1Table-Medium" color="var(--steel-90)">
                      {r[key] as number}
                    </Typography>
                    {isSelected && <span className={styles.fillHandle} onMouseDown={handleFillMouseDown} />}
                  </td>
                );
              })}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default FillCellTableExample;
