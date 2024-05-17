import { ChangeEvent, PropsWithChildren, ReactNode } from 'react';
import { sizesMapping } from '../declaration';
import { fileTypeMapping, statusColorMapping } from './enums';
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
export type TFileType = `${fileTypeMapping}`;
export type TStatusColorType = `${statusColorMapping}`;
export type TSizeType = `${sizesMapping}`;
export interface IDragAndDrop extends PropsWithChildren<{
    children?: ReactNode;
}> {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    btnLabel?: string;
    fileType?: TFileType;
    statusColor?: TStatusColorType;
    withIcon?: boolean;
    customIcon?: JSX.Element;
    size?: TSizeType;
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
export interface IUploadHelper {
    smallText?: boolean;
    smallIcon?: boolean;
    showSpinner?: boolean;
    size: TSizeType;
    percentUpload: number;
}
export interface ISmallText {
    title: string | ReactNode;
    loading: boolean;
    percentUpload: number;
    statusColor: TStatusColorType;
    disabled: boolean;
    cancelUpload?: () => void;
}
export interface IDefaultDnD {
    disabled: boolean;
    loading: boolean;
    size: TSizeType;
    percentUpload: number;
    withIcon: boolean;
    customIcon: JSX.Element | null;
    fileType: TFileType;
    title: string | ReactNode;
    statusColor: TStatusColorType;
    description: string | ReactNode;
    btnLabel: string;
}
export interface ISmallIcon {
    loading: boolean;
    percentUpload: number;
    statusColor: TStatusColorType;
    customIcon: JSX.Element | null;
}
//# sourceMappingURL=types.d.ts.map