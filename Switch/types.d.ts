import { CSSProperties, ReactNode } from '../../../node_modules/react';
import { ESwitchColors } from './enums';

export interface ISwitchProps {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
    color?: `${ESwitchColors}`;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map