import React from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import clsx from 'clsx';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const GroupingTableExample = () => {
  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className={clsx(styles.tableContainer, styles.tableGrouping)}>
      <Table verticalBorders horizontalBorders>
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

                return (
                  <Top
                    key={header.id}
                    // colSpan определяет, сколько колонок объединить по горизонтали
                    colSpan={header.colSpan}
                    // rowSpan определяет, сколько строк объединить по вертикали
                    rowSpan={rowSpan}
                    title={flexRender(header.column.columnDef.header, header.getContext()) as string}
                    className={styles.notSortable}
                    right={header.column.columnDef.meta?.isNumeric}
                  />
                );
              })}
            </Row>
          ))}
        </Thead>

        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Row key={row.id}>
              {row.getVisibleCells().map(cell => (
                <Cell key={cell.id} color={row.original.status} {...getCellProps(cell)} />
              ))}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default GroupingTableExample;
