import React from 'react';

import { Box, Cell, Row, Table, Tbody, Thead, Top, Typography } from '@components/index';
import { getCellProps } from '@components/Table/examples';
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from './TopComponent.module.scss';

interface IData {
  id: number;
  name: string;
  melt: number;
  batch: number;
}

const defaultData: IData[] = [
  { id: 1, name: 'Холоднокатаный прокат', melt: 25, batch: 2555020 },
  { id: 2, name: 'Полимерный прокат', melt: 30, batch: 2555020 },
  { id: 3, name: 'Холоднокатаный прокат', melt: 40, batch: 2555020 },
  { id: 4, name: 'Холоднокатаный прокат', melt: 25, batch: 2555020 },
  { id: 5, name: 'Оцинкованный прокат', melt: 30, batch: 2555020 },
  { id: 6, name: 'Холоднокатаный прокат', melt: 40, batch: 2555020 },
  { id: 7, name: 'Полимерный прокат', melt: 28, batch: 2555020 },
  { id: 8, name: 'Холоднокатаный прокат', melt: 35, batch: 2555020 }
];

const defaultColumns: ColumnDef<IData>[] = [
  { header: 'ID', accessorKey: 'id', meta: { isNumeric: true } },
  { header: 'Группа продукции', accessorKey: 'name' },
  { header: 'Плавка', accessorKey: 'melt', meta: { isNumeric: true } },
  { header: 'Партия', accessorKey: 'batch' }
];
export const TopComponent = () => {
  const table = useReactTable({
    data: defaultData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Box width={900} flexDirection="column">
      <Typography variant="Body-Bold" color="var(--steel-90)">
        Требования клиента
      </Typography>
      <div className={styles.wrapper}>
        <Table horizontalBorders verticalBorders>
          <Thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <Top
                    key={header.id}
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
                  <Cell key={cell.id} align={index === 0 ? 'left' : undefined} {...getCellProps(cell)} />
                ))}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
};
