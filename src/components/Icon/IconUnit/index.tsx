import React, { FC } from 'react';

import { IIconUnitProps } from '@components/Icon/IconUnit/types';
import { IconContainer, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './IconUnit.module.scss';

const IconUnit: FC<IIconUnitProps> = ({ unit, className, style }) => {
  return (
    <IconContainer containerSize={32} className={clsx(styles['icon-unit'], className)} style={style}>
      <Typography>{unit}</Typography>
    </IconContainer>
  );
};

export default IconUnit;
