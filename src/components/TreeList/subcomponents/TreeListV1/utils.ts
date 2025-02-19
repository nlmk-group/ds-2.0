import { TNodeItem, TTreeItem } from '@components/TreeList/types';
import { Key } from 'rc-tree/lib/interface';

export const findAndRemoveNode = (nodes: TTreeItem[] | undefined, key: Key): TTreeItem | undefined => {
  for (let i = 0; i < (nodes?.length || 0); i++) {
    if (nodes?.[i].key === key) {
      return nodes.splice(i, 1)[0];
    }
    if (nodes?.[i].children) {
      const removedNode: TTreeItem | undefined = findAndRemoveNode(nodes[i].children, key);
      if (removedNode) return removedNode;
    }
  }
};

export const addNodeAtKey = (
  nodes: TTreeItem[] | undefined,
  key: Key,
  node: TTreeItem | undefined,
  position: number,
  toGap: boolean
) => {
  for (let i = 0; i < (nodes?.length || 0); i++) {
    if (nodes?.[i].key === key && node) {
      if (toGap) {
        nodes.splice(position > 1 ? i + 1 : i, 0, node);
      } else {
        nodes[i].children = nodes[i].children || [];
        nodes[i]?.children?.push(node);
      }
      break;
    }
    if (nodes?.[i].children) {
      addNodeAtKey(nodes[i].children, key, node, position, toGap);
    }
  }
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
export const updateParentKeys = (key: Key, checkedKeys: Key[], treeData: TTreeItem[], checked: boolean): Key[] => {
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

    const checkedStates = node.children.map(child => allKeys.has(child.key));

    if (checkedStates.every(state => state)) return true;
    if (checkedStates.every(state => !state)) return false;
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
      allKeys.add(parentNode.key); // Если все дочерние элементы выбраны, родитель становится выбранным
    } else if (childrenCheckState === false) {
      allKeys.delete(parentNode.key); // Если ни один дочерний элемент не выбран, родитель становится снятым
    }
  });

  return Array.from(allKeys); // Возвращаем массив ключей
};
