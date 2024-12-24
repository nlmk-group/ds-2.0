import { EFilterTipSize } from './enums';

export interface IFilterTipProps {
    id?: string;
    text?: string;
    isDisabled?: boolean;
    onDelete?: (id: string) => void;
    isWithoutCancelIcon?: boolean;
    isActive?: boolean;
    onClick?: (id: string) => void;
    size?: `${EFilterTipSize}`;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map