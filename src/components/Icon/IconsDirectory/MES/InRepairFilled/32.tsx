import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInRepairFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M19.75 11 18 12.75s-3.25-3.271-3.25-3.25a7.37 7.37 0 0 1 2.16-5.265A7.67 7.67 0 0 1 26.4 3.17l-4.529 4.518.45 1.952 1.956.45 4.528-4.519a7.632 7.632 0 0 1-1.067 9.472c-.656.657-2.488 1.457-2.488 1.457l-5.5-5.5Zm-2.005 5.557 1.8-1.8 9.83 9.825a2.12 2.12 0 0 1 0 2.998l-1.8 1.798a2.12 2.12 0 0 1-2.999 0l-9.829-9.825 1.765-1.764-8.278-8.277-2.85.52L2.02 5.765l3.697-3.697 4.27 3.364-.52 2.849 8.278 8.277ZM10.75 16l2 2L11 19.75l3 3-6.566 6.553a2.13 2.13 0 0 1-3.008 0l-1.805-1.8c-.831-.83-.952-2.424-.121-3.253L10.75 16Z"
      />
    </svg>
  );
};

export default IconInRepairFilled32;
