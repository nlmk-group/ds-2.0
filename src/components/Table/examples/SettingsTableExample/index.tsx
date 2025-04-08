import React, { useState } from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/index';
import {
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  getCoreRowModel,
  useReactTable,
  VisibilityState
} from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { getCellProps } from '../utils';
import { columns, data } from './constants';
import { CustomSettings } from './CustomSettings';

const SettingsTableExample = () => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnOrder, setColumnOrder] = useState<ColumnOrderState>([]);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({});
  const [columnResizeMode] = useState<ColumnResizeMode>('onChange');

  const pinnedColumns: Record<string, 'left' | 'right' | false> = {};
  if (columnPinning.left) {
    columnPinning.left.forEach(id => {
      pinnedColumns[id] = 'left';
    });
  }
  if (columnPinning.right) {
    columnPinning.right.forEach(id => {
      pinnedColumns[id] = 'right';
    });
  }

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      columnVisibility,
      columnOrder,
      columnPinning
    },
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnOrderChange: setColumnOrder,
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode,
    enableColumnResizing: true,
    defaultColumn: {
      minSize: 80,
      maxSize: 500,
      size: 120
    }
  });

  const handleVisibilityChange = (newVisibility: Record<string, boolean>) => {
    setColumnVisibility(newVisibility);
  };

  const handleOrderChange = (newOrder: string[]) => {
    setColumnOrder(newOrder);
  };

  const handlePinChange = (newPinning: Record<string, 'left' | 'right' | false>) => {
    const left: string[] = [];
    const right: string[] = [];

    Object.entries(newPinning).forEach(([id, pin]) => {
      if (pin === 'left') {
        left.push(id);
      } else if (pin === 'right') {
        right.push(id);
      }
    });

    setColumnPinning({ left, right });
  };

  const tableColumnOrder = React.useMemo(() => {
    const leafColumns = table.getAllLeafColumns();
    return leafColumns.map(column => column.id);
  }, [table]);

  return (
    <div>
      <CustomSettings
        columns={columns}
        visibleColumns={columnVisibility}
        columnOrder={tableColumnOrder}
        pinnedColumns={pinnedColumns}
        onVisibilityChange={handleVisibilityChange}
        onOrderChange={handleOrderChange}
        onPinChange={handlePinChange}
      />

      <div className={styles.tableContainer}>
        <Table horizontalBorders verticalBorders>
          <Thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
            {table.getHeaderGroups().map(headerGroup => (
              <Row key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  const columnRelativeDepth = header.depth - header.column.depth;

                  if (columnRelativeDepth > 1) {
                    return null;
                  }

                  let rowSpan = 1;

                  if (header.isPlaceholder) {
                    const leafs = header.getLeafHeaders();
                    rowSpan = Math.max(1, leafs[leafs.length - 1].depth - header.depth);
                  }

                  const metaRowSpan = header.column.columnDef.meta?.rowSpan;
                  if (metaRowSpan !== undefined) {
                    rowSpan = metaRowSpan;
                  }

                  const size = header.column.columnDef.meta?.size || header.getSize();

                  return (
                    <Top
                      key={header.id}
                      style={{ width: size }}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
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
                  const size = cell.column.columnDef.meta?.size || cell.column.getSize();

                  return <Cell key={cell.id} style={{ width: size }} {...getCellProps(cell)} />;
                })}
              </Row>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default SettingsTableExample;
