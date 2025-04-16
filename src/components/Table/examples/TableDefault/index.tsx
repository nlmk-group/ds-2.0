import React from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { defaultColumns, defaultData, getCellProps } from '..';

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
              {headerGroup.headers.map(header => (
                <Top
                  key={header.id}
                  className={styles.notSortable}
                  title={flexRender(header.column.columnDef.header, header.getContext())}
                  right={header.column.columnDef.meta?.isNumeric}
                />
              ))}
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

export default TableWithTanStackExample;
