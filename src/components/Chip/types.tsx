import { colorsMapping, customChipColors, sizesMapping, variantsMapping } from '@components/declaration/enums';

export type ChipColor = Exclude<`${colorsMapping}`, `${customChipColors}`>;
export type ChipSize = Exclude<`${sizesMapping}`, 'l'>;
export type ChipVariant = `${variantsMapping}`;

export interface IChipProps {
  color?: ChipColor;
  size?: ChipSize;
  label?: string;
  children: string;
  suffix?: string;
  className?: string;
  variant?: ChipVariant;
}
