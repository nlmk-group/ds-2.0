import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { TInputProps } from '../Input/types';

type TOverrideInputProps = {
    value?: string | number;
    onChange?: (value: string | number) => void;
    onBlur?: () => void;
    onFocus?: () => void;
};
interface ISelectSpecificProps {
    portalContainerId?: string;
    children: ReactNode;
    menuWidth?: string;
    withPortal?: boolean;
    onEnterPress?: (item: string | number) => void;
    scrollingItems?: number;
    noOptionsText?: string;
    searchable?: boolean;
    style?: CSSProperties;
}
export type ISelectProps = Omit<TInputProps, keyof TOverrideInputProps> & TOverrideInputProps & ISelectSpecificProps;
export {};
//# sourceMappingURL=types.d.ts.map