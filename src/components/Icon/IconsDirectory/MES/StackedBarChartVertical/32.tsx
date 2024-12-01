import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStackedBarCartVertical32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.86 3h5.28v8.44h-5.28V3Zm0 10.193h5.28v4.22h-5.28v-4.22Zm5.28 6.259h-5.28V28h5.28v-8.548ZM3 11.46h5.28v4.388H3V11.46Zm5.28 6.343H3v4.22h5.28v-4.22ZM3 24.032h5.28V28H3v-3.968ZM28 7.004h-5.28v7.385H28V7.004Zm-5.28 9.472H28v4.22h-5.28v-4.22ZM28 22.725h-5.28V28H28v-5.275Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStackedBarCartVertical32;
