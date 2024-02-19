import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTuneControlOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 17.556v2.222h6.667v-2.222H2ZM2 4.222v2.222h11.111V4.222H2ZM13.111 22v-2.222H22v-2.222h-8.889v-2.223H10.89V22h2.222ZM6.444 8.667v2.222H2v2.222h4.444v2.222h2.223V8.667H6.444ZM22 13.11v-2.22H10.889v2.222H22Zm-6.667-4.444h2.223V6.444H22V4.222h-4.444V2h-2.223v6.667Z"
      />
    </svg>
  );
};

export default IconTuneControlOutlined24;
