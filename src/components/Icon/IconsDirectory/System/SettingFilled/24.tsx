import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.045 2.208a9.99 9.99 0 0 0-4.09.002v.001A3.993 3.993 0 0 1 8 5.071a3.993 3.993 0 0 1-3.456.261 10.043 10.043 0 0 0-2.046 3.543A3.993 3.993 0 0 1 4 11.999a3.993 3.993 0 0 1-1.5 3.122 9.99 9.99 0 0 0 2.043 3.546 3.993 3.993 0 0 1 3.457.26 3.993 3.993 0 0 1 1.955 2.865 9.99 9.99 0 0 0 4.091-.004A3.993 3.993 0 0 1 16 18.928a3.993 3.993 0 0 1 3.456-.261 10.042 10.042 0 0 0 2.046-3.543A3.99 3.99 0 0 1 20 12a3.993 3.993 0 0 1 1.5-3.124 9.99 9.99 0 0 0-2.043-3.545A3.993 3.993 0 0 1 16 5.07a3.993 3.993 0 0 1-1.955-2.862ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingFilled24;
