import { IComboBoxGroupOption } from '../../types';

export interface IComboGroupListProps<T> {
    isVirtualize?: boolean;
    isSearch?: boolean;
    isCheckAll?: boolean;
    isLoading?: boolean;
    isMultiple?: boolean;
    isInfinityLoading?: boolean;
    items: T[];
    onChange?: (value: IComboBoxGroupOption[]) => void;
    infinityLoadingOptions?: {
        isStopLoading: boolean;
        nextData: () => void;
        offset: number;
    };
}
//# sourceMappingURL=types.d.ts.map