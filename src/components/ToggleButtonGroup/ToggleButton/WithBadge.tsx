import React, { FC, useContext } from 'react';
import { clsx } from 'clsx';
import { sizeMapping } from '../enums';
import styles from '../ToggleButtonGroup.module.scss';
import Badge from '@components/Badge';
import { sizesMapping } from '@components/declaration';
import { IButtonGroupProperties, IButtonProperties } from '../types';
import { ButtonGroupProperties } from '..';
import { ButtonProperties } from '.';
import { IBadgeProps } from '@components/Badge/types';

const WithBadge: FC<IBadgeProps> = (props) => {
  const defaultProps = useContext<IButtonGroupProperties>(ButtonGroupProperties);
  const btnProps = useContext<IButtonProperties>(ButtonProperties);

  return (
    <div
      data-testid='BADGE'
      className={clsx(styles['badge-wrapper'], styles[`badge-${btnProps.status || defaultProps.status}`])}
    >
      <Badge
        {...props}
        size={sizesMapping[defaultProps.size === sizeMapping.compact ? 's' : 'm']}
      />
    </div>
  )
}

export default WithBadge