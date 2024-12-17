import React, { FC } from 'react';

import { EBadgeSizes } from '@components/Badge/enums';
import { variantsMapping } from '@components/declaration';
import { Badge } from '@components/index';

import { IButtonBadgeProps } from './types';

import styles from '../../Button.module.scss';

const BADGE_SIZE_MAP = {
  m: EBadgeSizes.l,
  s: EBadgeSizes.m,
  xs: EBadgeSizes.s
} as const;

const ButtonBadge: FC<IButtonBadgeProps> = ({ badge, size }) => {
  const badgeSize = BADGE_SIZE_MAP[size];

  return (
    <Badge size={badgeSize} variant={variantsMapping.solid} className={styles.badge} data-ui-button-badge>
      {badge}
    </Badge>
  );
};

export default ButtonBadge;
