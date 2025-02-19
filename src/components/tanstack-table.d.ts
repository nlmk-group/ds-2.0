import '@tanstack/react-table';

declare module '@tanstack/table-core' {
  interface ColumnMeta<_TData extends RowData, _TValue> {
    rowSpan?: number;
    colSpan?: number;
  }
}
