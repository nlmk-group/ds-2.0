export interface IComboDraggableListProps<T> {
  isSearch?: boolean;
  isCheckAll?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  isInfinityLoading?: boolean;
  items: T[];
  onChange?: (value: T[]) => void;
  onReorder?: (items: T[]) => void;
  infinityLoadingOptions?: {
    isStopLoading: boolean;
    nextData: () => void;
    offset: number;
  };
  droppableId: string;
}
