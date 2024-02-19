import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 23.778v3.11h9.333v-3.11H2ZM2 5.11v3.111h15.556v-3.11H2ZM17.556 30v-3.111H30v-3.111H17.556v-3.111h-3.112V30h3.112ZM8.222 11.333v3.111H2v3.112h6.222v3.11h3.111v-9.333h-3.11ZM30 17.556v-3.112H14.444v3.112H30Zm-9.333-6.223h3.11v-3.11H30V5.11h-6.222V2h-3.111v9.333Z"
      />
    </svg>
  );
};

export default IconTuneControlOutlined32;
