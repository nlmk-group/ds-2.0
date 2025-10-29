import React, { useMemo, useState } from 'react';

import { Box, Input, OptionItem, SimpleSelect, Typography } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from './RowHighlightExamples.module.scss';

import { defaultData } from '../constants';
import { EditableRow, initialData, statusOptions } from '../EditableCellsTableExample/constants';
import { getCellProps } from '../utils';

const simpleData = defaultData.slice(0, 5).map(item => ({
  ...item,
  category: item.id % 2 === 0 ? 'Цветные металлы' : 'Черные металлы',
  density: (Math.random() * 10 + 1).toFixed(2),
  meltingPoint: Math.floor(Math.random() * 2000 + 500),
  country: ['Россия', 'Китай', 'США', 'Германия', 'Япония'][Math.floor(Math.random() * 5)]
}));

const simpleColumns = [
  { header: 'ID', accessorKey: 'id', meta: { isNumeric: true } },
  { header: 'Название', accessorKey: 'name' },
  { header: 'Категория', accessorKey: 'category' },
  { header: 'Плотность (г/см³)', accessorKey: 'density', meta: { isNumeric: true } },
  { header: 'Т. плавления (°C)', accessorKey: 'meltingPoint', meta: { isNumeric: true } },
  { header: 'Страна производства', accessorKey: 'country' }
];

/**
 * 1. Ховер на всей строке при наведении на ячейку
 * 2. Чередование цвета строк без ховера
 * 3. Ховер на всей строке И столбце одновременно
 * 4. Таблица с редактируемыми ячейками и усиленным ховером на инпутах
 */
const RowHighlightExamples = () => {
  const table1 = useReactTable({
    data: simpleData,
    columns: simpleColumns,
    getCoreRowModel: getCoreRowModel()
  });

  const table2 = useReactTable({
    data: simpleData,
    columns: simpleColumns,
    getCoreRowModel: getCoreRowModel()
  });

  const [hoveredCell, setHoveredCell] = useState<{ rowId: string; columnId: string } | null>(null);

  const table3 = useReactTable({
    data: simpleData,
    columns: simpleColumns,
    getCoreRowModel: getCoreRowModel()
  });

  const [editableData, setEditableData] = useState<EditableRow[]>(initialData.slice(0, 3));

  const handleCellChange = (rowId: string, columnId: string, value: any) => {
    setEditableData(prevData =>
      prevData.map(row =>
        row.id === rowId
          ? {
              ...row,
              [columnId]: value
            }
          : row
      )
    );
  };

  const editableColumns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id',
        cell: (info: any) => info.getValue(),
        size: 60,
        meta: { title: 'ID' }
      },
      {
        header: 'Товар',
        accessorKey: 'product',
        cell: (info: any) => {
          const rowId = info.row.original.id;
          const value = info.getValue();

          return (
            <Input
              value={value}
              onChange={(e: any) => handleCellChange(rowId, 'product', e.target.value)}
              size="s"
              style={{ width: '100%' }}
            />
          );
        },
        size: 200,
        meta: { title: 'Товар', isEditable: true }
      },
      {
        header: 'Кол-во',
        accessorKey: 'quantity',
        cell: (info: any) => {
          const rowId = info.row.original.id;
          const value = info.getValue();

          return (
            <Input
              type="number"
              value={value.toString()}
              onChange={(e: any) => {
                handleCellChange(rowId, 'quantity', parseInt(e.target.value) || 0);
              }}
              size="s"
              style={{ width: '100%' }}
            />
          );
        },
        size: 100,
        meta: { title: 'Количество', isNumeric: true, isEditable: true }
      },
      {
        header: 'Статус',
        accessorKey: 'status',
        cell: (info: any) => {
          const rowId = info.row.original.id;
          const value = info.getValue();

          return (
            <SimpleSelect
              value={value}
              onChange={(newValue: string | number) => handleCellChange(rowId, 'status', newValue)}
              size="s"
              style={{ width: '100%' }}
            >
              {statusOptions.map(option => (
                <OptionItem key={option.value} value={option.value} label={option.label}>
                  {option.label}
                </OptionItem>
              ))}
            </SimpleSelect>
          );
        },
        size: 140,
        meta: { title: 'Статус', isEditable: true }
      }
    ],
    []
  );

  const table4 = useReactTable({
    data: editableData,
    columns: editableColumns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Box gap={16} style={{ padding: '20px' }}>
      <Box gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          1. Ховер на всей строке
        </Typography>
        <Typography variant="Body1-Medium" style={{ color: 'var(--steel-70)' }}>
          При наведении на любую ячейку подсвечивается вся строка
        </Typography>
      </Box>
      <div className={styles.tableWrapper}>
        <Table horizontalBorders verticalBorders className={styles.rowHoverTable}>
          <Thead>
            {table1.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Top
                    key={header.id}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table1.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <Cell key={cell.id} align={index === 0 ? 'left' : undefined} disableHover {...getCellProps(cell)} />
                ))}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>

      <Box gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          2. Чередование строк без ховера
        </Typography>
        <Typography variant="Body1-Medium" style={{ color: 'var(--steel-70)' }}>
          Четные и нечетные строки имеют разный цвет фона, ховер отключен
        </Typography>
      </Box>
      <div className={styles.tableWrapper}>
        <Table horizontalBorders verticalBorders className={styles.stripedTable}>
          <Thead>
            {table2.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Top
                    key={header.id}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table2.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell, index) => (
                  <Cell key={cell.id} align={index === 0 ? 'left' : undefined} disableHover {...getCellProps(cell)} />
                ))}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>

      <Box gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          3. Ховер на строке и столбце одновременно
        </Typography>
        <Typography variant="Body1-Medium" style={{ color: 'var(--steel-70)' }}>
          При наведении на ячейку подсвечивается вся строка и весь столбец
        </Typography>
      </Box>
      <div className={styles.tableWrapper}>
        <Table horizontalBorders verticalBorders className={styles.crosshairTable}>
          <Thead>
            {table3.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Top
                    key={header.id}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
                    right={header.column.columnDef.meta?.isNumeric}
                    className={hoveredCell?.columnId === header.id ? styles.hoveredColumn : ''}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table3.getRowModel().rows.map(row => (
              <Row key={row.id} className={hoveredCell?.rowId === row.id ? styles.hoveredRow : ''}>
                {row.getVisibleCells().map((cell, index) => (
                  <Cell
                    key={cell.id}
                    align={index === 0 ? 'left' : undefined}
                    disableHover
                    onMouseEnter={() => setHoveredCell({ rowId: row.id, columnId: cell.column.id })}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={hoveredCell?.columnId === cell.column.id ? styles.hoveredColumn : ''}
                    {...getCellProps(cell)}
                  />
                ))}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>

      <Box gap={8}>
        <Typography variant="Heading4" color="var(--steel-90)">
          4. Таблица с редактируемыми ячейками
        </Typography>
        <Typography variant="Body1-Medium" style={{ color: 'var(--steel-70)' }}>
          Ховер на всей строке, но ячейки с инпутами имеют более насыщенный цвет
        </Typography>
      </Box>
      <div className={styles.tableWrapper}>
        <Table horizontalBorders verticalBorders className={styles.editableRowHoverTable}>
          <Thead>
            {table4.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Top
                    key={header.id}
                    style={{ width: header.getSize() }}
                    title={
                      typeof header.column.columnDef.header === 'string'
                        ? header.column.columnDef.header
                        : (header.column.columnDef.meta?.title as string) || header.id
                    }
                    right={header.column.columnDef.meta?.isNumeric}
                  />
                ))}
              </Row>
            ))}
          </Thead>
          <Tbody>
            {table4.getRowModel().rows.map(row => (
              <Row key={row.id}>
                {row.getVisibleCells().map(cell => {
                  const isEditable = cell.column.columnDef.meta?.isEditable;

                  return (
                    <Cell
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className={isEditable ? styles.editableCell : ''}
                      disableHover
                      {...(isEditable ? {} : getCellProps(cell))}
                    >
                      {(() => {
                        if (isEditable) {
                          if (typeof cell.column.columnDef.cell === 'function') {
                            return cell.column.columnDef.cell(cell.getContext());
                          }
                          return null;
                        }
                        return getCellProps(cell).children;
                      })()}
                    </Cell>
                  );
                })}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
};

export default RowHighlightExamples;
