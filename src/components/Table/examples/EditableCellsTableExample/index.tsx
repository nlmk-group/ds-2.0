import React, { useMemo, useState } from 'react';

import { Box, Button, IconDeleteBinFilled24, Typography } from '@components/index';
import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { ColumnResizeMode, ColumnSizingState, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from './EditableCellsTableExample.module.scss';

import { getCellProps } from '../utils';
import { createColumns, EditableRow, initialData } from './constants';

/**
 * Компонент EditableCellsTableExample - пример таблицы с интерактивными элементами ввода
 *
 * Демонстрирует:
 * - Редактирование текстовых полей (Input)
 * - Редактирование числовых полей (Input type="number")
 * - Выбор из выпадающего списка (SimpleSelect)
 * - Вычисляемые поля (quantity * price)
 * - Сохранение изменений в состоянии
 * - Добавление и удаление строк
 *
 * @example
 * ```tsx
 * <EditableCellsTableExample />
 * ```
 */
const EditableCellsTableExample = () => {
  const [data, setData] = useState<EditableRow[]>(initialData);
  const [columnSizing, setColumnSizing] = useState<ColumnSizingState>({});
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  /**
   * Обработчик изменения значения ячейки
   */
  const handleCellChange = (rowId: string, columnId: string, value: any) => {
    setData(prevData =>
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

  /**
   * Добавление новой строки
   */
  const handleAddRow = () => {
    const newId = (Math.max(...data.map(row => parseInt(row.id)), 0) + 1).toString();
    const newRow: EditableRow = {
      id: newId,
      product: 'Новый товар',
      quantity: 1,
      price: 0,
      status: 'pending',
      notes: ''
    };

    setData([...data, newRow]);
  };

  /**
   * Удаление строки
   */
  const handleDeleteRow = (rowId: string) => {
    setData(prevData => prevData.filter(row => row.id !== rowId));
  };

  /**
   * Сброс данных к начальному состоянию
   */
  const handleResetData = () => {
    setData(initialData);
  };

  /**
   * Подсчет общей суммы
   */
  const totalSum = useMemo(() => {
    return data.reduce((sum, row) => sum + row.quantity * row.price, 0);
  }, [data]);

  const columns = useMemo(
    () => [
      ...createColumns(handleCellChange),
      {
        id: 'actions',
        header: 'Действия',
        cell: (info: any) => {
          const rowId = info.row.original.id;
          return (
            <Button size="s" color="error" startIcon={<IconDeleteBinFilled24 />} onClick={() => handleDeleteRow(rowId)}>
              Удалить
            </Button>
          );
        },
        size: 120,
        meta: {
          title: 'Действия со строкой'
        }
      }
    ],
    [data]
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      columnSizing
    },
    onColumnSizingChange: setColumnSizing,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 80,
      maxSize: 500,
      size: 120
    }
  });

  return (
    <>
      <Box gap={16} style={{ marginBottom: '16px' }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          Таблица с интерактивными элементами ввода
        </Typography>
        <Typography variant="Body1-Medium" style={{ color: 'var(--steel-70)' }}>
          Редактируйте значения прямо в таблице, добавляйте и удаляйте строки
        </Typography>
      </Box>

      <Box gap={8} style={{ marginBottom: '16px' }} justifyContent="space-between" alignItems="center">
        <Box gap={8} pb={16}>
          <Button variant="primary" size="s" onClick={handleAddRow}>
            Добавить строку
          </Button>
          <Button variant="secondary" size="s" onClick={handleResetData}>
            Сбросить изменения
          </Button>
        </Box>
        <Typography variant="Body1-Bold" color="var(--steel-90)">
          Общая сумма: {totalSum.toLocaleString('ru-RU')} ₽
        </Typography>
      </Box>

      <div className={styles.tableContainer}>
        <Table
          horizontalBorders
          verticalBorders
          style={{
            width: '100%',
            minWidth: table
              .getAllLeafColumns()
              .filter(col => col.getIsVisible())
              .reduce((sum, col) => sum + col.getSize(), 0),
            tableLayout: 'fixed'
          }}
        >
          <Thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            {table.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const size = header.getSize();

                  return (
                    <Top
                      key={header.id}
                      style={{ width: size, minWidth: size, maxWidth: size, cursor: 'default' }}
                      drag={true}
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      title={
                        typeof header.column.columnDef.header === 'string'
                          ? header.column.columnDef.header
                          : (header.column.columnDef.meta?.title as string) || header.id
                      }
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
                {row.getVisibleCells().map(cell => {
                  const size = cell.column.getSize();
                  const isEditable = cell.column.columnDef.meta?.isEditable;

                  return (
                    <Cell
                      key={cell.id}
                      style={{
                        width: size,
                        minWidth: size,
                        maxWidth: size
                      }}
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
    </>
  );
};

export default EditableCellsTableExample;
