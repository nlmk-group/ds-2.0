import { default as React } from '../../../../../node_modules/react';
import { IComboGroupListProps } from './types';
import { IComboBoxGroupOption } from '../../types';

declare const ComboGroupList: <T extends IComboBoxGroupOption>({ items, onChange, isSearch, isCheckAll, isLoading, isMultiple, isVirtualize, isInfinityLoading, infinityLoadingOptions }: IComboGroupListProps<T>) => React.JSX.Element;
export default ComboGroupList;
//# sourceMappingURL=index.d.ts.map