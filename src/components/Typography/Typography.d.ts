import { CSSProperties, FC, HTMLAttributes, PropsWithChildren } from 'react';

export enum ETypographyVariants {
  'Heading1' = 'Heading1',
  'Heading2' = 'Heading2',
  'Heading3' = 'Heading3',
  'Heading4' = 'Heading4',
  'Subheading1' = 'Subheading1',
  'Subheading2' = 'Subheading2',
  'Subheading2-Medium' = 'Subheading2-Medium',
  'Subheading3' = 'Subheading3',
  'Subheading3-Medium' = 'Subheading3-Medium',
  'Body' = 'Body',
  'Body-Medium' = 'Body-Medium',
  'Body-Bold' = 'Body-Bold',
  'Body1' = 'Body1',
  'Body1-Medium' = 'Body1-Medium',
  'Body1Table-Medium' = 'Body1Table-Medium',
  'Body1Mono-Medium' = 'Body1Mono-Medium',
  'Body1Mono-Bold' = 'Body1Mono-Bold',
  'Body1-Bold' = 'Body1-Bold',
  'Body2' = 'Body2',
  'Body2-Medium' = 'Body2-Medium',
  'Body2Mono-Medium' = 'Body2Mono-Medium',
  'Body2Mono-Bold' = 'Body2Mono-Bold',
  'Body2-Bold' = 'Body2-Bold',
  'Caption' = 'Caption',
  'Caption-Medium' = 'Caption-Medium',
  'Caption-Bold' = 'Caption-Bold',
  'CaptionMono' = 'CaptionMono',
  'CaptionMono-Medium' = 'CaptionMono-Medium',
  'CaptionMono-Bold' = 'CaptionMono-Bold',
  'Additional-Bold' = 'Additional-Bold'
}

export interface ITypographyProps extends HTMLAttributes<HTMLSpanElement>, PropsWithChildren {
  /**
   * Вариант типографики
   */
  variant?: ETypographyVariants;

  /**
   * Цвет текста
   */
  color?: CSSProperties['color'];
}

declare const Typography: FC<ITypographyProps>;

export default Typography;
