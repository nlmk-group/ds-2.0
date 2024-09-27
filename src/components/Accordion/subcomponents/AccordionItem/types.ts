import { ReactNode } from 'react';

import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '@components/Accordion/enums';

export type TAccordionItem = {
  id: string | number;
  title: string;
  content: ReactNode;
  disabled?: boolean;
  initiallyExpanded?: boolean;
};

export interface IAccordionItemProps extends Omit<TAccordionItem, 'content'> {
  isExpanded: boolean;
  onExpand: (id: TAccordionItem['id']) => void;
  startIcon?: `${EIconsAccordion}` | null;
  endIcon?: `${EIconsAccordion}` | null;
  size: `${ESizesAccordion}`;
  variant: `${EVariantsAccordion}`;
  children: ReactNode;
  className?: string;
}
