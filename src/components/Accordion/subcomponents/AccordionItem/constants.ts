import { sizesMapping } from '@components/Accordion/enums';
import { TVariant } from '@components/Typography/types';

export const ICON_SIZE = 16;

export const TYPOGRAPHY_TITLE_VARIANTS: Record<sizesMapping, TVariant> = {
  [sizesMapping.xs]: 'Body-Medium (18)',
  [sizesMapping.s]: 'Subheading3-Medium',
  [sizesMapping.m]: 'Subheading3-Medium'
};
export const TYPOGRAPHY_CONTENT_VARIANTS: Record<sizesMapping, TVariant> = {
  [sizesMapping.xs]: 'Body1 (16)',
  [sizesMapping.s]: 'Body (18)',
  [sizesMapping.m]: 'Body (18)'
};
