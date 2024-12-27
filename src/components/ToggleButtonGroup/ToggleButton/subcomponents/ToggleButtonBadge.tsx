import React, { FC, useContext } from 'react';

import Badge from '@components/Badge';
import { IBadgeProps } from '@components/Badge/types';
import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import styles from '../ToggleButton.module.scss';

import { ButtonGroupProperties } from '../..';
import { EToggleButtonGroupSizeMapping } from '../../enums';
import { IButtonGroupPropertiesProps } from '../../types';

const ToggleButtonBadge: FC<IBadgeProps> = props => {
  const defaultProps = useContext<IButtonGroupPropertiesProps>(ButtonGroupProperties);

  const newProps = {
    ...props,
    variant: props.variant || 'solid',
    color: props.color || 'brand'    
  };

  return (
    <Badge
      className={clsx(styles['badge-wrapper'])}
      {...newProps}
      size={sizesMapping[defaultProps.size === EToggleButtonGroupSizeMapping.s ? 's' : 'm']}
    />
  );
};

export default ToggleButtonBadge;
