import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAllDoneDoubleCheckOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m14.145 4-6.37 6.312-2.518-2.488-.849.841L7.774 12 15 4.84 14.145 4Zm-2.553.841L10.742 4 6.926 7.782l.85.841 3.817-3.782Zm-7.226 7.16L1 8.664l.855-.84 3.36 3.334-.849.841Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAllDoneDoubleCheckOutlined16;
