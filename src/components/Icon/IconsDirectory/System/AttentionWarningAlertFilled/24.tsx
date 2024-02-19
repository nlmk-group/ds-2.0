import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m13.364 3.486 9.502 16.055a.955.955 0 0 1 0 .973.986.986 0 0 1-.365.356c-.151.085-.323.13-.498.13H2.998c-.176 0-.348-.045-.5-.13a.986.986 0 0 1-.364-.357.955.955 0 0 1 0-.973l9.502-16.054a.986.986 0 0 1 .365-.356 1.017 1.017 0 0 1 1.363.356Zm-1.862 12.65v1.945h1.995v-1.946h-1.995Zm0-6.812v4.865h1.995V9.324h-1.995Z"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertFilled24;
