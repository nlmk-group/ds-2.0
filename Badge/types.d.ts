import { variantsMapping } from '../declaration/enums';
import { EBadgeColors, EBadgeSizes } from './enums';

export interface IBadgeProps {
    color?: `${EBadgeColors}`;
    size?: `${EBadgeSizes}`;
    variant?: `${variantsMapping}`;
    children?: string | number;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map