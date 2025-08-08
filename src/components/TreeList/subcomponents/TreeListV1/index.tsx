import React, { Key, useEffect, useState } from 'react';

import Checkbox from '@components/Checkbox';
import Typography from '@components/Typography';
import clsx from 'clsx';
import { isArray } from 'lodash';
import Tree from 'rc-tree';
import 'rc-tree/assets/index.css';

import styles from './TreeListV1.module.scss';

import { ROW_PX_HEIGHTS, TITLE_VARIANT_BY_ROW_HEIGHT } from '../../constants';
import { ERowHeight, TCheckedKeys, TDragEvent, TDropEvent, TNodeItem, TTreeListProps } from '../../types';
import { addNodeAtKey, findAndRemoveNode, getNodeLevel, updateParentKeys } from './utils';

export const TreeListV1 = ({
  data,
  draggable,
  checkable,
  checkableSimple,
  onSelectedNode,
  onDataAfterDrag,
  onDragStart,
  onDragEnd,
  onDrop,
  sameLevelDragOnly = false,
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

  const handleDrop = (info: any) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const rawDropPosition = info.dropPosition;
    const dropToGap = info.dropToGap;

    let relativeDropPosition: number;

    if (dropToGap) {
      const posArr = String(info.node.pos || '').split('-');
      const nodeIndex = Number(posArr[posArr.length - 1]) || 0;
      relativeDropPosition = rawDropPosition <= nodeIndex ? -1 : 1;
    } else {
      relativeDropPosition = 0;
    }

    let actualDropKey = dropKey;
    let actualDropToGap = dropToGap;

    if (dropToGap === false) {
      const findNodeByKey = (nodes: TNodeItem[], key: string): TNodeItem | null => {
        for (const node of nodes) {
          if (node.key === key) return node;
          if (node.children) {
            const found = findNodeByKey(node.children, key);
            if (found) return found;
          }
        }
        return null;
      };

      const parentNode = findNodeByKey(treeData, dropKey);

      if (parentNode?.children && parentNode.children.length > 0) {
        actualDropKey = parentNode.children[0].key;
        actualDropToGap = true;
        relativeDropPosition = -1;
      }
    }

    if (onDrop) {
      const dropEvent: TDropEvent = {
        ...info,
        dragNode: info.dragNode,
        dragNodesKeys: info.dragNodesKeys || [dragKey],
        dropPosition: relativeDropPosition,
        dropToGap: actualDropToGap
      };
      onDrop(dropEvent);
    }

    const data = [...treeData];

    const findSiblingIndex = (
      nodes: TNodeItem[],
      dragKey: Key,
      targetKey: Key
    ): { dragIndex: number; targetIndex: number; parent: TNodeItem[] } | null => {
      for (const node of nodes) {
        if (node.children) {
          const dragIdx = node.children.findIndex(child => child.key === dragKey);
          const targetIdx = node.children.findIndex(child => child.key === targetKey);

          if (dragIdx !== -1 && targetIdx !== -1) {
            return { dragIndex: dragIdx, targetIndex: targetIdx, parent: node.children };
          }

          const result = findSiblingIndex(node.children, dragKey, targetKey);
          if (result) return result;
        }
      }
      return null;
    };

    let siblingInfo = findSiblingIndex(data, dragKey, actualDropKey);

    if (!siblingInfo) {
      const findChildInParent = (
        nodes: TNodeItem[],
        parentKey: Key,
        dragKey: Key
      ): { dragIndex: number; parent: TNodeItem[] } | null => {
        for (const node of nodes) {
          if (node.key === parentKey && node.children) {
            const dragIdx = node.children.findIndex(child => child.key === dragKey);
            if (dragIdx !== -1) {
              return { dragIndex: dragIdx, parent: node.children };
            }
          }
          if (node.children) {
            const result = findChildInParent(node.children, parentKey, dragKey);
            if (result) return result;
          }
        }
        return null;
      };

      const parentInfo = findChildInParent(data, actualDropKey, dragKey);
      if (parentInfo) {
        siblingInfo = {
          dragIndex: parentInfo.dragIndex,
          targetIndex: 0, // всегда на первое место
          parent: parentInfo.parent
        };
      } else if (actualDropKey !== dropKey) {
        const findParentAndSibling = (
          nodes: TNodeItem[],
          childKey: Key,
          dragKey: Key
        ): { dragIndex: number; parent: TNodeItem[] } | null => {
          for (const node of nodes) {
            if (node.children) {
              const childExists = node.children.some(child => child.key === childKey);
              if (childExists) {
                const dragIdx = node.children.findIndex(child => child.key === dragKey);
                if (dragIdx !== -1) {
                  return { dragIndex: dragIdx, parent: node.children };
                }
              }
              const result = findParentAndSibling(node.children, childKey, dragKey);
              if (result) return result;
            }
          }
          return null;
        };

        const redirectInfo = findParentAndSibling(data, actualDropKey, dragKey);
        if (redirectInfo) {
          siblingInfo = {
            dragIndex: redirectInfo.dragIndex,
            targetIndex: 0,
            parent: redirectInfo.parent
          };
        }
      }
    }

    const dragNode = findAndRemoveNode(data, dragKey);

    const originalDragIndex = siblingInfo?.dragIndex ?? -1;
    addNodeAtKey(data, actualDropKey, dragNode, relativeDropPosition, actualDropToGap, originalDragIndex);

    setTreeData(data);
    if (onDataAfterDrag) onDataAfterDrag(data);
  };

  const handleDragStart = (event: TDragEvent) => {
    setDragging(String(event.node.key));
    onDragStart && onDragStart(event);
  };

  const handleDragEnd = (event: TDragEvent) => {
    setDragging(null);
    onDragEnd && onDragEnd(event);
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
          className={clsx(styles.switcher, isExpanded && styles['switcher-open'])}
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

    let isMultiple: boolean, isChecked: boolean;

    if (checkableSimple) {
      // В простом режиме - нет multiple и чекбокс отмечен только если его ключ в списке
      isMultiple = false;
      isChecked = keys.includes(node.key);
    } else {
      isMultiple = Boolean(
        hasChildren &&
          childrenState &&
          childrenState.checkedCount > 0 &&
          childrenState.checkedCount < childrenState.total
      );

      isChecked =
        Boolean(keys.includes(node.key)) ||
        Boolean(isMultiple) ||
        Boolean(childrenState && childrenState.checkedCount === childrenState.total && childrenState.total > 0);
    }

    return (
      <div
        className={clsx(
          styles['node-content'],
          dragging === node.key && styles.dragging,
          node.disabled && styles['node-disabled'],
          node.styles?.nodeContentClassName
        )}
        style={{ ...node.styles?.nodeContentStyle }}
        data-checked={isChecked}
        data-disabled={node.disabled}
        data-disable-draggable={node.disableDraggable}
      >
        <div
          className={clsx(styles['node-title'], node.styles?.nodeTitleClassName)}
          style={node.styles?.nodeTitleStyle}
        >
          {node.icon ? (
            <span
              className={styles['custom-icon']}
              onClick={e => {
                if (node.children && node.children.length > 0) {
                  e.stopPropagation();
                  handleExpand(node.key);
                }
              }}
              style={{
                cursor: node.children && node.children.length > 0 ? 'pointer' : 'default'
              }}
            >
              {node.icon}
            </span>
          ) : (
            renderSwitcherIcon(node)
          )}
          {(checkable || checkableSimple) && (
            <Checkbox
              checked={isChecked}
              multiple={isMultiple}
              disabled={node.disabled}
              onChange={() => {
                if (node.disabled) return;
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
              <Typography color={'var(--steel-90)'} variant={TITLE_VARIANT_BY_ROW_HEIGHT[rowHeight]}>
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
      className={clsx(styles['custom-rc-tree'], {
        [styles['not-selectable']]: !selectable,
        [styles['is-dragging']]: dragging !== null
      })}
      style={{ ['--row-height' as string]: ROW_PX_HEIGHTS[rowHeight] }}
    >
      <Tree<TNodeItem>
        treeData={treeData}
        draggable={
          draggable
            ? (node: any) => {
                const nodeData = node as TNodeItem;
                return !nodeData.disabled && !nodeData.disableDraggable;
              }
            : false
        }
        onDrop={handleDrop}
        checkedKeys={checkedKeys}
        titleRender={renderTitle}
        switcherIcon={() => null}
        checkable={false}
        selectable={false}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        expandedKeys={expandedKeys}
        allowDrop={({ dragNode, dropNode, dropPosition }) => {
          const dropNodeData = dropNode as any as TNodeItem;

          if (dropNodeData.disabled) {
            return false;
          }

          if (sameLevelDragOnly) {
            const dragNodeData = dragNode as any as TNodeItem;

            const dragLevel = getNodeLevel(dragNodeData.key, treeData);
            const dropLevel = getNodeLevel(dropNodeData.key, treeData);

            if (dropPosition === 0) {
              if (!dropNodeData.children || dropNodeData.children.length === 0) {
                return false;
              }

              const firstChildLevel = dropLevel + 1;
              return dragLevel === firstChildLevel;
            }

            return dragLevel === dropLevel;
          }

          return true;
        }}
      />
    </div>
  );
};
