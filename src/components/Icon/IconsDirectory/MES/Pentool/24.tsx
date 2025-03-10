import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPentool24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.3 20h-4.421c-.73 0-1.445-.3-1.951-.82L4 14.104l1.397-1.22a1.364 1.364 0 0 1 1.526-.18l1.627.853V7.188c0-.92.756-1.667 1.687-1.667.115 0 .23.013.345.033A1.68 1.68 0 0 1 12.261 4c.58 0 1.087.287 1.39.727.197-.08.413-.12.635-.12.932 0 1.688.747 1.688 1.667v.187c.108-.02.223-.033.337-.033.932 0 1.688.747 1.688 1.667v9.237C18 18.806 16.792 20 15.3 20Zm-9.356-5.816L9.9 18.253c.256.26.607.413.972.413H15.3c.742 0 1.35-.6 1.35-1.334V8.095a.332.332 0 0 0-.338-.333.332.332 0 0 0-.337.333v3.902h-1.35V6.274a.332.332 0 0 0-.338-.333.332.332 0 0 0-.337.333v5.723H12.6v-6.33a.332.332 0 0 0-.338-.333.332.332 0 0 0-.337.333v6.33h-1.35V7.188a.332.332 0 0 0-.338-.333.336.336 0 0 0-.337.333v8.584l-3.612-1.888-.344.3Z"
      />
    </svg>
  );
};

export default IconPentool24;
