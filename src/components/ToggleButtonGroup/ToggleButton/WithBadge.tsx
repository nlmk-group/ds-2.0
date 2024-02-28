import React, { FC, useContext } from 'react';
import { clsx } from 'clsx';
import {
  sizeMapping
  // statusMapping
} from '../enums';
import styles from '../ToggleButtonGroup.module.scss';
import Badge from '@components/Badge';
import {
  // colorsMapping
  sizesMapping
} from '@components/declaration';
import {
  IButtonGroupProperties
  // IButtonProperties
} from '../types';
import { ButtonGroupProperties } from '..';
// import { ButtonProperties } from '.';
import { IBadgeProps } from '@components/Badge/types';

const WithBadge: FC<IBadgeProps> = (props) => {
  const defaultProps = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  // const btnProps = useContext<IButtonProperties>(ButtonProperties);
  // const badgeType = btnProps.status || defaultProps.status;
  
  // const badgeColorHelper = () => {
  //   // if (btnProps.active) return colorsMapping.grey;
  //   if (badgeType === statusMapping.default) return colorsMapping.primary
  //   else return badgeType
  // }

  const newProps = {
    ...props,
    variant: props.variant === undefined
      ? 'solid'
      : props.variant,
    color: props.color === undefined
      ? 'secondary'
      : props.color
    // color: badgeColorHelper()
  };

  return (
    <div
      data-testid='BADGE'
      className={clsx(
        styles['badge-wrapper']
      )}
    >
      <Badge
        {...newProps}
        size={sizesMapping[defaultProps.size === sizeMapping.compact ? 's' : 'm']}
      />
    </div>
  )
}

export default WithBadge