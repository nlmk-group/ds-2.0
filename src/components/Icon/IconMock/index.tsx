import React, { FC } from 'react';

import { IIconMockProps } from '@components/Icon/IconMock/types';
import { IconContainer, Typography } from '@components/index';
import clsx from 'clsx';

import styles from './IconMock.module.scss';

const IconMock: FC<IIconMockProps> = ({ weight, className, style }) => {
  return (
    <IconContainer containerSize={32} className={clsx(styles['icon-mock'], className)} style={style}>
      <Typography>{weight}</Typography>
    </IconContainer>
  );
};

export default IconMock;
