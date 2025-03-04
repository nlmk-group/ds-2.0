import { default as React } from '../../../../../node_modules/react';
import { IComboDraggableListProps } from './types';
import { IComboBoxOption } from '../../types';

declare const ComboDraggableList: <T extends IComboBoxOption>({ items, onChange, onReorder, isSearch, isCheckAll, isLoading, isMultiple, isInfinityLoading, infinityLoadingOptions, droppableId }: IComboDraggableListProps<T>) => React.JSX.Element;
export default ComboDraggableList;
//# sourceMappingURL=index.d.ts.map