import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapPinaltFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.333 7.6V11a.667.667 0 1 0 1.334 0V7.6a3.333 3.333 0 1 0-1.334 0Zm3.474 1.68a.681.681 0 1 0-.28 1.333c1.513.3 2.14.84 2.14 1.053 0 .387-1.634 1.333-4.667 1.333s-4.667-.946-4.667-1.333c0-.213.627-.753 2.14-1.08a.681.681 0 1 0-.28-1.333C3.167 9.719 2 10.593 2 11.666c0 1.753 3.02 2.667 6 2.667s6-.914 6-2.667c0-1.073-1.167-1.947-3.193-2.387Z"
      />
    </svg>
  );
};

export default IconMapPinaltFilled16;
