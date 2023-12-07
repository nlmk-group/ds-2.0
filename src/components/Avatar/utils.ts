import { CSSProperties } from 'react';

import { TGetSizingStylesArgs, TSizingStyles } from './types';

import { AvatarSize } from './enums';
import { SPECIAL_ICONS } from './subcomponents/IconBadge/constants';

export const getSizingStyles = ({
  sizeParameters,
  isSquare,
  isSpecialBadge,
  sizeVariant
}: TGetSizingStylesArgs): TSizingStyles => {
  const {
    avatarSize,
    squareRadius,
    lettersSize,
    numberIndicatorSize,
    badgeNumbersSize,
    badgeSize,
    specialBadgeSize,
    badgeTranslate
  } = sizeParameters;
  const getAvatarStyle = (): CSSProperties => {
    const style: CSSProperties = {
      width: `var(--${avatarSize}-size)`,
      height: `var(--${avatarSize}-size)`
    };

    if (isSquare) {
      style.borderRadius = `var(--${squareRadius}-radius)`;
    }

    return style;
  };

  const getLettersStyle = (): CSSProperties => {
    return { fontSize: `var(--${lettersSize}-size)` };
  };

  const getNumberIndicatorStyle = (): CSSProperties => {
    const style: CSSProperties = {
      width: `var(--${numberIndicatorSize}-size)`,
      height: `var(--${numberIndicatorSize}-size)`,
      fontSize: `var(--${badgeNumbersSize}-size)`,
      lineHeight: `var(--${badgeNumbersSize}-size)`,
      transform: 'translate(20%, 20%)'
    };
    if (isSquare || sizeVariant === AvatarSize.s) {
      style.transform = 'translate(30%, 30%)';
    }
    return style;
  };

  const getOnlineIndicatorStyle = (): CSSProperties => {
    const style: CSSProperties = {
      transform: 'translate(0%, 0%)'
    };
    if (isSquare || sizeVariant === AvatarSize.s) {
      style.transform = 'translate(30%, 30%)';
    }
    return style;
  };

  const getBadgeStyles = (): CSSProperties => {
    const [x, y] = badgeTranslate;
    const size = isSpecialBadge ? specialBadgeSize : badgeSize;

    const style: CSSProperties = {
      width: `${size}px`,
      height: `${size}px`,
      transform: `translate(${x}%, ${y}%)`
    };
    if (isSquare) {
      style.transform = 'translate(45%, -35%)';
    }
    return style;
  };

  return {
    avatarStyles: getAvatarStyle(),
    lettersStyles: getLettersStyle(),
    numberIndicatorStyles: getNumberIndicatorStyle(),
    onlineIndicatorStyles: getOnlineIndicatorStyle(),
    badgeStyles: getBadgeStyles()
  };
};

export const isSpecialBadge = (iconName?: string) => SPECIAL_ICONS.includes(iconName || '');

export const getAvatarImageSrc = () => {
  const avatarImageMock = '/assets/avatar_mock.png';
  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  return `${origin}${path}${avatarImageMock}`;
};
