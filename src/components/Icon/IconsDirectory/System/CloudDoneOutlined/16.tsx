import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloudDoneOutlined: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.287 6.523a4.37 4.37 0 0 0-8.166-1.166A3.497 3.497 0 0 0 1 8.833c0 1.931 1.57 3.5 3.5 3.5h7.583A2.918 2.918 0 0 0 15 9.417a2.903 2.903 0 0 0-2.713-2.894Zm-.204 4.644H4.5a2.333 2.333 0 0 1-2.333-2.334c0-1.196.892-2.193 2.076-2.316l.624-.064.292-.554A3.19 3.19 0 0 1 8 4.167a3.21 3.21 0 0 1 3.144 2.584l.175.875.893.064c.91.058 1.621.822 1.621 1.727 0 .962-.787 1.75-1.75 1.75ZM5.614 7.719l1.22 1.22 2.683-2.684.822.823-3.506 3.505-2.041-2.041.822-.823Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCloudDoneOutlined;
