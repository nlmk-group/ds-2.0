import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from './enums';
import { TAccordionItem } from './subcomponents/AccordionItem/types';

export interface IAccordionProps {
  items: TAccordionItem[];
  startIcon?: `${EIconsAccordion}`;
  endIcon?: `${EIconsAccordion}`;
  size?: `${ESizesAccordion}`;
  variant?: `${EVariantsAccordion}`;
  className?: string;
  multipleExpanded?: boolean;
  disabled?: boolean;
}
