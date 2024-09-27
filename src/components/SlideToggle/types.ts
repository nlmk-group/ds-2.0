import { PropsWithChildren, ReactNode } from 'react';

import { EBadgeColors } from '@components/Badge/enums';

import { ESizeMapping } from './enum';

export type TSize = `${ESizeMapping}`;

export interface ISlideToggleProps extends PropsWithChildren {
  title: string | JSX.Element;
  after?: ReactNode;
  isShow: boolean;
  onToggle?: () => void;
  className?: string;
  size?: TSize;
  iconWrapperId?: string;
  titleWrapperId?: string;
  afterWrapperId?: string;
  contentWrapperId?: string;
}
export interface ISlideToggleWithButtonProps extends ISlideToggleProps {
  badgeChildren?: string;
  badgeColor?: EBadgeColors;
}
