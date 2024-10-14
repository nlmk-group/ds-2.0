import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconToRepairFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="m23.183 18.112 5.032-5.03a7.295 7.295 0 0 1 1.05 4.846l.017-.012a7.285 7.285 0 0 1-9.7 5.931l-4.739 4.894a2.028 2.028 0 0 1-2.866 0l-1.721-1.72a2.027 2.027 0 0 1 0-2.866l4.827-4.91a7.95 7.95 0 0 1-.276-1.292A7.295 7.295 0 0 1 25.92 10.79l-5.031 5.03.43 1.863 1.864.43Zm-13.166-4.076L8.13 12.15l2.817-2.817h-8.28V6.667h8.28L8.132 3.85l1.886-1.885L16 8l-5.983 6.036Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconToRepairFilled32;
