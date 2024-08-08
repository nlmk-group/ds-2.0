import { CSSProperties, FC, ReactNode } from '../../../node_modules/react';
import { TIconProps } from '../Icon/types';
import { ITypographyProps } from '../Typography/types';
import { AvatarShape, AvatarSize } from './enums';

export interface IAvatarProps {
    size?: `${AvatarSize}`;
    shape?: `${AvatarShape}`;
    imageSrc?: string;
    userName?: string;
    userSurname?: string;
    online?: boolean;
    badgeIconName?: ReactNode;
    badgeSpecialIcon?: boolean;
    numberIndicator?: number;
    className?: string;
}
export type TAvatarSizeParameter = {
    avatarSize: number;
    squareRadius: number;
    numberIndicatorSize: number;
    lettersSize: number;
    badgeNumbersSize: number;
    badgeSize: number;
    specialBadgeSize: number;
    iconSize: TIconProps['containerSize'];
    lettersVariant: ITypographyProps['variant'];
    badgeTranslate: [number, number];
};
export type TSizingStyles = {
    avatarStyles: CSSProperties;
    lettersStyles: CSSProperties;
    numberIndicatorStyles: CSSProperties;
    onlineIndicatorStyles: CSSProperties;
    badgeStyles: CSSProperties;
};
export type TGetSizingStylesArgs = {
    sizeParameters: TAvatarSizeParameter;
    isSquare: boolean;
    isSpecialBadge: boolean;
    sizeVariant: IAvatarProps['size'];
};
export interface IAvatarComponent extends FC<IAvatarProps> {
    componentType?: string;
}
//# sourceMappingURL=types.d.ts.map