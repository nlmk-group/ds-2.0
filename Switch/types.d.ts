import { MouseEventHandler } from 'react';
export interface ISwitch {
    className?: string;
    checked?: boolean;
    onChange?: MouseEventHandler<HTMLDivElement>;
    disabled?: boolean;
    label?: string;
    activeIcon?: JSX.Element;
    inactiveIcon?: JSX.Element;
}
//# sourceMappingURL=types.d.ts.map