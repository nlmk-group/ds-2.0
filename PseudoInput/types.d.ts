import { ReactNode } from '../../../node_modules/react';
import { customInputColors } from '../declaration';

export interface IPseudoInputProps {
    readonly label: JSX.Element | string;
    readonly children: ReactNode;
    readonly size?: 'm' | 's';
    readonly labelColor?: customInputColors;
}
//# sourceMappingURL=types.d.ts.map