import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import {
  Badge,
  Box,
  Button,
  Drawer,
  IconSearchOutlined24,
  IconSettingOutlined24,
  Input,
  Typography
} from '@components/index';

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
  onVisibilityChange,
  onOrderChange,
  onPinChange
}: ICustomSettingsProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const [localVisibleColumns, setLocalVisibleColumns] = useState<Record<string, boolean>>({});
  const [localColumnOrder, setLocalColumnOrder] = useState<string[]>([]);
  const [localPinnedColumns, setLocalPinnedColumns] = useState<Record<string, any>>({});

  const initialSettings = useRef({
    visibleColumns: {} as Record<string, boolean>,
    columnOrder: [] as string[],
    pinnedColumns: {} as Record<string, any>
  });

  const [searchTerm, setSearchTerm] = useState('');

  const isInitialized = useRef(false);

  const [parentChildMap, setParentChildMap] = useState<Record<string, string[]>>({});

  /**
   * Инициализация видимости колонок напрямую из columns
   * По умолчанию все колонки видимы
   */
  const initVisibility = useCallback(() => {
    const visibility: Record<string, boolean> = {};
    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        if (col.id) {
          visibility[col.id] = true;
        }
        if (col.columns) {
          processColumns(col.columns);
        }
      });
    };
    processColumns(columns);
    return visibility;
  }, [columns]);

  /**
   * Получение всех ID колонок напрямую из columns
   */
  const getAllColumnIds = useCallback(() => {
    const result: string[] = [];

    const processColumns = (cols: any[]) => {
      cols.forEach(col => {
        if (col.id) {
          result.push(col.id);
        }
        if (col.columns) {
          processColumns(col.columns);
        }
      });
    };

    processColumns(columns);
    return result;
  }, [columns]);

  /**
   * Функция для подсчета количества измененных настроек
   */
  const countChanges = useCallback(() => {
    let visibilityChanges = 0;
    let orderChanged = false;
    let pinningChanges = 0;

    Object.keys({ ...initialSettings.current.visibleColumns, ...visibleColumns }).forEach(key => {
      const initialValue = initialSettings.current.visibleColumns[key];
      const currentValue = visibleColumns[key];

      if (initialValue !== currentValue) {
        visibilityChanges++;
      }
    });

    if (columnOrder.join(',') !== initialSettings.current.columnOrder.join(',')) {
      orderChanged = true;
    }

    const allPinKeys = new Set([...Object.keys(initialSettings.current.pinnedColumns), ...Object.keys(pinnedColumns)]);

    allPinKeys.forEach(key => {
      const initialValue = initialSettings.current.pinnedColumns[key] || false;
      const currentValue = pinnedColumns[key] || false;

      if (initialValue !== currentValue) {
        pinningChanges++;
      }
    });

    const totalChanges = visibilityChanges + (orderChanged ? 1 : 0) + pinningChanges;
    return totalChanges;
  }, [visibleColumns, columnOrder, pinnedColumns]);

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
   * и сохранения начальных настроек для бейджа
   */
  useEffect(() => {
    if (!isInitialized.current) {
      setLocalVisibleColumns({ ...visibleColumns });
      setLocalColumnOrder([...columnOrder]);
      setLocalPinnedColumns({ ...pinnedColumns });

      initialSettings.current = {
        visibleColumns: { ...visibleColumns },
        columnOrder: [...columnOrder],
        pinnedColumns: { ...pinnedColumns }
      };

      isInitialized.current = true;
    }
  }, [visibleColumns, columnOrder, pinnedColumns]);

  /**
   * Эффект для обновления локальных состояний при открытии панели
   */
  useEffect(() => {
    if (isOpen) {
      setLocalVisibleColumns({ ...visibleColumns });
      setLocalColumnOrder([...columnOrder]);
      setLocalPinnedColumns({ ...pinnedColumns });
      setSearchTerm('');
    }
  }, [isOpen, visibleColumns, columnOrder, pinnedColumns]);

  /**
   * Фильтрация колонок по поисковому запросу
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
   */
  const handleVisibilityChange = (columnId: string, isVisible: boolean) => {
    setLocalVisibleColumns(prev => ({
      ...prev,
      [columnId]: isVisible
    }));

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

    setTimeout(() => {
      const directParentId = Object.keys(parentChildMap).find(parentId => parentChildMap[parentId].includes(columnId));

      if (directParentId) {
        setLocalVisibleColumns(prev => {
          const updated = { ...prev };
          const siblings = parentChildMap[directParentId] || [];

          const allSiblingsHidden = siblings.every(siblingId => !updated[siblingId]);
          const anySiblingVisible = siblings.some(siblingId => updated[siblingId]);

          if (allSiblingsHidden) {
            updated[directParentId] = false;
          } else if (anySiblingVisible) {
            updated[directParentId] = true;
          }

          return updated;
        });

        const updateParentChain = (childId: string) => {
          const parentId = Object.keys(parentChildMap).find(parentId => parentChildMap[parentId].includes(childId));

          if (!parentId) return;

          setLocalVisibleColumns(prev => {
            const updated = { ...prev };
            const siblings = parentChildMap[parentId] || [];

            const allChildrenHidden = siblings.every(siblingId => !updated[siblingId]);
            const anyChildVisible = siblings.some(siblingId => updated[siblingId]);

            if (allChildrenHidden) {
              updated[parentId] = false;
            } else if (anyChildVisible) {
              updated[parentId] = true;
            }

            return updated;
          });

          updateParentChain(parentId);
        };

        updateParentChain(directParentId);
      }
    }, 0);
  };

  /**
   * Обработчик изменения порядка колонок
   */
  const handleOrderChange = (newOrder: string[]) => {
    setLocalColumnOrder(newOrder);
  };

  /**
   * Обработчик изменения закрепления колонки
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
    const defaultVisibleCols = initVisibility();
    const defaultColOrder = getAllColumnIds();
    const defaultPinnedCols = {};

    onVisibilityChange(defaultVisibleCols);
    onOrderChange(defaultColOrder);
    onPinChange(defaultPinnedCols);

    initialSettings.current = {
      visibleColumns: { ...defaultVisibleCols },
      columnOrder: [...defaultColOrder],
      pinnedColumns: { ...defaultPinnedCols }
    };

    setIsOpen(false);
  };

  /**
   * Обработчик применения изменений
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

  const changesCount = countChanges();

  return (
    <>
      <Box gap="4px" alignItems="center">
        <Button
          variant="secondary"
          color="ghost"
          size="s"
          iconButton={<IconSettingOutlined24 color="primary" />}
          onClick={() => handleToggleDrawer(true)}
          title="Настройки таблицы"
        />
        <Badge size="m" style={{ height: '24px' }}>
          {changesCount}
        </Badge>
      </Box>

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
            <Button variant="secondary" color="ghost" onClick={handleResetToDefault}>
              Сбросить
            </Button>
          </Box>
        </div>
      </Drawer>
    </>
  );
};
