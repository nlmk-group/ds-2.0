import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPlaylistMenuSettingFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M2 17.333h6.721v1.905H2v-1.905Zm0-6.666h8.641v1.904H2v-1.904ZM2 4h19.203v1.905H2V4Zm17.93 8.595 1.11-.372.96 1.65-.88.766a3.79 3.79 0 0 1 0 1.58l.88.766-.96 1.65-1.11-.373a3.835 3.835 0 0 1-1.378.79l-.23 1.139h-1.92l-.23-1.14a3.844 3.844 0 0 1-1.377-.79l-1.11.373-.96-1.65.88-.766a3.796 3.796 0 0 1 0-1.579l-.88-.767.96-1.65 1.11.373a3.834 3.834 0 0 1 1.378-.79l.23-1.138h1.92l.23 1.139c.515.165.983.438 1.377.79Zm-2.567 3.786c.254 0 .498-.1.678-.279a.948.948 0 0 0 0-1.347.964.964 0 0 0-1.358 0 .949.949 0 0 0 0 1.347c.18.179.425.279.68.279Z"
      />
    </svg>
  );
};

export default IconPlaylistMenuSettingFilled24;
