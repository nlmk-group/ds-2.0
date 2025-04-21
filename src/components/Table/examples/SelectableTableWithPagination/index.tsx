import React, { useState } from 'react';

import { Cell, Pagination, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import { ECellState } from '@components/Table/Cell/types';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable
} from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const SelectableTableWithPaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageIndex: currentPage - 1,
        pageSize
      },
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  const selectedCount = table.getSelectedRowModel().rows.length;

  return (
    <>
      <Typography variant="Body1-Bold" color="var(--steel-90)">
        {selectedCount > 0
          ? `Выбрано элементов: ${selectedCount} из ${data.length}`
          : `Всего элементов: ${data.length}`}
      </Typography>
      <div className={styles.tableContainer} style={{ height: '100%' }}>
        <Table horizontalBorders verticalBorders>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <Top
                    key={header.id}
                    className={header.column.columnDef.meta?.className}
                    title={header.column.columnDef.id !== 'select' ? String(header.column.columnDef.header) : ''}
                    right={header.column.columnDef.meta?.isNumeric && index !== 1}
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
                  {row.getVisibleCells().map((cell, index) => (
                    <Cell
                      key={cell.id}
                      state={isSelected ? ECellState.SELECTED : ECellState.DEFAULT}
                      style={{
                        width: cell.column.getSize()
                      }}
                      align={index === 1 ? 'left' : undefined}
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
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          elementsPerPage={pageSize}
          setElementsPerPage={setPageSize}
          pageSizes={[10, 15, data.length]}
          withSelect
          maxPageCount={Math.ceil(data.length / pageSize)}
        />
      </div>
    </>
  );
};

export default SelectableTableWithPaginationExample;
