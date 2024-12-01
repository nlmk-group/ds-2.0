import { CSSProperties } from '../../../node_modules/react';
import { variantsMapping } from '../declaration/enums';
import { EBadgeColors, EBadgeSizes } from './enums';

export interface IBadgeProps {
    color?: `${EBadgeColors}`;
    size?: `${EBadgeSizes}`;
    variant?: `${variantsMapping}`;
    children?: string | number;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map