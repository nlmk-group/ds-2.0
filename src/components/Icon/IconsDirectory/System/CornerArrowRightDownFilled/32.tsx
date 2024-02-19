import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowRightDownFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.533 6c2.257 0 3.89 0 5.175.104 1.273.102 2.116.3 2.809.648a6.939 6.939 0 0 1 3.056 3.008c.35.676.551 1.5.655 2.75.104 1.263.105 2.868.105 5.09v.837h-5.666a1 1 0 0 0-.702 1.713l6.667 6.563a1 1 0 0 0 1.403 0L28.7 20.15a1 1 0 0 0-.7-1.712h-5.667v-.884c0-2.166 0-3.854-.112-5.209-.114-1.376-.35-2.497-.872-3.505a8.94 8.94 0 0 0-3.935-3.876c-1.02-.51-2.152-.741-3.546-.853C12.494 4 10.78 4 8.578 4H4a1 1 0 0 0 0 2h4.533Z"
      />
    </svg>
  );
};

export default IconCornerArrowRightDownFilled32;
