import React from 'react';

import { Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import { CellContext, ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { defaultColumns, defaultData, IData } from '..';

const CustomCell = ({ row }: CellContext<IData, unknown>) => (
  <div style={{ width: '100%', height: '100%', background: 'var(--spectrum-green-20)' }}>{row.original.name}</div>
);

const columns: ColumnDef<IData>[] = [
  ...defaultColumns,
  {
    header: 'Custom Name',
    id: 'custom',
    cell: CustomCell,
    meta: {
      getCellClassName: () => styles.fullWidthCell
    }
  }
];

export const TableWithCustomCellExample = () => {
  const table = useReactTable({
    data: defaultData,
    columns,
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
                  right={header.column.columnDef.meta?.isNumeric && index !== 0}
                />
              ))}
            </Row>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map(row => (
            <Row key={row.id}>
              {row.getVisibleCells().map((cell, index) => {
                const isCustomCell = !!cell.column.columnDef.cell;
                return (
                  <Cell
                    key={index}
                    size="xs"
                    title={cell.renderValue<string>()}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      width: cell.column.getSize()
                    }}
                    className={cell.column.columnDef.meta?.getCellClassName?.(row)}
                  >
                    {isCustomCell ? (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    ) : (
                      <Typography color="var(--steel-90)" variant="Body1-Medium" className={styles.content}>
                        {cell.renderValue<string>()}
                      </Typography>
                    )}
                  </Cell>
                );
              })}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};
