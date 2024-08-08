import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

import { ETypographyVariants } from './enums';

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: `${ETypographyVariants}`;
  children: ReactNode;
  className?: string;
  color?: CSSProperties['color'];
  style?: CSSProperties;
}
