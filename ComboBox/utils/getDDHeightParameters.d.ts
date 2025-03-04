import { IComboBoxOption } from '../types';

declare const getDDHeightParameters: <T extends IComboBoxOption>(items: T[], isSearch?: boolean, isCheckAll?: boolean, isMultiple?: boolean, hasChildren?: boolean) => {
    optimalHeight: number;
    minHeight: number;
};
export default getDDHeightParameters;
//# sourceMappingURL=getDDHeightParameters.d.ts.map