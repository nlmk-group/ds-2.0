import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconListAltFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        fill={htmlColor || 'currentColor'}
        d="M3.9 3h16.2c.4 0 .9.4.9.9v16.2c0 .4-.5.9-.9.9H3.9c-.5 0-.9-.5-.9-.9V3.9c0-.5.4-.9.9-.9ZM7 7h2v2H7V7Zm4 0h6v2h-6V7Zm0 4h6v2h-6v-2Zm6 4h-6v2h6v-2Zm-8-4H7v2h2v-2Zm-2 4h2v2H7v-2Z"
      />
    </svg>
  );
};

export default IconListAltFilled24;
