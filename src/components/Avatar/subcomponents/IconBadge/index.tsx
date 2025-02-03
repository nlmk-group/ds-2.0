import React from 'react';

import clsx from 'clsx';

import { IIconBadgeProps } from './types';

import styles from './IconBadge.module.scss';

import BadgeSpecialOverlay from '../BadgeSpecialOverlay';

interface IIconBadgePropsWithSize extends IIconBadgeProps {
  isXxxlWithBirthdayIcon?: boolean;
}

export const IconBadge: React.FC<IIconBadgePropsWithSize> = ({
  className,
  iconName,
  badgeSpecialIcon,
  isXxxlWithBirthdayIcon
}) => {
  if (badgeSpecialIcon) {
    return (
      <div
        className={clsx(styles['icon-badge'], styles['with-overlay'], className)}
        data-ui-avatar-badge-special
        data-testid="AVATAR_BADGE_SPECIAL"
      >
        <BadgeSpecialOverlay className={styles.overlay} />
        <div className={clsx(styles['special-icon'], isXxxlWithBirthdayIcon && styles['special-icon-xxxl'])}>
          {iconName}
        </div>
      </div>
    );
  }
  return (
    <div
      className={clsx(styles['icon-badge'], styles.default, className)}
      data-ui-avatar-badge-default
      data-testid="AVATAR_BADGE_DEFAULT"
    >
      {iconName}
    </div>
  );
};
