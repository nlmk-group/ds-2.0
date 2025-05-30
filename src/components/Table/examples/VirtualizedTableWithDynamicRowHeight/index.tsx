import React, { useMemo, useRef } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import { flexRender, getCoreRowModel, Row as TableRowType, useReactTable } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';

import { IVirtualizedData } from './types';

import styles from '../Example.module.scss';

import { ECellStatus } from '../../Cell/types';
import { getCellProps } from '../utils';
import { columns, data } from './constants';

const VirtualizedTableWithDynamicRowHeightExample = () => {
  const table = useReactTable({
    data: useMemo(() => data, []),
    columns: useMemo(() => columns, []),
    getCoreRowModel: getCoreRowModel()
  });

  const rows = table.getRowModel().rows;
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    /**
     * count:
     *  Общее количество элементов, которые мы хотим виртуализировать.
     */
    count: rows.length,

    /**
     * getScrollElement:
     *  Функция, возвращающая элемент, в котором будет происходить прокрутка.
     *  В нашем случае это div со стилями overflow: auto;.
     *  TanStack Virtual будет наблюдать за его прокруткой, чтобы определить,
     *  какие элементы (строки) должны быть отрисованы на экране.
     */
    getScrollElement: () => tableContainerRef.current,

    /**
     * estimateSize:
     *  Функция, возвращающая "примерный" размер (в пикселях) для каждого элемента.
     *  Т.к. мы виртуализируем строки, речь о примерной высоте строки.
     *  Это значение используется ДО того, как элемент будет замерен
     *  (или если вообще не требуется детальное измерение).
     *  Может конфликтовать с заданной высотой в Cell и если они отличаются,
     *  то будет использовано значение estimateSize и контент будет обрезан.
     */
    estimateSize: () => 56,

    /**
     * overscan:
     *  Количество дополнительных элементов, которые рендерятся "над" и "под"
     *  видимой областью. Нужно, чтобы пользователь не видел пустоту при
     *  быстром скролле. Значение overscan = 5 означает, что помимо видимых
     *  строк рендерится ещё по 5 строк сверху и снизу от зоны видимости.
     */
    overscan: 5,

    /**
     * measureElement:
     *  Функция для "реального" измерения DOM-элементов после рендера.
     *  Если нужно динамически учитывать фактическую высоту строки,
     *  мы передаём эту функцию, которая возвращает из getBoundingClientRect()
     *  реальную высоту (height). Если её не указывать, виртуализатор
     *  будет полагаться лишь на estimateSize.
     *  При условии, что мы вызывем rowVirtualizer.measureElement(...) при ref:
     */
    measureElement: el => el?.getBoundingClientRect().height ?? 0
  });

  return (
    <div>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        (Виртуализированная таблица: {data.length} rows)
      </Typography>

      <div className={styles.tableContainer} ref={tableContainerRef}>
        <Table style={{ display: 'grid' }} horizontalBorders verticalBorders>
          <Thead
            style={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <Row
                key={headerGroup.id}
                style={{
                  display: 'flex',
                  width: '100%'
                }}
              >
                {headerGroup.headers.map((header, index) => {
                  const size = header.getSize();
                  return (
                    <Top
                      key={header.id}
                      style={{
                        display: 'flex',
                        width: size
                      }}
                      title={flexRender(header.column.columnDef.header, header.getContext())}
                      right={header.column.columnDef.meta?.isNumeric && index !== 0}
                      className={styles.notSortable}
                    />
                  );
                })}
              </Row>
            ))}
          </Thead>

          <Tbody
            style={{
              display: 'grid',
              position: 'relative',
              height: rowVirtualizer.getTotalSize()
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index] as TableRowType<IVirtualizedData>;

              return (
                <Row
                  key={row.id}
                  ref={node => {
                    if (node) {
                      rowVirtualizer.measureElement(node);
                    }
                  }}
                  style={{
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`,
                    display: 'flex',
                    width: '100%'
                  }}
                >
                  {row.getVisibleCells().map((cell, index) => {
                    const size = cell.column.getSize();

                    return (
                      <Cell
                        key={cell.id}
                        color={ECellStatus.WARNING}
                        style={{
                          width: size
                        }}
                        align={index === 0 ? 'left' : undefined}
                        {...getCellProps(cell)}
                      />
                    );
                  })}
                </Row>
              );
            })}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default VirtualizedTableWithDynamicRowHeightExample;
