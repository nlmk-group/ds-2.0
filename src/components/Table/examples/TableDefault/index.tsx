import React from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { defaultColumns, defaultData, getCellAlign, getCellProps } from '..';

const TableWithTanStackExample = () => {
  const table = useReactTable({
    data: defaultData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div style={{ width: '800px', height: '600px', overflowY: 'auto', overflowX: 'auto' }}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <Top
                  key={header.id}
                  className={styles.notSortable}
                  title={flexRender(header.column.columnDef.header, header.getContext())}
                  right={getCellAlign(header.column.columnDef, index) === 'right'}
                />
              ))}
            </Row>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Row key={row.id}>
              {row.getVisibleCells().map((cell, index) => (
                <Cell
                  key={cell.id}
                  color={row.original.status}
                  align={getCellAlign(cell.column.columnDef, index)}
                  {...getCellProps(cell)}
                />
              ))}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TableWithTanStackExample;
