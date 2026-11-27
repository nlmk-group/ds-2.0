import React from 'react';

import Scrollbar from '@components/Scrollbar';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import Cell from '../../Cell';
import Row from '../../Row';
import Table from '../../Table';
import Tbody from '../../Tbody';
import Thead from '../../Thead';
import Top from '../../Top';
import { defaultColumns, defaultData, statusLabels } from '../constants';
import { getCellProps } from '../utils';

const basicRows = defaultData.slice(0, 3);

const TableWithTanStackExample = () => {
  const table = useReactTable({
    data: basicRows,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Scrollbar className={`${styles.tableContainer} ${styles.basicTable}`}>
      <Table horizontalBorders verticalBorders>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <Top
                  key={header.id}
                  className={styles.notSortable}
                  title={flexRender(header.column.columnDef.header, header.getContext())}
                  right={header.column.columnDef.meta?.isNumeric && index !== 0}
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
                  color={cell.column.id === 'status' ? row.original.status : undefined}
                  align={index === 0 ? 'left' : undefined}
                  {...(cell.column.id === 'status' ? { text: statusLabels[row.original.status] } : getCellProps(cell))}
                />
              ))}
            </Row>
          ))}
        </Tbody>
      </Table>
    </Scrollbar>
  );
};

export default TableWithTanStackExample;
