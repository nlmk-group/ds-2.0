import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { ECellState } from '@components/Table/Cell/types';
import { flexRender, getCoreRowModel, RowSelectionState, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const SelectableTableExample = () => {
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

  return (
    <div className={styles.tableContainer}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Top
                  key={header.id}
                  className={header.column.columnDef.meta?.className}
                  title={header.column.columnDef.id !== 'select' ? String(header.column.columnDef.header) : ''}
                  right={header.column.columnDef.meta?.isNumeric}
                >
                  {header.column.columnDef.id === 'select'
                    ? flexRender(header.column.columnDef.header, header.getContext())
                    : null}
                </Top>
              ))}
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
                    {cell.column.id === 'select' ? flexRender(cell.column.columnDef.cell, cell.getContext()) : null}
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

export default SelectableTableExample;
