import React, { Key, useEffect, useState } from 'react';

import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';
import clsx from 'clsx';
import { isArray } from 'lodash';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

import styles from './styles.module.scss';

import { ROW_PX_HEIGHTS, TITLE_VARIANT_BY_ROW_HEIGHT } from '../../constants';
import { ERowHeight, TCheckedKeys, TDropEvent, TNodeItem, TTreeItem, TTreeListProps } from '../../types';
import { addNodeAtKey, findAndRemoveNode, updateParentKeys } from './utils';

export const TreeListV1 = ({
  data,
  draggable,
  checkable,
  checkableSimple,
  onSelectedNode,
  onDataAfterDrag,
  rowHeight = ERowHeight.s,
  initialCheckedKeys = [],
  initialExpandedKeys = []
}: TTreeListProps) => {
  const [treeData, setTreeData] = useState(data);
  const selectable = false;
  const [checkedKeys, setCheckedKeys] = useState<TCheckedKeys>(initialCheckedKeys);
  const keys = isArray(checkedKeys) ? checkedKeys : checkedKeys.checked;
  const [dragging, setDragging] = useState<string | null>(null);
  const [expandedKeys, setExpandedKeys] = useState<Key[]>(initialExpandedKeys);

  const handleExpand = (key: Key) => {
    setExpandedKeys(prev => (prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]));
  };

  useEffect(() => {
    setTreeData(data);
  }, [data]);

  // Обработчик перетаскивания узлов
  const onDrop = (info: TDropEvent) => {
    const dropKey = info.node.key; // Ключ узла, в который осуществляется перетаскивание
    const dragKey = info.dragNode.key; // Ключ перетаскиваемого узла
    const dropPosition = info.dropPosition; // Позиция, в которую узел был сброшен
    const dropToGap = info.dropToGap; // true, если узел был сброшен между другими узлами
    const data = [...treeData];

    const dragNode = findAndRemoveNode(data, dragKey);

    addNodeAtKey(data, dropKey, dragNode, dropPosition, dropToGap);

    setTreeData(data);
    if (onDataAfterDrag) onDataAfterDrag(data);
  };

  const handleCheck = (_: TCheckedKeys, { checked, node }: { checked: boolean; node: TNodeItem }) => {
    const nodeKey = node?.key;
    let updatedKeys: Key[] = [];

    const updateSimpleKeys = (key: Key, isChecked: boolean): Key[] => {
      const allKeys = new Set(keys);
      if (isChecked) {
        allKeys.add(key);
      } else {
        allKeys.delete(key);
      }
      return Array.from(allKeys);
    };

    updatedKeys = checkableSimple
      ? updateSimpleKeys(nodeKey, checked)
      : updateParentKeys(nodeKey, keys, treeData, checked);

    setCheckedKeys(updatedKeys);

    onSelectedNode?.({
      currentKey: nodeKey,
      allSelectedKeys: updatedKeys,
      isChecked: Boolean(updatedKeys.includes(nodeKey))
    });
  };

  const renderSwitcherIcon = (node: TNodeItem) => {
    const isExpanded = expandedKeys.includes(node.key);
    if (node.children && node.children.length > 0) {
      return (
        <span
          onClick={e => {
            e.stopPropagation();
            handleExpand(node.key);
          }}
          className={clsx(styles.switcher, isExpanded && styles.switcherOpen)}
        >
          ▶
        </span>
      );
    }
    return null;
  };

  const renderTitle = (node: TNodeItem) => {
    const hasChildren = Boolean(node.children?.length);

    const childrenState =
      hasChildren && node.children
        ? node.children.reduce(
            (acc, child) => ({
              checkedCount: acc.checkedCount + (keys.includes(child.key) ? 1 : 0),
              total: acc.total + 1
            }),
            { checkedCount: 0, total: 0 }
          )
        : undefined;

    const isMultiple = Boolean(
      hasChildren && childrenState && childrenState.checkedCount > 0 && childrenState.checkedCount < childrenState.total
    );

    const isChecked = keys.includes(node.key) || isMultiple || childrenState?.checkedCount === childrenState?.total;

    return (
      <div
        className={clsx(
          styles.nodeContent,
          dragging === node.key && styles.dragging,
          node.styles?.nodeContentClassName
        )}
        style={{ ...node.styles?.nodeContentStyle }}
        data-checked={isChecked}
      >
        <div className={clsx(styles.nodeTitle, node.styles?.nodeTitleClassName)} style={node.styles?.nodeTitleStyle}>
          {renderSwitcherIcon(node)}
          {(checkable || checkableSimple) && (
            <Checkbox
              checked={isChecked}
              multiple={isMultiple}
              onChange={() => {
                handleCheck(isChecked ? [] : [node.key], {
                  node,
                  checked: !isChecked
                });
              }}
            />
          )}
          <span>
            {typeof node.title === 'function' ? (
              node.title({ key: node.key, title: node.title })
            ) : (
              <Typography color="var(--steel-90)" variant={TITLE_VARIANT_BY_ROW_HEIGHT[rowHeight]}>
                {node.title}
              </Typography>
            )}
          </span>
        </div>
        {node?.rightSideControls && <span>{node.rightSideControls}</span>}
      </div>
    );
  };

  return (
    <div
      className={clsx(styles['custom-rc-tree'], { [styles['not-selectable']]: !selectable })}
      style={{ ['--row-height' as string]: ROW_PX_HEIGHTS[rowHeight] }}
    >
      <Tree<TTreeItem>
        treeData={treeData} // Данные для построения структуры дерева
        draggable={draggable} // Включение функциональности перетаскивания узлов
        onDrop={onDrop} // Функция-обработчик для пересоздания дерева после перетаскивания
        checkedKeys={checkedKeys} // Ключи отмеченных (выбранных) узлов
        titleRender={renderTitle} // Пользовательская функция для рендеринга заголовков узлов
        switcherIcon={() => null} // Отключаем стандартные стрелки
        checkable={false} // Отключение стандартных чекбоксов
        selectable={false} // Отключение возможности выбора узлов
        onDragStart={info => setDragging(String(info.node.key))}
        onDragEnd={() => setDragging(null)}
        expandedKeys={expandedKeys}
      />
    </div>
  );
};
