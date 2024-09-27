import React, { FC } from 'react';

import { EBadgeSizes } from '@components/Badge/enums';
import { variantsMapping } from '@components/declaration';
import { Badge } from '@components/index';

import { IButtonBadge } from './types';

import styles from '../../Button.module.scss';

import { EButtonFill, EButtonSizes } from '../../enums';

const badgeSizeMap = {
  [EButtonSizes.m]: EBadgeSizes.l,
  [EButtonSizes.s]: EBadgeSizes.m,
  [EButtonSizes.xs]: EBadgeSizes.s
} as const;

const ButtonBadge: FC<IButtonBadge> = ({ badge, fill, size }) => {
  const badgeSize = badgeSizeMap[size];
  const variant = fill === EButtonFill.outline ? variantsMapping.outline : variantsMapping.solid;

  return (
    <Badge variant={variant} size={badgeSize} className={styles.badge}>
      {badge}
    </Badge>
  );
};

export default ButtonBadge;
