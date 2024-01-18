import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconFormatLineSpacingOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M6.39024 7.41463H8.82927L5.41463 4L2 7.41463H4.43902V17.1707H2L5.41463 20.5854L8.82927 17.1707H6.39024V7.41463ZM10.2927 5.46341V7.41463H22V5.46341H10.2927ZM10.2927 19.122H22V17.1707H10.2927V19.122ZM10.2927 13.2683H22V11.3171H10.2927V13.2683Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined24;
