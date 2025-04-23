import { default as React } from '../../../../../node_modules/react';
import { ESize } from '../../Top/types';
import { ColumnDef, OnChangeFn, SortingState, TableOptions } from '@tanstack/react-table';

export interface CommonTableProps<T> extends Omit<TableOptions<T>, 'getCoreRowModel'> {
    data: T[];
    columns: ColumnDef<T>[];
    isLoading?: boolean;
    onSortingChange?: OnChangeFn<SortingState>;
    onPageChange?: (page: number) => void;
    onPageSizeChange?: (size: number) => void;
    size?: ESize;
    stickyHeader?: boolean;
    withPagination?: boolean;
    pagination?: {
        pageCount: number;
        pageSizes: number[];
    };
}
declare const CommonTable: <T>({ data, columns, isLoading, onSortingChange, onPageChange, onPageSizeChange, state, size, stickyHeader, withPagination, pagination }: CommonTableProps<T>) => React.JSX.Element;
export default CommonTable;
//# sourceMappingURL=CommonTable.d.ts.map