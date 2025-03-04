import { default as React } from '../../../../../node_modules/react';
import { IComboDraggableGroupListProps } from './types';
import { IGroupDraggableOption } from '../../types';

declare const ComboDraggableGroupList: <T extends IGroupDraggableOption>({ items, onChange, onReorder, onGroupsReorder, isSearch, isCheckAll, isLoading, isMultiple, isVirtualize, isInfinityLoading, infinityLoadingOptions, droppableId }: IComboDraggableGroupListProps<T>) => React.JSX.Element;
export default ComboDraggableGroupList;
//# sourceMappingURL=index.d.ts.map