import React, { useMemo, useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { ECellState } from '@components/Table/Cell/types';
import { flexRender, getCoreRowModel, RowSelectionState, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const SelectableTableWithGroupingHeaderExample = () => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel()
  });

  const flexRenderCells = useMemo(() => ['select', 'status'], []);

  return (
    <div className={clsx(styles.tableContainer, styles.tableGrouping)}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                // Вычисляем разницу между текущей глубиной заголовка и глубиной самой колонки
                // header.depth - уровень вложенности текущего заголовка (0 - верхний уровень, 1, 2, ...)
                // header.column.depth - базовый уровень колонки
                const columnRelativeDepth = header.depth - header.column.depth;

                // Пропускаем рендер, если разница глубин больше 1
                // Это предотвращает дублирование заголовков в глубоко вложенных группах
                if (columnRelativeDepth > 1) {
                  return null;
                }

                // По умолчанию ячейка занимает 1 строку
                let rowSpan = 1;

                // Если это placeholder-заголовок (автоматически созданный TanStack для выравнивания структуры),
                // вычисляем сколько строк он должен занимать
                if (header.isPlaceholder) {
                  // Получаем все конечные заголовки в этой ветке
                  const leafs = header.getLeafHeaders();
                  // Вычисляем rowSpan как разницу между глубиной последнего leaf-заголовка
                  // и глубиной текущего заголовка
                  rowSpan = leafs[leafs.length - 1].depth - header.depth;
                }

                // Если для колонки задан явный rowSpan в meta,
                // используем его вместо вычисленного значения
                const metaRowSpan = header.column.columnDef.meta?.rowSpan;
                if (metaRowSpan) {
                  rowSpan = metaRowSpan;
                }

                const isSelectColumn = header.column.id === 'select';
                const isLastInGroup = header.column.columnDef.meta?.isLastInGroup;

                return (
                  <Top
                    key={header.id}
                    // colSpan определяет, сколько колонок объединить по горизонтали
                    colSpan={header.colSpan}
                    // rowSpan определяет, сколько строк объединить по вертикали
                    rowSpan={rowSpan}
                    title={header.column.columnDef.id !== 'select' ? String(header.column.columnDef.header) : ''}
                    right={header.column.columnDef.meta?.isNumeric}
                    lastInGroup={isLastInGroup}
                    className={clsx({ [styles.notSortable]: !isSelectColumn })}
                  >
                    {isSelectColumn ? flexRender(header.column.columnDef.header, header.getContext()) : null}
                  </Top>
                );
              })}
            </Row>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => {
            const isSelected = row.getIsSelected();
            return (
              <Row key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Cell
                    key={cell.id}
                    state={isSelected ? ECellState.SELECTED : ECellState.DEFAULT}
                    style={{
                      width: cell.column.getSize()
                    }}
                    {...(cell.column.id !== 'select' ? getCellProps(cell) : {})}
                  >
                    {flexRenderCells.includes(cell.column.id)
                      ? flexRender(cell.column.columnDef.cell, cell.getContext())
                      : null}
                  </Cell>
                ))}
              </Row>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};

export default SelectableTableWithGroupingHeaderExample;
