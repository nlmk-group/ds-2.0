import { ReactNode } from '../../../node_modules/react';
import { customInputColors } from '../declaration';

export interface IPseudoInputProps {
    label: JSX.Element | string;
    children: ReactNode;
    size?: 'm' | 's';
    labelColor?: customInputColors;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map