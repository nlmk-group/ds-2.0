import React, { FC, useEffect, useState } from 'react';

import { OnChangeFn, SortingState, TableState } from '@tanstack/react-table';

import { defaultColumns, defaultData } from '../constants';
import { IData } from '../types';
import CommonTable from './CommonTable';

const SortingPaginationExample: FC = () => {
  const [data, setData] = useState(defaultData);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handleSortingChange: OnChangeFn<SortingState> = updaterOrValue => {
    setCurrentPageNumber(1);
    setSorting(updaterOrValue);
  };

  const pageCount = Math.ceil(defaultData.length / pageSize);

  const state: Pick<TableState, 'sorting' | 'pagination'> = {
    sorting,
    pagination: {
      pageIndex: currentPageNumber - 1,
      pageSize
    }
  };

  useEffect(() => {
    const { pagination, sorting } = state;
    const { pageIndex, pageSize } = pagination;

    const sortedData = [...defaultData].sort((a, b) => {
      for (const sort of sorting) {
        const comparator = (a: IData, b: IData) => {
          const aValue = a[sort.id as keyof IData] ?? 0;
          const bValue = b[sort.id as keyof IData] ?? 0;
          if (sort.desc) {
            return aValue < bValue ? 1 : -1;
          } else {
            return aValue > bValue ? 1 : -1;
          }
        };
        return comparator(a, b);
      }
      return 0;
    });

    const start = pageIndex * pageSize;
    const end = (pageIndex + 1) * pageSize;
    setData(sortedData.slice(start, end));
  }, [currentPageNumber, pageSize, sorting]);

  return (
    <CommonTable<IData>
      stickyHeader
      columns={defaultColumns}
      data={data}
      isLoading={false}
      withPagination
      pagination={{ pageCount, pageSizes: [10, 15] }}
      onPageChange={setCurrentPageNumber}
      onPageSizeChange={setPageSize}
      onSortingChange={handleSortingChange}
      state={state}
    />
  );
};

export default SortingPaginationExample;
