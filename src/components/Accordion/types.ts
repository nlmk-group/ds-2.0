import { iconsMapping, sizesMapping, variantsMapping } from './enums';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

export type TIcon = `${iconsMapping}`

export interface IAccordionProps {
  items: TAccordionItem[];
  startIcon?: TIcon | null;
  endIcon?: TIcon | null;
  size?: sizesMapping;
  variant?: variantsMapping;
  className?: string;
  multipleExpanded?: boolean;
  disabled?: boolean;
}
