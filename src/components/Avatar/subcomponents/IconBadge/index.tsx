import React from 'react';

import clsx from 'clsx';

import { IIconBadgeProps } from './types';

import styles from './IconBadge.module.scss';

import BadgeSpecialOverlay from '../BadgeSpecialOverlay';

export const IconBadge: React.FC<IIconBadgeProps> = ({
  className,
  iconName,
  badgeSpecialIcon
}) => {
  if (badgeSpecialIcon) {
    return (
      <div className={clsx(styles['icon-badge'], styles['with-overlay'], className)} data-testid="AVATAR_BADGE_SPECIAL">
        <BadgeSpecialOverlay className={styles.overlay} />
        <div className={styles['special-icon']}>
          {iconName}
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles['icon-badge'], styles.default, className)} data-testid="AVATAR_BADGE_DEFAULT">
      {iconName}
    </div>
  );
};
