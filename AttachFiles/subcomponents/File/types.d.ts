import { ChangeEvent, PropsWithChildren } from 'react';
export interface IFile extends PropsWithChildren<any> {
    children?: JSX.Element;
    title?: string;
    label?: string;
    checked?: boolean;
    removed?: boolean;
    commented?: boolean;
    saved?: boolean;
    addFile?: boolean;
    onCheckedChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    removedOnClick?: () => void;
    commentedOnClick?: () => void;
    savedOnClick?: () => void;
    addFileOnClick?: () => void;
    description?: string;
    empty?: boolean;
    checkedValue?: boolean;
    indeterminate?: boolean;
    longTitle?: boolean;
    tick?: boolean;
}
//# sourceMappingURL=types.d.ts.map