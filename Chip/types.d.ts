import { CSSProperties } from '../../../node_modules/react';
import { EChipColors } from './enums';
import { sizesMapping, variantsMapping } from '../declaration/enums';

export type TChipSize = Exclude<`${sizesMapping}`, 'l'>;
export interface IChipProps {
    color?: `${EChipColors}`;
    size?: TChipSize;
    variant?: `${variantsMapping}`;
    label?: string;
    children: string | number;
    suffix?: string;
    className?: string;
    style?: CSSProperties;
}
//# sourceMappingURL=types.d.ts.map