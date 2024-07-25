import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListDelete24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={styles[color as keyof typeof styles]}
    >
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.32 4.864 9.436 5.98 7.516 7.9l1.92 1.92-1.116 1.116-1.92-1.92-1.92 1.92L3.364 9.82l1.92-1.92-1.92-1.92L4.48 4.864l1.92 1.92 1.92-1.92ZM13 17v-2h9v2h-9Zm0-8V7h9v2h-9Zm-3.564 4.98L8.32 12.863l-1.92 1.92-1.92-1.92-1.117 1.117 1.92 1.92-1.92 1.92 1.117 1.116 1.92-1.92 1.92 1.92 1.116-1.116-1.92-1.92 1.92-1.92Z"
      />
    </svg>
  );
};

export default IconListDelete24;
