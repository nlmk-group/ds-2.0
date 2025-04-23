import React, { FC } from 'react';

import { IIconMockProps } from '@components/Icon/IconMock/types';

import styles from './IconMock.module.scss';
import { IconContainer } from '@components/index';

const IconMock: FC<IIconMockProps> = ({ weight, style }) => {
  return (
    <IconContainer containerSize={32}>
      <div className={styles['icon-mock']} style={style}>
        <span className={styles['icon-mock__text']}>{weight}</span>
      </div>
    </IconContainer>
  );
};

export default IconMock;
