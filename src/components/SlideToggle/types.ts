import { PropsWithChildren, ReactNode } from 'react';

import { EBadgeColors } from '@components/Badge/enums';

import { ESizeMapping } from './enum';

export type TSize = `${ESizeMapping}`;

export interface ISlideToggleBaseProps extends PropsWithChildren {
  title: string | JSX.Element;
  after?: ReactNode;
  className?: string;
  size?: TSize;
  iconWrapperId?: string;
  titleWrapperId?: string;
  afterWrapperId?: string;
  contentWrapperId?: string;
}

export type SlideToggleProps = ISlideToggleBaseProps & ({ isOpenDefault: boolean; isShow?: never; onToggle?: never }
 | { 
  isOpenDefault?: never;
  isShow: boolean;
  onToggle?: () => void;
})
export interface ISlideToggleWithButtonProps extends ISlideToggleBaseProps {
  badgeChildren?: string;
  badgeColor?: `${EBadgeColors}`;
}
