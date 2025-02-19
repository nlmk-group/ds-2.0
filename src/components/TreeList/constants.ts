import { ETypographyVariants } from '@components/Typography/enums';

import { ERowHeight } from './types';

export const ROW_PX_HEIGHTS = {
  [ERowHeight.m]: '48px',
  [ERowHeight.s]: '40px',
  [ERowHeight.xs]: '32px'
};

export const TITLE_VARIANT_BY_ROW_HEIGHT = {
  [ERowHeight.m]: ETypographyVariants.Heading3,
  [ERowHeight.s]: ETypographyVariants.Heading4,
  [ERowHeight.xs]: ETypographyVariants['Body1-Medium']
};
