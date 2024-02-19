import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInputOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.545 5h22.91A2.551 2.551 0 0 1 30 7.558v17.91A2.538 2.538 0 0 1 27.454 28H4.546A2.538 2.538 0 0 1 2 25.467v-5.13h2.545v5.143h22.91V7.533H4.544v5.13H2V7.557A2.56 2.56 0 0 1 4.545 5Z"
      />
      <path fill={htmlColor || 'currentColor'} d="m19.818 16.5-5.09 5.117v-3.838H2v-2.558h12.727v-3.838l5.091 5.117Z" />
    </svg>
  );
};

export default IconInputOutlined32;
