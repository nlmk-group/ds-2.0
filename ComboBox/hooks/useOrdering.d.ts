import { IComboBoxGroupOption, IComboBoxOption, IdToOrderMap, IGroupedItem } from '../types';

export declare const compareSortIndexes: ({ nextIndex, currentIndex }: {
    nextIndex: number | undefined;
    currentIndex: number | undefined;
}) => number;
export declare const useOrderedItems: <T extends IComboBoxOption>(items: T[], ordering: IdToOrderMap, setOrdering: (value: IdToOrderMap) => void) => {
    orderedItems: T[];
    reorder: (items: T[]) => void;
};
export declare const useDependOrdering: ({ parentOrdering, items, itemsOrdering, setOrdering, isDisabled }: {
    parentOrdering: IdToOrderMap;
    itemsOrdering: IdToOrderMap;
    items: IComboBoxGroupOption[];
    setOrdering: (newValue: IdToOrderMap) => void;
    isDisabled: boolean;
}) => {
    orderedItems: IComboBoxGroupOption[];
    reorder: (items: IComboBoxGroupOption[]) => void;
};
export declare const useGroupsDependOrdering: ({ items, itemsOrdering, groupsOrdering, setOrdering, setGroupsOrdering }: {
    itemsOrdering: IdToOrderMap;
    items: IComboBoxGroupOption[];
    groupsOrdering: IdToOrderMap;
    setOrdering: (newValue: IdToOrderMap) => void;
    setGroupsOrdering: (newValue: IdToOrderMap) => void;
    isDisabled: boolean;
}) => {
    orderedGroupedItems: IGroupedItem[];
    reorder: (items: IComboBoxGroupOption[]) => void;
    groupsReorder: (items: IGroupedItem[]) => void;
};
//# sourceMappingURL=useOrdering.d.ts.map