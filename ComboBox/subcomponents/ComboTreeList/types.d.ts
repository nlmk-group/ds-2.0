import { IComboBoxTreeOption } from '../../types';

export interface IComboTreeListProps<T> {
    isVirtualize?: boolean;
    isSearch?: boolean;
    isCheckAll?: boolean;
    isLoading?: boolean;
    isMultiple?: boolean;
    maxLevel?: number;
    items: T[];
    checkableSimple?: boolean;
    onChange?: (value: IComboBoxTreeOption[]) => void;
}
//# sourceMappingURL=types.d.ts.map