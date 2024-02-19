import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 21a9 9 0 0 0 7.633-13.77l-8.902 8.91-3.816-3.816 1.269-1.269 2.547 2.547 7.797-7.797A9 9 0 1 0 12 21Z"
      />
    </svg>
  );
};

export default IconTaskFilled24;
