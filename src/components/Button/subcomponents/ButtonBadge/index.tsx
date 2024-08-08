import React, { FC } from 'react';

import { EBadgeColors, EBadgeSizes } from '@components/Badge/enums';
import { variantsMapping } from '@components/declaration';
import { Badge } from '@components/index';

import { IButtonBadge, TBadgeTypes } from './types';

import { EButtonFill, EButtonSizes, EButtonVariant } from '../../enums';

import styles from '../../Button.module.scss'
import { variantsWithOneFill } from '@components/Button/helpers';

const badgeTypeMap: TBadgeTypes = {
  [`${EButtonVariant.primary}-${EButtonFill.solid}`]: {
    color: EBadgeColors.secondary,
    variant: variantsMapping.solid
  },
  [`${EButtonVariant.primary}-${EButtonFill.outline}`]: {
    color: EBadgeColors.primary,
    variant: variantsMapping.outline
  },
  [`${EButtonVariant.primary}-${EButtonFill.clear}`]: { color: EBadgeColors.primary, variant: variantsMapping.solid },
  [EButtonVariant.secondary]: { color: EBadgeColors.primary, variant: variantsMapping.solid },
  [`${EButtonVariant.grey}-${EButtonFill.solid}`]: { color: EBadgeColors.secondary, variant: variantsMapping.solid },
  [`${EButtonVariant.grey}-${EButtonFill.outline}`]: { color: EBadgeColors.grey, variant: variantsMapping.outline },
  [`${EButtonVariant.grey}-${EButtonFill.clear}`]: { color: EBadgeColors.grey, variant: variantsMapping.solid },
  [`${EButtonVariant.black}-${EButtonFill.solid}`]: { color: EBadgeColors.grey, variant: variantsMapping.solid },
  [`${EButtonVariant.black}-${EButtonFill.outline}`]: { color: EBadgeColors.grey, variant: variantsMapping.outline },
  [`${EButtonVariant.black}-${EButtonFill.clear}`]: { color: EBadgeColors.grey, variant: variantsMapping.solid },
  [EButtonVariant.success]: { color: EBadgeColors.success, variant: variantsMapping.solid },
  [EButtonVariant.warning]: { color: EBadgeColors.warning, variant: variantsMapping.solid },
  [EButtonVariant.error]: { color: EBadgeColors.error, variant: variantsMapping.solid },
  [EButtonVariant.info]: { color: EBadgeColors.primary, variant: variantsMapping.solid }
} as const;

const badgeSizeMap = {
  [EButtonSizes.m]: EBadgeSizes.l,
  [EButtonSizes.s]: EBadgeSizes.m,
  [EButtonSizes.xs]: EBadgeSizes.s
} as const;

const ButtonBadge: FC<IButtonBadge> = ({ badge, variant, fill, size }) => {
  const generateType = variantsWithOneFill.has(EButtonVariant[variant]) ? variant : `${variant}-${fill}`;
  const badgeProps = badgeTypeMap[generateType];
  const badgeSize = badgeSizeMap[size];

  return (
    <Badge {...badgeProps} size={badgeSize} className={styles.badge}>
      {badge}
    </Badge>
  );
};

export default ButtonBadge;
