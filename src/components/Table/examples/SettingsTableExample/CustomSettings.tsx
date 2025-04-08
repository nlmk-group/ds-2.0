import React, { useMemo, useState } from 'react';

import { Button, Drawer, IconSearchOutlined24, IconSettingOutlined24, Input } from '@components/index';

import { ICustomSettingsProps } from './types';

import styles from './CustomSettings.module.scss';

import { TableColumnList } from './TableColumnList';

export const CustomSettings = <T extends object>({
  columns,
  visibleColumns,
  columnOrder,
  pinnedColumns,
  defaultVisibleColumns = {},
  defaultColumnOrder = [],
  defaultPinnedColumns = {},
  onVisibilityChange,
  onOrderChange,
  onPinChange
}: ICustomSettingsProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const [localVisibleColumns, setLocalVisibleColumns] = useState(visibleColumns);
  const [localColumnOrder, setLocalColumnOrder] = useState(columnOrder);
  const [localPinnedColumns, setLocalPinnedColumns] = useState(pinnedColumns);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredColumns = useMemo(() => {
    if (!searchTerm) return columns;

    return columns.filter(column => {
      const headerText =
        typeof column.header === 'string' ? column.header : (column.meta?.title as string) || column.id;

      return headerText?.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [columns, searchTerm]);

  const handleToggleDrawer = (open: boolean) => {
    setIsOpen(open);

    if (open) {
      setLocalVisibleColumns(visibleColumns);
      setLocalColumnOrder(columnOrder);
      setLocalPinnedColumns(pinnedColumns);
      setSearchTerm('');
    }
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleVisibilityChange = (columnId: string, isVisible: boolean) => {
    setLocalVisibleColumns(prev => ({
      ...prev,
      [columnId]: isVisible
    }));
  };

  const handleOrderChange = (newOrder: string[]) => {
    setLocalColumnOrder(newOrder);
  };

  const handlePinChange = (columnId: string, pinned: 'left' | 'right' | false) => {
    setLocalPinnedColumns(prev => ({
      ...prev,
      [columnId]: pinned
    }));
  };

  const handleResetToDefault = () => {
    setLocalVisibleColumns(defaultVisibleColumns);
    setLocalColumnOrder(defaultColumnOrder);
    setLocalPinnedColumns(defaultPinnedColumns);
  };

  const handleApply = () => {
    onVisibilityChange(localVisibleColumns);
    onOrderChange(localColumnOrder);
    onPinChange(localPinnedColumns);
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="secondary"
        color="ghost"
        size="s"
        startIcon={<IconSettingOutlined24 color="primary" />}
        onClick={() => handleToggleDrawer(true)}
        title="Настройки таблицы"
      />

      <Drawer isOpen={isOpen} onClose={() => handleToggleDrawer(false)} position="right" width="450px">
        <div className={styles.customSettingsContainer}>
          <div className={styles.searchBox}>
            <Input
              placeholder="Поиск колонок"
              value={searchTerm}
              onChange={handleSearchChange}
              icon={<IconSearchOutlined24 color="secondary" />}
            />
          </div>

          <div className={styles.columnListContainer}>
            <TableColumnList
              columns={filteredColumns}
              visibleColumns={localVisibleColumns}
              columnOrder={localColumnOrder}
              pinnedColumns={localPinnedColumns}
              onVisibilityChange={handleVisibilityChange}
              onOrderChange={handleOrderChange}
              onPinChange={handlePinChange}
            />
          </div>

          <div className={styles.buttonsGroup}>
            <Button variant="primary" size="s" onClick={handleApply}>
              Применить
            </Button>
            <Button variant="secondary" color="ghost" size="s" onClick={handleCancel}>
              Отмена
            </Button>
            <Button variant="secondary" color="ghost" size="s" onClick={handleResetToDefault}>
              Сбросить
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
};
