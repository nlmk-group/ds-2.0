import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAreaChart24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.303 8.31c.75 0 1.364-.576 1.364-1.28 0-.704-.614-1.28-1.364-1.28-.75 0-1.363.576-1.363 1.28 0 .115.013.224.047.326l-2.42 2.279a1.278 1.278 0 0 0-.355-.045c-.122 0-.245.013-.354.045l-1.739-1.632c.034-.103.048-.218.048-.333 0-.704-.614-1.28-1.364-1.28-.75 0-1.363.576-1.363 1.28 0 .115.013.23.047.333l-3.109 2.912a1.23 1.23 0 0 0-.347-.045c-.75 0-1.364.576-1.364 1.28 0 .704.614 1.28 1.364 1.28.75 0 1.363-.576 1.363-1.28 0-.115-.013-.224-.047-.326l3.102-2.919c.109.032.232.045.354.045.123 0 .246-.013.355-.045l1.739 1.632a1.066 1.066 0 0 0-.048.333c0 .704.613 1.28 1.363 1.28s1.364-.576 1.364-1.28c0-.115-.014-.23-.048-.333l2.428-2.272c.109.032.225.045.347.045ZM5.775 17.75l4.429-4.053a1.072 1.072 0 0 1 1.397-.028l2.22 1.87a1.07 1.07 0 0 0 1.456-.087l2.51-2.717c.62-.672 1.795-.26 1.795.629v4.386H5.775Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAreaChart24;
