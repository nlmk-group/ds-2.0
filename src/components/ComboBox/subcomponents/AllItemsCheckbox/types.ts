import { IComboBoxTreeOption } from '@components/ComboBox/types';

export interface IAllItemsCheckboxProps<T extends IComboBoxTreeOption> {
  items: T[];
  treeOptions?: T[];
  onChange?: (value: T[]) => void;
}
