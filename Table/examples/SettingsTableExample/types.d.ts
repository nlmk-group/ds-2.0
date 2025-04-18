import { ColumnDef } from '@tanstack/react-table';

export interface ICustomSettingsProps<T> {
    title?: string;
    columns: ColumnDef<T, any>[];
    visibleColumns: Record<string, boolean>;
    columnOrder: string[];
    pinnedColumns: Record<string, 'left' | 'right' | false>;
    defaultVisibleColumns?: Record<string, boolean>;
    defaultColumnOrder?: string[];
    defaultPinnedColumns?: Record<string, 'left' | 'right' | false>;
    onVisibilityChange: (columnVisibility: Record<string, boolean>) => void;
    onOrderChange: (columnOrder: string[]) => void;
    onPinChange: (pinnedColumns: Record<string, 'left' | 'right' | false>) => void;
}
export interface ITableColumnListProps<T> {
    columns: ColumnDef<T, any>[];
    visibleColumns: Record<string, boolean>;
    columnOrder: string[];
    pinnedColumns: Record<string, 'left' | 'right' | false>;
    onVisibilityChange: (columnId: string, isVisible: boolean) => void;
    onOrderChange: (newOrder: string[]) => void;
    onPinChange: (columnId: string, pinned: 'left' | 'right' | false) => void;
}
//# sourceMappingURL=types.d.ts.map