import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconChartSolar32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m22.305 18.21-4.871-2.974V9.474a6.682 6.682 0 0 1 4.871 8.736Zm.736 3.502 3.351 2.047a12.993 12.993 0 0 1-10.424 5.24C9.203 28.999 3.656 23.832 3 17.27h3.938a9.123 9.123 0 0 0 9.029 7.82c2.863 0 5.404-1.288 7.073-3.378Zm-2.063-1.259-5.214-3.183H9.441a6.682 6.682 0 0 0 11.537 3.183Zm-11.524-5.79h5.374v-5.24a6.686 6.686 0 0 0-5.374 5.24Zm7.98-11.646C23.937 3.744 29 9.272 29 15.967c0 1.89-.417 3.688-1.147 5.304l-3.414-1.994a8.766 8.766 0 0 0 .651-3.31c0-4.544-3.318-8.286-7.656-8.993V3.017ZM6.938 14.664c.572-3.996 3.734-7.138 7.727-7.715V3A13.02 13.02 0 0 0 3 14.664h3.938Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconChartSolar32;
