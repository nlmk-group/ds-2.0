import { sizesMapping, variantsMapping } from '../declaration/enums';
import { EChipColors } from './enums';

export type ChipSize = Exclude<`${sizesMapping}`, 'l'>;
export interface IChipProps {
    color?: `${EChipColors}`;
    size?: ChipSize;
    variant?: `${variantsMapping}`;
    label?: string;
    children: string | number;
    suffix?: string;
    className?: string;
}
//# sourceMappingURL=types.d.ts.map