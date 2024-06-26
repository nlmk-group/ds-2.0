import React, { useMemo } from 'react';

import Icon from '@components/Icon';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { IAvatarComponent } from './types';

import styles from './Avatar.module.scss';

import { AVATAR_SIZE_PARAMETERS } from './constants';
import { AvatarShape, AvatarSize } from './enums';
import { IconBadge } from './subcomponents/IconBadge';
import { getSizingStyles } from './utils';

const Avatar: IAvatarComponent = ({
  size = AvatarSize.m,
  shape = AvatarShape.circle,
  imageSrc,
  userName,
  userSurname,
  online,
  badgeIconName,
  badgeSpecialIcon = false,
  numberIndicator,
  className
}) => {
  const hasNumberIndicator = typeof numberIndicator === 'number';
  const shouldShowOnlineIndicator = !hasNumberIndicator && typeof online === 'boolean';
  const isSquare = shape === AvatarShape.square;
  const sizeParameters = AVATAR_SIZE_PARAMETERS[size];
  const { iconSize, lettersVariant } = sizeParameters;
  const firstLetter = userName?.charAt(0);
  const secondLetter = userSurname?.charAt(0);
  const shouldShowLetters = !imageSrc && firstLetter && secondLetter;
  const shouldShowIcon = !imageSrc && !shouldShowLetters;
  const { avatarStyles, lettersStyles, onlineIndicatorStyles, numberIndicatorStyles, badgeStyles } = useMemo(
    () =>
      getSizingStyles({
        sizeParameters,
        isSquare,
        isSpecialBadge: badgeSpecialIcon,
        sizeVariant: size
      }),
    [size, shape, badgeIconName]
  );

  return (
    <div
      className={clsx(styles.avatar, styles[size], styles[shape], className)}
      style={avatarStyles}
      data-testid="AVATAR"
    >
      {imageSrc && <img src={imageSrc} className={styles.image} data-testid="AVATAR_IMAGE" />}

      {shouldShowLetters && (
        <div className={styles.letters} style={lettersStyles}>
          <Typography variant={lettersVariant} data-testid="AVATAR_LETTERS">
            {firstLetter}
            {secondLetter}
          </Typography>
        </div>
      )}

      {shouldShowIcon && (
        <div className={styles['user-icon']} data-testid="AVATAR_ICON">
          <Icon name="IconPersonFilled32" containerSize={iconSize} htmlColor="var(--ac-avatar-icon-default-icon)" />
        </div>
      )}

      {shouldShowOnlineIndicator && (
        <div
          className={clsx(styles['online-indicator'], styles[online ? 'online' : 'offline'])}
          style={onlineIndicatorStyles}
          data-testid="AVATAR_INDICATOR_ONLINE"
        />
      )}

      {hasNumberIndicator && (
        <div className={styles['number-indicator']} style={numberIndicatorStyles} data-testid="AVATAR_INDICATOR_NUMBER">
          <Typography variant="Caption-Bold">{numberIndicator}</Typography>
        </div>
      )}

      {badgeIconName && (
        <div className={styles.badge} style={badgeStyles}>
          <IconBadge iconName={badgeIconName} badgeSpecialIcon={badgeSpecialIcon} />
        </div>
      )}
    </div>
  );
};

Avatar.componentType = 'Avatar';

export default Avatar;
