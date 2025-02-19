import { TTreeItem } from '../../types';
import { Key } from 'rc-tree/lib/interface';

export declare const findAndRemoveNode: (nodes: TTreeItem[] | undefined, key: Key) => TTreeItem | undefined;
export declare const addNodeAtKey: (nodes: TTreeItem[] | undefined, key: Key, node: TTreeItem | undefined, position: number, toGap: boolean) => void;
export declare const updateParentKeys: (key: Key, checkedKeys: Key[], treeData: TTreeItem[], checked: boolean) => Key[];
//# sourceMappingURL=utils.d.ts.map