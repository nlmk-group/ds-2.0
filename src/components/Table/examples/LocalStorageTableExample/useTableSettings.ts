import { useCallback, useMemo } from 'react';

import { ColumnOrderState, ColumnPinningState, ColumnSizingState, VisibilityState } from '@tanstack/react-table';

export type TableSettings = {
  columnVisibility: VisibilityState;
  columnOrder: ColumnOrderState;
  columnPinning: ColumnPinningState;
  columnSizing?: ColumnSizingState;
};

type UseTableSettingsProps = {
  /** Ключ для localStorage. Если не указан, настройки не сохраняются */
  storageKey?: string;
  /** Настройки по умолчанию */
  defaultSettings: TableSettings;
};

/**
 * Хук для управления настройками таблицы с сохранением в localStorage
 */
export const useTableSettings = ({ storageKey, defaultSettings }: UseTableSettingsProps) => {
  const finalStorageKey = useMemo(() => {
    if (!storageKey) {
      return null;
    }
    // Можно добавить userId для персонализации
    // const userId = getCurrentUserId();
    // return `table-settings-${userId}-${storageKey}`;
    return `table-settings-${storageKey}`;
  }, [storageKey]);

  /**
   * Загрузка настроек из localStorage
   */
  const loadSettings = useCallback((): TableSettings => {
    if (!finalStorageKey) {
      return defaultSettings;
    }

    const saved = localStorage.getItem(finalStorageKey);

    if (saved) {
      const parsed = JSON.parse(saved) as TableSettings;

      const result = {
        columnVisibility: {
          ...defaultSettings.columnVisibility,
          ...parsed.columnVisibility
        },
        columnOrder:
          parsed.columnOrder && parsed.columnOrder.length > 0 ? parsed.columnOrder : defaultSettings.columnOrder,
        columnPinning: {
          left: parsed.columnPinning?.left ?? defaultSettings.columnPinning?.left ?? [],
          right: parsed.columnPinning?.right ?? defaultSettings.columnPinning?.right ?? []
        },
        columnSizing: {
          ...defaultSettings.columnSizing,
          ...parsed.columnSizing
        }
      };

      return result;
    }

    return defaultSettings;
  }, [finalStorageKey, defaultSettings]);

  /**
   * Сохранение настроек в localStorage
   */
  const saveSettings = useCallback(
    (settings: TableSettings) => {
      if (!finalStorageKey) {
        return;
      }

      const stringified = JSON.stringify(settings);
      localStorage.setItem(finalStorageKey, stringified);
    },
    [finalStorageKey]
  );

  /**
   * Очистка настроек из localStorage
   */
  const clearSettings = useCallback(() => {
    if (!finalStorageKey) return;

    localStorage.removeItem(finalStorageKey);
  }, [finalStorageKey]);

  return {
    loadSettings,
    saveSettings,
    clearSettings
  };
};
