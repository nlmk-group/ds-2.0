import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRedoArrowFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.537 7.4a7.27 7.27 0 0 0-4.722-1.733c-3.182 0-5.87 2.02-6.815 4.813l1.615.52c.718-2.127 2.771-3.667 5.2-3.667 1.335 0 2.552.48 3.504 1.254L8.842 11H15V5l-2.463 2.4Z"
      />
    </svg>
  );
};

export default IconRedoArrowFilled16;
