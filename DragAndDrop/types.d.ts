import { ChangeEvent, MouseEvent, PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { sizesMapping } from '../declaration';
import { EFileTypeDnD, EStatusColorDnD } from './enums';

export interface IFileProps extends PropsWithChildren<any> {
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
export interface IDragAndDropProps extends PropsWithChildren<{
    children?: ReactNode;
}> {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    btnLabel?: string;
    fileType?: `${EFileTypeDnD}`;
    statusColor?: `${EStatusColorDnD}`;
    withIcon?: boolean;
    customIcon?: JSX.Element;
    size?: `${sizesMapping}`;
    multiple?: boolean;
    loading?: boolean;
    percentUpload?: number;
    smallText?: boolean;
    smallIcon?: boolean;
    disabled?: boolean;
    accept?: string;
    onUpload: (a: FileList) => void;
    cancelUpload?: () => void;
}
export interface IUploadHelperProps {
    smallText?: boolean;
    smallIcon?: boolean;
    showSpinner?: boolean;
    size: `${sizesMapping}`;
    percentUpload?: number | undefined;
}
export interface ISmallTextProps {
    title: string | ReactNode;
    loading: boolean;
    percentUpload: number;
    statusColor: `${EStatusColorDnD}`;
    disabled: boolean;
    cancelUpload?: () => void;
}
export interface IDefaultDnDProps {
    disabled: boolean;
    loading: boolean;
    size: `${sizesMapping}`;
    percentUpload: number;
    withIcon: boolean;
    customIcon: JSX.Element | null;
    fileType: `${EFileTypeDnD}`;
    title: string | ReactNode;
    statusColor: `${EStatusColorDnD}`;
    description: string | ReactNode;
    btnLabel: string;
    onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export interface ISmallIconProps {
    loading: boolean;
    percentUpload: number;
    statusColor: `${EStatusColorDnD}`;
    customIcon: JSX.Element | null;
}
//# sourceMappingURL=types.d.ts.map