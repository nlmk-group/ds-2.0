import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatLineSpacingOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M6.39 7.415h2.44L5.414 4 2 7.415h2.439v9.756H2l3.415 3.414 3.414-3.414H6.39V7.415Zm3.903-1.952v1.952H22V5.463H10.293Zm0 13.659H22v-1.951H10.293v1.951Zm0-5.854H22v-1.95H10.293v1.95Z"
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined24;
