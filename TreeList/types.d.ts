import { CSSProperties } from '../../../node_modules/react';
import { NodeDragEventParams } from 'rc-tree/lib/contextTypes';
import { DataNode, EventDataNode, Key } from 'rc-tree/lib/interface';

export type TTreeItem<R extends object = object> = R & DataNode;
export type TСhildrenProps = {
    rightSideControls?: JSX.Element;
    id?: number | string;
    parentId?: number | string;
    children?: TNodeItem[];
    blockedControlsReason?: string;
    styles?: {
        nodeContentClassName?: string;
        nodeContentStyle?: CSSProperties;
        nodeTitleClassName?: string;
        nodeTitleStyle?: CSSProperties;
    };
};
export type TNodeItem = TTreeItem<TСhildrenProps>;
export type TCheckedKeys = Key[] | {
    checked: Key[];
    halfChecked: Key[];
};
export type TDragEvent = NodeDragEventParams<DataNode>;
export type TDropEvent = NodeDragEventParams<TNodeItem> & {
    dragNode: EventDataNode<TTreeItem>;
    dragNodesKeys: Key[];
    dropPosition: number;
    dropToGap: boolean;
};
export type TSelectedNodeEvent = {
    currentKey?: Key;
    allSelectedKeys?: TCheckedKeys;
    isChecked?: boolean;
};
export declare const enum ERowHeight {
    m = "m",
    s = "s",
    xs = "xs"
}
export type TTreeListProps = {
    data: TNodeItem[];
    onSelectedNode?: (e: TSelectedNodeEvent) => void;
    onDataAfterDrag?: (e: TNodeItem[]) => void;
    onDragStart?: (e: TDragEvent) => void;
    onDragEnd?: (e: TDragEvent) => void;
    checkable?: boolean;
    draggable?: boolean;
    checkableSimple?: boolean;
    rowHeight?: `${ERowHeight}`;
    initialCheckedKeys?: Key[];
    initialExpandedKeys?: Key[];
};
//# sourceMappingURL=types.d.ts.map