import { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { sizesMappingInput } from '@components/declaration';

type TBorderProps = string | number;
export interface IBox extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  paddingSpace?: sizesMappingInput;
  background?: string;
  height?: TBorderProps;
  width?: TBorderProps;
  border?: string;
  borderRadius?: TBorderProps;
  display?: CSSProperties['display'];
  flexDirection?: CSSProperties['flexDirection'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexWrap?: CSSProperties['flexWrap'];
  st?: CSSProperties;
  className?: string;
  gap?: TBorderProps;
}
