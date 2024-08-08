import { sizesMapping, variantsMapping } from '@components/declaration/enums';
import { EChipColors } from '@components/Chip/enums';

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
