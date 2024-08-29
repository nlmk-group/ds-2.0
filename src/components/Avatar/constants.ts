import { TAvatarSizeParameter } from './types';

import { EAvatarSize } from './enums';

export const AVATAR_SIZE_PARAMETERS: Record<EAvatarSize, TAvatarSizeParameter> = {
  [EAvatarSize.xxxl]: {
    avatarSize: 220,
    iconSize: 32,
    lettersVariant: 'Heading1',
    lettersSize: 48,
    onlineIndicatorSize: 32,
    badgeNumbersSize: 24,
    numberIndicatorSize: 32,
    badgeSize: 48,
    specialBadgeSize: 72,
    badgeTranslate: [21, -23]
  },
  [EAvatarSize.xxl]: {
    avatarSize: 64,
    iconSize: 32,
    lettersVariant: 'Subheading3-Medium',
    lettersSize: 20,
    onlineIndicatorSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 28,
    specialBadgeSize: 38,
    badgeTranslate: [21, -23]
  },
  [EAvatarSize.xl]: {
    avatarSize: 56,
    iconSize: 32,
    lettersVariant: 'Subheading3-Medium',
    lettersSize: 20,
    onlineIndicatorSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 28,
    specialBadgeSize: 38,
    badgeTranslate: [21, -23]
  },
  [EAvatarSize.l]: {
    avatarSize: 48,
    iconSize: 24,
    lettersVariant: 'Body-Medium',
    lettersSize: 18,
    onlineIndicatorSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 24,
    badgeSize: 24,
    specialBadgeSize: 34,
    badgeTranslate: [21, -23]
  },
  [EAvatarSize.m]: {
    avatarSize: 40,
    iconSize: 24,
    lettersVariant: 'Body1-Medium',
    lettersSize: 16,
    onlineIndicatorSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 16,
    badgeSize: 24,
    specialBadgeSize: 34,
    badgeTranslate: [21, -23]
  },
  [EAvatarSize.s]: {
    avatarSize: 32,
    iconSize: 16,
    lettersVariant: 'Body2-Medium',
    lettersSize: 14,
    onlineIndicatorSize: 16,
    badgeNumbersSize: 12,
    numberIndicatorSize: 16,
    badgeSize: 24,
    specialBadgeSize: 34,
    badgeTranslate: [45, -38]
  }
};
