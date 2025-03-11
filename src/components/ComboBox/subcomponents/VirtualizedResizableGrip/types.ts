export interface IVirtualizedResizableGripProps<T> {
  isSearch: boolean;
  isCheckAll: boolean;
  items: T[];
  renderItem: (item: T, index: number, array: T[]) => JSX.Element;
  classNameContainer: string;
}
