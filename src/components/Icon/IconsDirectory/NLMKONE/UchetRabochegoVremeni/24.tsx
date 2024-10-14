import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUchetRabochegoVremeni24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm6 1V7h2v2h2v2h-4ZM7.5 21v-2h-5v2h5Zm7 0v-2h-5v2h5Zm2 0v-2h5v2h-5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUchetRabochegoVremeni24;
