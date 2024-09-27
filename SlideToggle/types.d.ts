import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { EBadgeColors } from '../Badge/enums';
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
//# sourceMappingURL=types.d.ts.map