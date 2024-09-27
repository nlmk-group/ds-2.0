import { ESizesAccordion } from '@components/Accordion/enums';
import { ETypographyVariants } from '@components/Typography/enums';

export const TYPOGRAPHY_TITLE_VARIANTS: Record<ESizesAccordion, ETypographyVariants> = {
  [ESizesAccordion.xs]: ETypographyVariants['Body-Medium'],
  [ESizesAccordion.s]: ETypographyVariants['Subheading3-Medium'],
  [ESizesAccordion.m]: ETypographyVariants['Subheading3-Medium']
};
export const TYPOGRAPHY_CONTENT_VARIANTS: Record<ESizesAccordion, ETypographyVariants> = {
  [ESizesAccordion.xs]: ETypographyVariants.Body1,
  [ESizesAccordion.s]: ETypographyVariants.Body,
  [ESizesAccordion.m]: ETypographyVariants.Body
};
