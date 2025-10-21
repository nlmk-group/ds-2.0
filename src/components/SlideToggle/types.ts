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

export type TSlideToggleProps = ISlideToggleBaseProps &
  (
    | {
        /** Показать контент при монтировании компонента */
        defaultOpen: boolean;
        isShow?: never;
        onToggle?: never;
      }
    | {
        defaultOpen?: never;
        /** Показан ли контент */
        isShow: boolean;
        /** Функция, вызываемая при переключении */
        onToggle?: () => void;
      }
  );
export interface ISlideToggleWithButtonProps extends ISlideToggleBaseProps {
  badgeChildren?: string;
  badgeColor?: `${EBadgeColors}`;
}
