import { IComboBoxTreeOption } from '../../types';

export interface IAllItemsCheckboxProps<T extends IComboBoxTreeOption> {
    items: T[];
    treeOptions?: T[];
    onChange?: (value: T[]) => void;
}
//# sourceMappingURL=types.d.ts.map