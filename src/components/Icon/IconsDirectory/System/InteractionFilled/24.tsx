import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconInteractionFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12 3.12H6.87c-.927 0-1.685.809-1.685 1.797V19.29c0 .988.75 1.797 1.676 1.797h10.115c.926 0 1.684-.809 1.684-1.797V10.5H12V3.12Zm-3.446 8.983h6.737V13.9H8.554v-1.797Zm0 3.594h6.737v1.796H8.554v-1.796Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M18.65 8.5 14 3.54V8.5h4.65Z" />
    </svg>
  );
};

export default IconInteractionFilled24;
