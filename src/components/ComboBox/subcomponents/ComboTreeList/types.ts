import { IComboBoxTreeOption } from '../../types';

export interface IComboTreeListProps<T> {
  isVirtualize?: boolean;
  isSearch?: boolean;
  isCheckAll?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  maxLevel?: number;
  items: T[];
  onChange?: (value: IComboBoxTreeOption[]) => void;
}
