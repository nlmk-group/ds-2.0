import React, { FC } from 'react';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListDelete16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      className={styles[color as keyof typeof styles]}
    >
      <path
        fill={htmlColor || 'currentColor'}
        d="m5.547 3.242.744.745-1.28 1.28 1.28 1.28-.745.744-1.28-1.28-1.28 1.28-.744-.744 1.28-1.28-1.28-1.28.744-.745 1.28 1.28 1.28-1.28Zm3.12 8.091V10h6v1.333h-6Zm0-5.333V4.667h6V6h-6ZM6.29 9.32l-.743-.744-1.28 1.28-1.28-1.28-.745.744 1.28 1.28-1.28 1.28.745.744 1.28-1.28 1.28 1.28.744-.744-1.28-1.28 1.28-1.28Z"
      />
    </svg>
  );
};

export default IconListDelete16;
