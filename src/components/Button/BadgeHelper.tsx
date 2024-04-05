import React, { FC } from 'react'
import { EFill, ESizes, EVariant } from './enums';
import { IBadgeHelper, TBadgeTypes } from './types';
import {
  colorsMapping,
  sizesMapping,
  variantsMapping
} from '@components/declaration';
import { Badge } from '..';


const badgeTypeMap: TBadgeTypes = {
  [`${EVariant.primary}-${EFill.solid}`]: { color: colorsMapping.secondary, variant: variantsMapping.solid },
  [`${EVariant.primary}-${EFill.outline}`]: { color: colorsMapping.primary, variant: variantsMapping.outline },
  [`${EVariant.primary}-${EFill.clear}`]: { color: colorsMapping.primary, variant: variantsMapping.solid },
  [EVariant.secondary]: { color: colorsMapping.primary, variant: variantsMapping.solid },
  [`${EVariant.grey}-${EFill.solid}`]: { color: colorsMapping.secondary, variant: variantsMapping.solid },
  [`${EVariant.grey}-${EFill.outline}`]: { color: colorsMapping.grey, variant: variantsMapping.outline },
  [`${EVariant.grey}-${EFill.clear}`]: { color: colorsMapping.grey, variant: variantsMapping.solid },
  [`${EVariant.black}-${EFill.solid}`]: { color: colorsMapping.grey, variant: variantsMapping.solid },
  [`${EVariant.black}-${EFill.outline}`]: { color: colorsMapping.grey, variant: variantsMapping.outline },
  [`${EVariant.black}-${EFill.clear}`]: { color: colorsMapping.grey, variant: variantsMapping.solid }
}

const badgeSizeMap = {
  [ESizes.m]: sizesMapping.l,
  [ESizes.s]: sizesMapping.m,
  [ESizes.xs]: sizesMapping.s
}

const BadgeHelper: FC<IBadgeHelper> = ({
  badge,
  variant,
  fill,
  size
}) => {
  const generateType = variant === EVariant.secondary ? variant : `${variant}-${fill}`;
  const badgeProps = badgeTypeMap[generateType];
  const badgeSize = badgeSizeMap[size];


  return (
    <Badge {...badgeProps} size={badgeSize}>
      {badge}
    </Badge>
  )
}

export default BadgeHelper
