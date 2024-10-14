import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m23.267 18.772 4.954-4.954a7.367 7.367 0 0 1-8.529 10.897l-5.068 5.068a1.675 1.675 0 0 1-2.369 0l-2.368-2.366a1.674 1.674 0 0 1 0-2.369l5.07-5.069a7.366 7.366 0 0 1 10.897-8.53l-4.955 4.955.473 1.894 1.895.474Zm-.415-6.689a5.692 5.692 0 0 0-5.92 8.288l-5.15 5.15a1.005 1.005 0 0 0 0 1.42l.947.948a1.005 1.005 0 0 0 1.421 0l5.15-5.15a5.694 5.694 0 0 0 8.288-5.92l-3.847 3.848-3.917-.838-.82-3.899 3.848-3.847Zm-16.519.584 2-2H2.667v-4h5.666l-2-2 3.334-3.334L17 8.667 9.667 16l-3.334-3.333ZM9.667 3.5 8.5 4.667l3.5 3.5H4.167v1H12l-3.5 3.5 1.167 1.166 5.166-5.166L9.667 3.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairOutlined32;
