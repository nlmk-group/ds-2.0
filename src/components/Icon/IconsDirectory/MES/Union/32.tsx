import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnion32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M12 6.667c1.387 0 2.747.32 4 .906a9.434 9.434 0 0 1 4-.906 9.333 9.333 0 0 1 0 18.666 9.433 9.433 0 0 1-4-.906 9.432 9.432 0 0 1-4 .906 9.334 9.334 0 0 1 0-18.666ZM11.334 16a8.655 8.655 0 0 0 2.746 6.333l1.334-.613A7.315 7.315 0 0 1 12.667 16c0-2.32 1.08-4.387 2.747-5.72l-1.334-.613A8.656 8.656 0 0 0 11.334 16Zm9.333 0a8.655 8.655 0 0 0-2.747-6.333l-1.333.613A7.315 7.315 0 0 1 19.334 16c0 2.32-1.08 4.387-2.747 5.72l1.333.613A8.654 8.654 0 0 0 20.667 16Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnion32;
