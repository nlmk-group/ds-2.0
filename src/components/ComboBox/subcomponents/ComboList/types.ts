import { IComboBoxOption } from '../../types';

export interface IComboListProps<T> {
  isVirtualize?: boolean;
  isSearch?: boolean;
  isCheckAll?: boolean;
  isLoading?: boolean;
  isMultiple?: boolean;
  isInfinityLoading?: boolean;
  isSingleChoiceCheckbox?: boolean;
  items: T[];
  onChange?: (value: IComboBoxOption[]) => void;
  infinityLoadingOptions?: {
    isStopLoading: boolean;
    nextData: () => void;
    offset: number;
  };
}
