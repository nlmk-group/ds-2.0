import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFullScreenExitCloseFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.857 0H4.714v4.714H0v5.143h9.857V0Zm9.429 0h-5.143v9.857H24V4.714h-4.714V0ZM9.857 14.143H0v5.143h4.714V24h5.143v-9.857Zm14.143 0h-9.857V24h5.143v-4.714H24v-5.143Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullScreenExitCloseFilled24;
