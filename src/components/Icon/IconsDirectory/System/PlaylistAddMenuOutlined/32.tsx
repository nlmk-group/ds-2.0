import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistAddMenuOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 6h16.8v2.857H2V6Zm0 5.714h16.8v2.857H2v-2.857Zm22.4 0h-2.8v5.714H16v2.858h5.6V26h2.8v-5.714H30v-2.858h-5.6v-5.714Zm-11.2 8.572H2v-2.858h11.2v2.858Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPlaylistAddMenuOutlined32;
