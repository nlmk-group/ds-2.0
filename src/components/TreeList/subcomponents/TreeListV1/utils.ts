import { TNodeItem } from '@components/TreeList/types';
import { Key } from 'rc-tree/lib/interface';

export const findAndRemoveNode = (nodes: TNodeItem[] | undefined, key: Key): TNodeItem | undefined => {
  for (let i = 0; i < (nodes?.length || 0); i++) {
    if (nodes?.[i].key === key) {
      return nodes.splice(i, 1)[0];
    }
    if (nodes?.[i].children) {
      const removedNode: TNodeItem | undefined = findAndRemoveNode(nodes[i].children, key);
      if (removedNode) return removedNode;
    }
  }
};

export const addNodeAtKey = (
  nodes: TNodeItem[] | undefined,
  key: Key,
  node: TNodeItem | undefined,
  position: number,
  toGap: boolean,
  originalDragIndex?: number
) => {
  if (!nodes || !node) return false;

  const findNodeParent = (nodesList: TNodeItem[], targetKey: Key): { parent: TNodeItem[]; index: number } | null => {
    for (let i = 0; i < nodesList.length; i++) {
      if (nodesList[i].key === targetKey) {
        return { parent: nodesList, index: i };
      }
      if (nodesList[i].children) {
        const result = findNodeParent(nodesList[i].children!, targetKey);
        if (result) return result;
      }
    }
    return null;
  };

  const target = findNodeParent(nodes, key);
  if (!target) return false;

  if (toGap) {
    const currentTargetIndex = target.parent.findIndex(n => n.key === key);

    let adjustedTargetIndex = currentTargetIndex;
    if (originalDragIndex !== undefined && originalDragIndex < currentTargetIndex + 1) {
      adjustedTargetIndex = currentTargetIndex; // уже сдвинутый
    }

    const insertIndex = position === -1 ? adjustedTargetIndex : adjustedTargetIndex + 1;
    target.parent.splice(insertIndex, 0, node);
  } else {
    target.parent[target.index].children = target.parent[target.index].children || [];
    target.parent[target.index].children!.push(node);
  }

  return true;
};

/**
 * Обновляет состояние для родительских узлов и дочерних элементов, основываясь на состоянии.
 * Если все дочерние узлы выбраны - родитель становится выбранным.
 * Если ни один дочерний узел не выбран - родитель становится снятым.
 * Если родитель выбран - все его дочерние элементы становятся выбранными.
 * Если родитель снят - все его дочерние элементы становятся снятыми.
 *
 * @param key - Ключ измененного узла.
 * @param checkedKeys - Текущий список отмеченных ключей.
 * @param treeData - Дерево узлов.
 * @param checked - Флаг, указывающий, выбран текущий узел или снят.
 * @returns Массив с обновленным списком отмеченных ключей.
 */
export const updateParentKeys = (key: Key, checkedKeys: Key[], treeData: TNodeItem[], checked: boolean): Key[] => {
  const allKeys = new Set(checkedKeys); // Используем Set для удобства модификации

  /**
   * Найти узел по ключу в дереве.
   * @param key - Ключ узла.
   * @param nodes - Массив узлов.
   * @returns Найденный узел или null, если узел не найден.
   */
  const findNodeByKey = (key: Key, nodes: TNodeItem[]): TNodeItem | null => {
    for (const node of nodes) {
      if (node.key === key) return node;
      if (node.children) {
        const found = findNodeByKey(key, node.children);
        if (found) return found;
      }
    }
    return null;
  };

  /**
   * Рекурсивная функция для добавления/удаления всех дочерних узлов.
   * @param node - Узел, для которого обновляются потомки.
   * @param add - Если true, узел добавляется, иначе удаляется.
   */
  const updateDescendants = (node: TNodeItem, add: boolean) => {
    if (add) {
      allKeys.add(node.key);
    } else {
      allKeys.delete(node.key);
    }
    if (node.children) {
      node.children.forEach(child => updateDescendants(child, add));
    }
  };

  /**
   * Проверить состояние дочерних узлов.
   * @param node - Узел, для которого проверяются дочерние элементы.
   * @returns true, если все дочерние узлы выбраны.
   *          false, если все дочерние узлы не выбраны.
   *          null, если дочерние узлы частично выбраны.
   */
  const getChildrenCheckState = (node: TNodeItem): boolean | null => {
    if (!node.children || node.children.length === 0) return null;

    const childStates = node.children.map(child => {
      const isDirectlyChecked = allKeys.has(child.key);
      const childrenState = getChildrenCheckState(child);

      if (isDirectlyChecked || childrenState === true) return true;

      if (childrenState === null) return null;

      return false;
    });

    if (childStates.every(state => state === true)) return true;

    if (childStates.every(state => state === false)) return false;

    return null;
  };

  /**
   * Сбор всех родительских ключей до корня.
   * @param key - Ключ текущего узла.
   * @param nodes - Массив узлов для поиска.
   * @param parentKeys - Собранные ключи родителей.
   * @returns Массив ключей родительских узлов.
   */
  const getParentKeyChain = (key: Key, nodes: TNodeItem[], parentKeys: Key[] = []): Key[] => {
    for (const node of nodes) {
      if (node.key === key) {
        return parentKeys;
      }
      if (node.children) {
        const result = getParentKeyChain(key, node.children, [...parentKeys, node.key]);
        if (result.length > 0) return result;
      }
    }
    return [];
  };

  // 1. Обновить потомки текущего узла
  const currentNode = findNodeByKey(key, treeData);
  if (currentNode) {
    updateDescendants(currentNode, checked);
  }

  // 2. Собрать все родительские ключи и обновить их
  const parentKeys = getParentKeyChain(key, treeData);

  parentKeys.forEach(parentKey => {
    const parentNode = findNodeByKey(parentKey, treeData);
    if (!parentNode) return;

    const childrenCheckState = getChildrenCheckState(parentNode);

    if (childrenCheckState === true) {
      allKeys.add(parentNode.key);
    } else if (childrenCheckState === false) {
      allKeys.delete(parentNode.key);
    } else if (childrenCheckState === null) {
      allKeys.delete(parentNode.key);
    }
  });

  return Array.from(allKeys); // Возвращаем массив ключей
};

export const getNodeLevel = (key: Key, nodes: TNodeItem[], currentLevel = 0): number => {
  for (const node of nodes) {
    if (node.key === key) {
      return currentLevel;
    }
    if (node.children) {
      const result = getNodeLevel(key, node.children, currentLevel + 1);
      if (result !== -1) return result;
    }
  }
  return -1;
};

export const getNodeParent = (key: Key, nodes: TNodeItem[]): TNodeItem | null => {
  for (const node of nodes) {
    if (node.children) {
      for (const child of node.children) {
        if (child.key === key) {
          return node;
        }
      }
      const result = getNodeParent(key, node.children);
      if (result) return result;
    }
  }
  return null;
};
