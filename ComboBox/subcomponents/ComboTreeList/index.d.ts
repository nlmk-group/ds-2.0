import { default as React } from '../../../../../node_modules/react';
import { IComboTreeListProps } from './types';
import { IComboBoxTree } from '../../types';

declare const ComboTreeList: <T extends IComboBoxTree>({ items, onChange, maxLevel, isSearch, isCheckAll, isLoading, isMultiple, isVirtualize, checkableSimple }: IComboTreeListProps<T>) => React.JSX.Element;
export default ComboTreeList;
//# sourceMappingURL=index.d.ts.map