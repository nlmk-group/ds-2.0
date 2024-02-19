import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKovsh16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        stroke={htmlColor || 'currentColor'}
        strokeWidth=".6"
        d="M8.497 7.71a1.333 1.333 0 0 0-1 0V2h1v.834H14v1h-.834v8.796c0 1.197-.97 2.168-2.168 2.168H5.002a2.168 2.168 0 0 1-2.168-2.168V3.835H2V2.834h2.668v1h-.833v8.796c0 .644.522 1.167 1.167 1.167h5.996c.645 0 1.168-.523 1.168-1.167V3.835h-3.67v2.832A2.335 2.335 0 1 1 5.7 9.369c-.091-.502-.038-.798.133-1.278l.893.452c-.063.405-.041.55-.041.645a1.334 1.334 0 1 0 1.812-1.477Z"
      />
    </svg>
  );
};

export default IconKovsh16;
