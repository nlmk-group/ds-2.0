import { ColumnDef } from '@tanstack/react-table';

export interface ICustomSettingsProps<T> {
  /**
   * Заголовок панели настроек
   */
  title?: string;

  /**
   * Определения колонок таблицы
   */
  columns: ColumnDef<T, any>[];

  /**
   * Состояние видимости колонок
   */
  visibleColumns: Record<string, boolean>;

  /**
   * Порядок колонок
   */
  columnOrder: string[];

  /**
   * Состояние закрепленных колонок
   */
  pinnedColumns: Record<string, 'left' | 'right' | false>;

  /**
   * Начальное состояние видимости колонок
   * Используется для сброса к дефолтному состоянию
   */
  defaultVisibleColumns?: Record<string, boolean>;

  /**
   * Начальный порядок колонок
   * Используется для сброса к дефолтному состоянию
   */
  defaultColumnOrder?: string[];

  /**
   * Начальное состояние закрепленных колонок
   * Используется для сброса к дефолтному состоянию
   */
  defaultPinnedColumns?: Record<string, 'left' | 'right' | false>;

  /**
   * Обработчик изменения видимости колонок
   */
  onVisibilityChange: (columnVisibility: Record<string, boolean>) => void;

  /**
   * Обработчик изменения порядка колонок
   */
  onOrderChange: (columnOrder: string[]) => void;

  /**
   * Обработчик изменения закрепленных колонок
   */
  onPinChange: (pinnedColumns: Record<string, 'left' | 'right' | false>) => void;
}

export interface ITableColumnListProps<T> {
  /**
   * Список колонок таблицы
   */
  columns: ColumnDef<T, any>[];

  /**
   * Видимость колонок
   */
  visibleColumns: Record<string, boolean>;

  /**
   * Порядок колонок
   */
  columnOrder: string[];

  /**
   * Закрепление колонок
   */
  pinnedColumns: Record<string, 'left' | 'right' | false>;

  /**
   * Обработчик изменения видимости колонок
   */
  onVisibilityChange: (columnId: string, isVisible: boolean) => void;

  /**
   * Обработчик изменения порядка колонок
   */
  onOrderChange: (newOrder: string[]) => void;

  /**
   * Обработчик изменения закрепления колонок
   */
  onPinChange: (columnId: string, pinned: 'left' | 'right' | false) => void;
}
