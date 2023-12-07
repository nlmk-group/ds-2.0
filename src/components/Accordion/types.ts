import { iconsMapping, sizesMapping, variantsMapping } from './enums';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

export interface IAccordionProps {
  items: TAccordionItem[];
  startIcon?: iconsMapping | null;
  endIcon?: iconsMapping | null;
  size?: sizesMapping;
  variant?: variantsMapping;
  className?: string;
  multipleExpanded?: boolean;
  disabled?: boolean;
}
