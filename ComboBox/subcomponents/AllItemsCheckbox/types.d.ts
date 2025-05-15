import { IComboBoxTreeOption } from '../../types';

export interface IAllItemsCheckboxProps<T extends IComboBoxTreeOption> {
    items: T[];
    treeOptions?: T[];
    checkableSimple?: boolean;
    onChange?: (value: T[]) => void;
}
//# sourceMappingURL=types.d.ts.map