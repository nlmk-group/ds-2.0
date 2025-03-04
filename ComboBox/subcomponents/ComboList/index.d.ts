import { default as React } from '../../../../../node_modules/react';
import { IComboListProps } from './types';
import { IComboBoxOption } from '../../types';

declare const ComboList: <T extends IComboBoxOption>({ items, onChange, isSearch, isCheckAll, isLoading, isVirtualize, isMultiple, isInfinityLoading, isSingleChoiceCheckbox, infinityLoadingOptions }: IComboListProps<T>) => React.JSX.Element;
export default ComboList;
//# sourceMappingURL=index.d.ts.map