export interface IComboDraggableGroupListProps<T> {
    isVirtualize?: boolean;
    isSearch?: boolean;
    isCheckAll?: boolean;
    isLoading?: boolean;
    isMultiple?: boolean;
    isInfinityLoading?: boolean;
    items: T[];
    onChange?: (value: T[]) => void;
    onReorder?: (items: T[]) => void;
    onGroupsReorder?: (items: T[]) => void;
    infinityLoadingOptions?: {
      isStopLoading: boolean;
      nextData: () => void;
      offset: number;
    };
    droppableId: string;
  }