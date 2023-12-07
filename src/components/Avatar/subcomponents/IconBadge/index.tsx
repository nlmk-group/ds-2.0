import clsx from 'clsx'
import { IIconBadgeProps } from './types'
import React from 'react'
import styles from './IconBadge.module.scss'
import Icon from '@components/Icon';
import BadgeSpecialOverlay from '../BadgeSpecialOverlay'
import { isSpecialBadge } from '@components/Avatar/utils'

export const IconBadge: React.FC<IIconBadgeProps> = ({className, iconName}) => {

  if (isSpecialBadge(iconName)) {
    return (<div className={clsx(styles['icon-badge'], styles['with-overlay'], className)} data-testid='AVATAR_BADGE_SPECIAL'>
      <BadgeSpecialOverlay className={styles.overlay} />
      <div className={styles['special-icon']}>
        <Icon
          name={iconName}
          containerSize={16}
          htmlColor='var(--never-changes-white)'
        />
      </div>
    </div>
    )
  }

  return (
    <div className={clsx(styles['icon-badge'], styles.default, className)} data-testid='AVATAR_BADGE_DEFAULT'>
      <Icon
        name={iconName}
        containerSize={16}
        htmlColor='var(--never-changes-white)'
      />
    </div>
  )
}