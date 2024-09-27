import { ReactNode } from '../../../node_modules/react';

export interface ISwitchProps {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    activeIcon?: ReactNode;
    inactiveIcon?: ReactNode;
}
//# sourceMappingURL=types.d.ts.map