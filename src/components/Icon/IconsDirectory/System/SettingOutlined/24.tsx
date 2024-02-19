import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.34 17a10.017 10.017 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672A9.99 9.99 0 0 1 20.66 7c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.991 9.991 0 0 1-2.5 4.337 3.001 3.001 0 0 0-4.632 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.016 10.016 0 0 1 3.34 17Zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.5.047 1 .048 1.5 0a4.993 4.993 0 0 1 2.25-2.77 4.993 4.993 0 0 1 3.525-.564c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334-.21-.455-.46-.89-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.992 4.992 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001a4.993 4.993 0 0 1-2.25 2.77 4.993 4.993 0 0 1-3.526.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12a4.99 4.99 0 0 1-1.273 3.334c.21.455.46.89.75 1.298A4.993 4.993 0 0 1 9 17.196ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};

export default IconSettingOutlined24;
