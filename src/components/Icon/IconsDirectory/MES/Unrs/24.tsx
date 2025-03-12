import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconUnrs24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11 1.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3.167a1 1 0 0 0 .2.6L3.85 8.8a.5.5 0 0 0 .4.2h3.5a.5.5 0 0 0 .4-.2l2.65-3.533a1 1 0 0 0 .2-.6V1.5ZM12 15h11v4H12a8 8 0 0 1-8-8v-1h1.5v1a6.5 6.5 0 0 0 6.5 6.5h2v-1h-2A5.5 5.5 0 0 1 6.5 11v-1H8v1a4 4 0 0 0 4 4Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM22 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM16.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM14 21.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM20.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM18 21.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-1 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconUnrs24;
