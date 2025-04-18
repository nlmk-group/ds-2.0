import React, { useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Box, Button, Drawer, IconSearchOutlined24, IconSettingOutlined24, Input, Typography } from '@components/index';

import { ICustomSettingsProps } from './types';

import styles from './CustomSettings.module.scss';

import { TableColumnList } from './TableColumnList';

/**
 * Компонент CustomSettings - панель настроек таблицы
 *
 * Отвечает за:
 * - Отображение модального окна настроек таблицы
 * - Управление видимостью колонок
 * - Управление порядком колонок
 * - Управление закреплением колонок
 *
 * @template T Тип данных строки таблицы
 */
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

  // Локальные состояния настроек (изменяются только внутри панели до применения)
  const [localVisibleColumns, setLocalVisibleColumns] = useState<Record<string, boolean>>({});
  const [localColumnOrder, setLocalColumnOrder] = useState<string[]>([]);
  const [localPinnedColumns, setLocalPinnedColumns] = useState<Record<string, any>>({});

  const [searchTerm, setSearchTerm] = useState('');

  // Для отслеживания первой инициализации
  const isInitialized = useRef(false);

  const [parentChildMap, setParentChildMap] = useState<Record<string, string[]>>({});

  /**
   * Эффект для создания карты родитель-дочерние элементы
   */
  useEffect(() => {
    const parentChildMap: Record<string, string[]> = {};

    const processColumns = (cols: any[], parent?: string) => {
      cols.forEach(col => {
        if (col.id) {
          if (parent) {
            if (!parentChildMap[parent]) {
              parentChildMap[parent] = [];
            }
            parentChildMap[parent].push(col.id);
          }

          if (col.columns) {
            processColumns(col.columns, col.id);
          }
        }
      });
    };

    processColumns(columns);
    setParentChildMap(parentChildMap);
  }, [columns]);

  /**
   * Эффект для начальной инициализации локальных состояний
   * Выполняется один раз при первом монтировании компонента
   */
  useEffect(() => {
    if (!isInitialized.current) {
      setLocalVisibleColumns({ ...visibleColumns });
      setLocalColumnOrder([...columnOrder]);
      setLocalPinnedColumns({ ...pinnedColumns });
      isInitialized.current = true;
    }
  }, [visibleColumns, columnOrder, pinnedColumns]);

  /**
   * Эффект для обновления локальных состояний при открытии панели
   * Синхронизирует локальные состояния с пропсами при каждом открытии панели
   */
  useEffect(() => {
    if (isOpen) {
      setLocalVisibleColumns({ ...visibleColumns });
      setLocalPinnedColumns({ ...pinnedColumns });

      if (localColumnOrder.length === 0) {
        setLocalColumnOrder([...columnOrder]);
      } else {
        const newIds = columnOrder.filter(id => !localColumnOrder.includes(id));
        if (newIds.length > 0) {
          setLocalColumnOrder([...columnOrder]);
        }
      }

      setSearchTerm('');
    }
  }, [isOpen, visibleColumns, columnOrder, pinnedColumns, localColumnOrder]);

  /**
   * Фильтрация колонок по поисковому запросу
   * Рекурсивно проверяет каждую колонку и её подколонки на соответствие поисковому запросу
   */
  const filteredColumns = React.useMemo(() => {
    if (!searchTerm) return columns;

    const searchLower = searchTerm.toLowerCase();

    const filterColumn = (col: any) => {
      const title = typeof col.header === 'string' ? col.header : col.meta?.title || col.id || '';

      if (title.toLowerCase().includes(searchLower)) {
        return true;
      }

      if (col.columns && col.columns.length > 0) {
        return col.columns.some(filterColumn);
      }

      return false;
    };

    return columns.filter(filterColumn);
  }, [columns, searchTerm]);

  /**
   * Обработчик открытия/закрытия панели настроек
   */
  const handleToggleDrawer = (open: boolean) => {
    setIsOpen(open);
  };

  /**
   * Обработчик изменения поискового запроса
   */
  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Обработчик изменения видимости колонки с учетом дочерних элементов
   * @param columnId ID колонки
   * @param isVisible Новое значение видимости
   */
  const handleVisibilityChange = (columnId: string, isVisible: boolean) => {
    const childrenToUpdate: string[] = [];
  
    const getChildrenRecursively = (parentId: string) => {
      const children = parentChildMap[parentId] || [];
      children.forEach(childId => {
        childrenToUpdate.push(childId);
        if (parentChildMap[childId]) {
          getChildrenRecursively(childId);
        }
      });
    };
  
    setLocalVisibleColumns(prev => ({
      ...prev,
      [columnId]: isVisible
    }));
  
    if (parentChildMap[columnId]) {
      getChildrenRecursively(columnId);
  
      if (!isVisible) {
        setLocalVisibleColumns(prev => {
          const updated = { ...prev };
          childrenToUpdate.forEach(childId => {
            updated[childId] = false;
          });
          return updated;
        });
      } else {
        setLocalVisibleColumns(prev => {
          const updated = { ...prev };
          childrenToUpdate.forEach(childId => {
            updated[childId] = true;
          });
          return updated;
        });
      }
    }
  
    const updateParentVisibility = (childId: string) => {
      const parentId = Object.keys(parentChildMap).find(parentId => parentChildMap[parentId].includes(childId));
  
      if (!parentId) return;
  
      setLocalVisibleColumns(prev => {
        const updated = { ...prev };
        const siblings = parentChildMap[parentId] || [];
  
        const allChildrenHidden = siblings.every(siblingId => !updated[siblingId]);
        const anyChildVisible = siblings.some(siblingId => updated[siblingId]);
  
        if (allChildrenHidden) {
          updated[parentId] = false;
        }
        else if (anyChildVisible) {
          updated[parentId] = true;
        }
  
        return updated;
      });
  
      updateParentVisibility(parentId);
    };
  
    updateParentVisibility(columnId);
  };

  /**
   * Обработчик изменения порядка колонок
   * @param newOrder Новый порядок колонок
   */
  const handleOrderChange = (newOrder: string[]) => {
    setLocalColumnOrder(newOrder);
  };

  /**
   * Обработчик изменения закрепления колонки
   * @param columnId ID колонки
   * @param pinned Новое значение закрепления
   */
  const handlePinChange = (columnId: string, pinned: 'left' | 'right' | false) => {
    setLocalPinnedColumns(prev => ({
      ...prev,
      [columnId]: pinned
    }));
  };

  /**
   * Обработчик сброса настроек к значениям по умолчанию
   */
  const handleResetToDefault = () => {
    setLocalVisibleColumns(defaultVisibleColumns);
    setLocalColumnOrder(defaultColumnOrder);
    setLocalPinnedColumns(defaultPinnedColumns);
  };

  /**
   * Обработчик применения изменений
   * Вызывает колбэки для передачи новых настроек родительскому компоненту
   */
  const handleApply = () => {
    const allColumnIds = new Set<string>();

    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        if (col.id) {
          allColumnIds.add(col.id);
        }
        if (col.columns) {
          processColumns(col.columns);
        }
      });
    };
    processColumns(columns);

    const completeOrder = [...localColumnOrder];
    allColumnIds.forEach(id => {
      if (!completeOrder.includes(id)) {
        completeOrder.push(id);
      }
    });

    onVisibilityChange(localVisibleColumns);
    onOrderChange(completeOrder);
    onPinChange(localPinnedColumns);

    setIsOpen(false);
  };

  /**
   * Обработчик отмены изменений
   */
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

      <Drawer
        isOpen={isOpen}
        onClose={() => handleToggleDrawer(false)}
        position="right"
        width="450px"
        className={styles.drawer}
      >
        <div className={styles.customSettingsContainer}>
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              gap: '16px',
              padding: '0px 24px'
            }}
          >
            <Typography variant="Heading3" color="var(--steel-90)">
              Настройки колонок таблицы
            </Typography>
            <div className={styles.searchBox}>
              <Input
                placeholder="Поиск колонок"
                value={searchTerm}
                onChange={handleSearchChange}
                icon={<IconSearchOutlined24 />}
              />
            </div>

            <div className={styles.columnListContainer}>
              <DndProvider backend={HTML5Backend}>
                <TableColumnList
                  columns={filteredColumns}
                  visibleColumns={localVisibleColumns}
                  columnOrder={localColumnOrder}
                  pinnedColumns={localPinnedColumns}
                  onVisibilityChange={handleVisibilityChange}
                  onOrderChange={handleOrderChange}
                  onPinChange={handlePinChange}
                />
              </DndProvider>
            </div>
          </Box>

          <Box
            style={{
              display: 'flex',
              gap: '16px',
              borderTop: '1px solid',
              borderColor: 'var(--unique-divider)',
              padding: '24px'
            }}
          >
            <Button variant="primary" onClick={handleApply}>
              Применить
            </Button>
            <Button variant="secondary" onClick={handleCancel}>
              Отмена
            </Button>
            <Button variant="primary" color="ghost" onClick={handleResetToDefault}>
              Сбросить
            </Button>
          </Box>
        </div>
      </Drawer>
    </>
  );
};
