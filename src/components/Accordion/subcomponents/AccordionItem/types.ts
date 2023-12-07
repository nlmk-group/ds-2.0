import { iconsMapping, sizesMapping, variantsMapping } from '@components/Accordion/enums';
import { ReactNode } from 'react';

export type TAccordionItem = {
  id: string | number;
  title: string;
  content: ReactNode;
  disabled?: boolean;
  initiallyExpanded?: boolean;
}

export interface IAccordionItemProps extends Omit<TAccordionItem, 'content'> {
  isExpanded: boolean;
  onExpand: (id: TAccordionItem['id']) => void;
  startIcon?: `${iconsMapping}` | null;
  endIcon?: `${iconsMapping}` | null;
  size: `${sizesMapping}`;
  variant: `${variantsMapping}`;
  children: ReactNode;
}