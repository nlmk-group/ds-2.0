import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import { ColumnResizeMode, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '..';
import { columns, data } from './constants';

const GroupHeaderTableWithResizeExample = () => {
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 30,
      maxSize: 800
    }
  });

  return (
    <div className={styles.tableContainer} style={{ width: table.getCenterTotalSize(), height: '500px' }}>
      <Table verticalBorders horizontalBorders style={{ width: table.getCenterTotalSize() }}>
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Row key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                if (!header || !header.column) return null;

                const columnRelativeDepth = header.depth - header.column.depth;
                if (columnRelativeDepth > 1 && header.id === header.column.id) {
                  return null;
                }

                let rowSpan = 1;
                if (header.isPlaceholder) {
                  const leafs = header.getLeafHeaders();
                  rowSpan = leafs[leafs.length - 1].depth - header.depth;
                }

                const metaRowSpan = header.column.columnDef.meta?.rowSpan;
                if (metaRowSpan) {
                  rowSpan = metaRowSpan;
                }

                return (
                  <Top
                    key={header.id}
                    colSpan={header.colSpan}
                    rowSpan={rowSpan}
                    style={{
                      width: header.getSize(),
                      position: 'relative'
                    }}
                    drag={header.column.getCanResize()}
                    onMouseDown={header.getResizeHandler()}
                    onTouchStart={header.getResizeHandler()}
                    onDoubleClick={() => header.column.resetSize()}
                    title={flexRender(header.column.columnDef.header, header.getContext())}
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
                <Cell
                  key={cell.id}
                  style={{
                    width: cell.column.getSize()
                  }}
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

export default GroupHeaderTableWithResizeExample;
