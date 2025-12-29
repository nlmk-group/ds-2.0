import { CSSProperties } from 'react';

import { TGetSizingStylesArgs, TSizingStyles } from './types';

import { EAvatarSize } from './enums';

export const getSizingStyles = ({
  sizeParameters,
  isSpecialBadge,
  sizeVariant
}: TGetSizingStylesArgs): TSizingStyles => {
  const {
    avatarSize,
    lettersSize,
    numberIndicatorSize,
    onlineIndicatorSize,
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
    if (sizeVariant === EAvatarSize.xxxl) {
      style.width = '220px';
      style.height = '220px';
    }

    return style;
  };

  const getLettersStyle = (): CSSProperties => {
    return { fontSize: `var(--${lettersSize}-size)` };
  };

  const getNumberIndicatorStyle = (): CSSProperties => {
    const style: CSSProperties = {
      minWidth: `var(--${numberIndicatorSize}-size)`,
      height: `var(--${numberIndicatorSize}-size)`,
      fontSize: `var(--${badgeNumbersSize}-size)`,
      lineHeight: `var(--${badgeNumbersSize}-size)`,
      transform: 'translate(20%, 20%)'
    };
    if (sizeVariant === EAvatarSize.xxxl) {
      style.display = 'none';
    }

    if (sizeVariant === EAvatarSize.xxl) {
      style.transform = 'translate(10%, 10%)';
    }
    if (sizeVariant === EAvatarSize.xl) {
      style.transform = 'translate(10%, 10%)';
    }
    if (sizeVariant === EAvatarSize.s || sizeVariant === EAvatarSize.m) {
      style.padding = '2px 4px';
    }
    if (sizeVariant === EAvatarSize.s) {
      style.transform = 'translate(-10%, -10%)';
    }
    if (sizeVariant === EAvatarSize.s) {
      style.transform = 'translate(0)';
    }

    return style;
  };

  const getOnlineIndicatorStyle = (): CSSProperties => {
    const style: CSSProperties = {
      width: `${onlineIndicatorSize}px`,
      height: `${onlineIndicatorSize}px`,
      transform: 'translate(0%, 0%)'
    };
    if (sizeVariant === EAvatarSize.xxxl) {
      style.transform = 'translate(-40%, -40%)';
    }
    if (sizeVariant === EAvatarSize.l) {
      style.transform = 'translate(10%, 10%)';
    }
    if (sizeVariant === EAvatarSize.m) {
      style.transform = 'translate(30%, 30%)';
    }
    if (sizeVariant === EAvatarSize.s) {
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

    if (sizeVariant === EAvatarSize.xxxl) {
      style.transform = 'translate(5%, 0%)';
    }
    if (sizeVariant === EAvatarSize.xxxl && !isSpecialBadge) {
      style.transform = 'translate(-15%, 20%)';
    }
    if (sizeVariant === EAvatarSize.m) {
      style.transform = 'translate(30%, -30%)';
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

export const getAvatarImageSrc = () => {
  const avatarImageMock = '/img/avatar_mock.png';
  const { origin, pathname } = window.parent.location;
  const path = pathname === '/' ? '' : pathname;
  return `${origin}${path}${avatarImageMock}`;
};
