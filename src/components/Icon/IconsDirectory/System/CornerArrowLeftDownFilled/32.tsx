import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCornerArrowLeftDownFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M28 4h-4.578c-2.202 0-3.916 0-5.29.11-1.395.113-2.527.344-3.546.854a8.939 8.939 0 0 0-3.935 3.876c-.522 1.008-.758 2.129-.872 3.505-.112 1.355-.112 3.043-.112 5.21v.883H4a1 1 0 0 0-.701 1.712l6.666 6.563a1 1 0 0 0 1.403 0l6.667-6.563a1 1 0 0 0-.702-1.712h-5.666V17.6c0-2.222 0-3.827.105-5.09.104-1.25.305-2.074.655-2.75a6.94 6.94 0 0 1 3.056-3.008c.693-.347 1.536-.546 2.81-.648C19.576 6.001 21.21 6 23.466 6H28a1 1 0 1 0 0-2Z"
      />
    </svg>
  );
};

export default IconCornerArrowLeftDownFilled32;
