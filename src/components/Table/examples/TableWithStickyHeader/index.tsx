import React from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { Cell, Row, Status, Table, Tbody, Thead, Top } from '@components/index';
import { EStatusColor } from '@components/Status/enums';
import { ECellStatus } from '@components/Table/Cell/types';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import styles from '../Example.module.scss';

import { defaultColumns, defaultData, getCellProps } from '..';

const TableWithStickyHeader = () => {
  const table = useReactTable({
    data: defaultData,
    columns: defaultColumns,
    getCoreRowModel: getCoreRowModel()
  });

  const getStatusConfig = (status: ECellStatus) => {
    const config: Record<ECellStatus, { color: EStatusColor; icon: TIconName }> = {
      [ECellStatus.SUCCESS]: {
        color: EStatusColor.success,
        icon: 'IconAllDoneDoubleCheckOutlined24'
      },
      [ECellStatus.ERROR]: {
        color: EStatusColor.error,
        icon: 'IconBlockCloseOutlined24'
      },
      [ECellStatus.DEFAULT]: {
        color: EStatusColor.default,
        icon: 'IconCloudDoneOutlined24'
      },
      [ECellStatus.WARNING]: {
        color: EStatusColor.success,
        icon: 'IconPeopleCheckDoneOutlined24'
      }
    };

    return config[status];
  };

  return (
    <div className={styles.tableContainer}>
      <Table horizontalBorders verticalBorders>
        <Thead style={{ position: 'sticky', top: 0, zIndex: 1 }}>
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
              {row.getVisibleCells().map((cell, index) =>
                cell.column.id === 'status' ? (
                  <Cell key={cell.id} {...getCellProps(cell)}>
                    <Status {...getStatusConfig(row.original.status)}>{row.original.status}</Status>
                  </Cell>
                ) : (
                  <Cell key={cell.id} align={index === 0 ? 'left' : undefined} {...getCellProps(cell)} />
                )
              )}
            </Row>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default TableWithStickyHeader;
