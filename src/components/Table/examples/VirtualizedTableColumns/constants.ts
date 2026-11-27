import { ColumnDef } from '@tanstack/react-table';

import { columns as baseColumns, data as people } from '../VirtualizedTableWithDynamicRowHeight/constants';
import { IVirtualizedData } from '../VirtualizedTableWithDynamicRowHeight/types';

const createColumn = (index: number): ColumnDef<IVirtualizedData> => ({
  id: `column${index}`,
  header: `Столбец ${index}`,
  size: 112,
  accessorFn: row => `${row.id} · ${index}`
});

export const columns = [...baseColumns, ...Array.from({ length: 992 }, (_, index) => createColumn(index + 9))];
export const data = people.slice(0, 12);
