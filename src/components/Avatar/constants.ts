import { TAvatarSizeParameter } from './types';

import { AvatarSize } from './enums';

export const AVATAR_SIZE_PARAMETERS: Record<AvatarSize, TAvatarSizeParameter> = {
  [AvatarSize.xxl]: {
    avatarSize: 64,
    iconSize: 32,
    squareRadius: 8,
    lettersVariant: 'Subheading3-Medium',
    lettersSize: 20,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 28,
    specialBadgeSize: 38,
    badgeTranslate: [21, -23]
  },
  [AvatarSize.xl]: {
    avatarSize: 56,
    iconSize: 32,
    squareRadius: 8,
    lettersVariant: 'Subheading3-Medium',
    lettersSize: 20,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 28,
    specialBadgeSize: 38,
    badgeTranslate: [21, -23]
  },
  [AvatarSize.l]: {
    avatarSize: 48,
    iconSize: 24,
    squareRadius: 8,
    lettersVariant: 'Body-Medium',
    lettersSize: 18,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 24,
    specialBadgeSize: 32,
    badgeTranslate: [21, -23]
  },
  [AvatarSize.m]: {
    avatarSize: 40,
    iconSize: 24,
    squareRadius: 4,
    lettersVariant: 'Body1-Medium',
    lettersSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 16,
    badgeSize: 24,
    specialBadgeSize: 32,
    badgeTranslate: [21, -23]
  },
  [AvatarSize.s]: {
    avatarSize: 32,
    iconSize: 16,
    squareRadius: 4,
    lettersVariant: 'Body2-Medium',
    lettersSize: 14,
    badgeNumbersSize: 12,
    numberIndicatorSize: 16,
    badgeSize: 24,
    specialBadgeSize: 32,
    badgeTranslate: [45, -38]
  }
};
