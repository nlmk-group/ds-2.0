import { colorsMapping, customBadgeColors, sizesMapping, variantsMapping } from '@components/declaration/enums';

type TCustomBadgeColors = `${customBadgeColors}`;

export type TBadgeColors = `${colorsMapping}` | TCustomBadgeColors;

export interface IBadgeProps {
  color?: TBadgeColors;
  size?: `${sizesMapping}`;
  variant?: `${variantsMapping}`;
  children?: string;
  className?: string;
}
