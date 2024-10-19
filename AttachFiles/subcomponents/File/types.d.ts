import { ChangeEvent } from '../../../../../node_modules/react';

export interface IFileProps {
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
    tick?: boolean;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map