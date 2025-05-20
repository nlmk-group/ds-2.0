import { CSSProperties, ReactNode } from '../../../../../node_modules/react';

export interface IOptionItemProps {
    value: string | number;
    label: string;
    children?: ReactNode;
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    isFocused?: boolean;
    isSelected?: boolean;
    onSelect?: () => void;
}
//# sourceMappingURL=types.d.ts.map