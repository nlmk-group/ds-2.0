import React from 'react';

import { isSpecialBadge } from '@components/Avatar/utils';
import Icon from '@components/Icon';
import clsx from 'clsx';

import { IIconBadgeProps } from './types';

import styles from './IconBadge.module.scss';

import BadgeSpecialOverlay from '../BadgeSpecialOverlay';

export const IconBadge: React.FC<IIconBadgeProps> = ({ className, iconName }) => {
  if (isSpecialBadge(iconName)) {
    return (
      <div className={clsx(styles['icon-badge'], styles['with-overlay'], className)} data-testid="AVATAR_BADGE_SPECIAL">
        <BadgeSpecialOverlay className={styles.overlay} />
        <div className={styles['special-icon']}>
          <Icon name={iconName} containerSize={16} htmlColor="var(--never-changes-white)" />
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(styles['icon-badge'], styles.default, className)} data-testid="AVATAR_BADGE_DEFAULT">
      <Icon name={iconName} containerSize={16} htmlColor="var(--never-changes-white)" />
    </div>
  );
};
