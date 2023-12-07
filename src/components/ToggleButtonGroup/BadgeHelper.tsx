import React, { FC } from 'react';
import { clsx } from 'clsx';
import { sizeMapping } from './enums';
import styles from './ToggleButtonGroup.module.scss';
import Badge from '@components/Badge';
import { IBadgeHelper } from './types';
import { sizesMapping } from '@components/declaration';

const BadgeHelper: FC<IBadgeHelper> = ({size, actionNumber, status}) => {
  return (
    <div
      data-testid='BADGE'
      className={clsx(styles['badge-wrapper'], styles[`badge-${status}`])}
    >
      <Badge
        size={sizesMapping[size === sizeMapping.compact ? 's' : 'm']}
      >
        {actionNumber}
      </Badge>
    </div>
  )
}

export default BadgeHelper