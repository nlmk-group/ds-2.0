import { ReactNode } from '../../../node_modules/react';
import { IBadgeProps } from '../Badge/types';
import { customInputColors } from '../declaration';
import { EPseudoInputSizes } from './enums';

type TBadgeProps = Pick<IBadgeProps, 'color' | 'variant'>;
export interface IPseudoInputProps extends TBadgeProps {
    label: JSX.Element | string;
    children: ReactNode;
    size?: `${EPseudoInputSizes}`;
    labelColor?: customInputColors;
    className?: string;
    suffix?: ReactNode;
    badgeChildren?: string | number;
    fullWidth?: boolean;
}
export {};
//# sourceMappingURL=types.d.ts.map