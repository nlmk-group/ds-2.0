import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEyeglassesFill24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7 9.252a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm3.281.684a3.75 3.75 0 0 0-6.98 1.191h-.676a.625.625 0 1 0 0 1.25h.676a3.75 3.75 0 0 0 7.449-.625 1.25 1.25 0 0 1 2.5 0 3.75 3.75 0 0 0 7.449.625h.676a.625.625 0 0 0 0-1.25h-.676a3.75 3.75 0 0 0-6.98-1.191A2.492 2.492 0 0 0 12 9.252c-.665 0-1.27.26-1.719.684Zm9.219 1.816a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      />
    </svg>
  );
};

export default IconEyeglassesFill24;
