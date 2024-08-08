import { sizesMapping } from '@components/Accordion/enums';
import { ETypographyVariants } from '@components/Typography/enums';

export const TYPOGRAPHY_TITLE_VARIANTS: Record<sizesMapping, ETypographyVariants> = {
  [sizesMapping.xs]: ETypographyVariants['Body-Medium'],
  [sizesMapping.s]: ETypographyVariants['Subheading3-Medium'],
  [sizesMapping.m]: ETypographyVariants['Subheading3-Medium']
};
export const TYPOGRAPHY_CONTENT_VARIANTS: Record<sizesMapping, ETypographyVariants> = {
  [sizesMapping.xs]: ETypographyVariants.Body1,
  [sizesMapping.s]: ETypographyVariants.Body,
  [sizesMapping.m]: ETypographyVariants.Body
};
