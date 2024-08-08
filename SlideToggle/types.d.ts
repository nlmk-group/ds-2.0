import { PropsWithChildren, ReactNode } from '../../../node_modules/react';
import { ESizeMapping } from './enum';

export type TSize = `${ESizeMapping}`;
export interface ISlideToggleProps extends PropsWithChildren {
    title: string | JSX.Element;
    after?: ReactNode;
    isShow: boolean;
    onToggle?: () => void;
    toggleContainerShadow?: boolean;
    className?: string;
    size?: TSize;
    iconWrapperId?: string;
    titleWrapperId?: string;
    afterWrapperId?: string;
    contentWrapperId?: string;
}
//# sourceMappingURL=types.d.ts.map