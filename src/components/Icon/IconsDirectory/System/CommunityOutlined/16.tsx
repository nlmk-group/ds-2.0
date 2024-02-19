import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommunityOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M4.667 2a2.333 2.333 0 1 0-.002 4.665A2.333 2.333 0 0 0 4.667 2Zm0 1.167a1.17 1.17 0 0 1 1.166 1.166A1.17 1.17 0 0 1 4.667 5.5 1.17 1.17 0 0 1 3.5 4.333a1.17 1.17 0 0 1 1.167-1.166ZM11.333 2a2.333 2.333 0 1 0 0 4.665 2.333 2.333 0 0 0 0-4.665Zm0 1.167A1.17 1.17 0 0 1 12.5 4.333 1.17 1.17 0 0 1 11.333 5.5a1.17 1.17 0 0 1-1.166-1.167 1.17 1.17 0 0 1 1.166-1.166ZM8 6a2.333 2.333 0 1 0-.001 4.665A2.333 2.333 0 0 0 8 6Zm0 1.167a1.17 1.17 0 0 1 1.167 1.166A1.17 1.17 0 0 1 8 9.5a1.17 1.17 0 0 1-1.167-1.167A1.17 1.17 0 0 1 8 7.167Zm0 4.083c-1.558 0-4.667.782-4.667 2.333v1.75h9.334v-1.75c0-1.551-3.11-2.333-4.667-2.333Zm0 1.167c1.575 0 3.383.752 3.5 1.166v.584h-7v-.578c.117-.42 1.925-1.172 3.5-1.172Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M5.022 10.167H1.167v-.578c.116-.42 1.925-1.172 3.5-1.172h.009c.03-.411.135-.802.301-1.158a5.518 5.518 0 0 0-.31-.009C3.109 7.25 0 8.032 0 9.583v1.75h3.24a5.864 5.864 0 0 1 1.347-.736c.183-.073.37-.14.562-.202a3.315 3.315 0 0 1-.127-.228Zm7.738 1.166H16v-1.75c0-1.551-3.11-2.333-4.667-2.333-.098 0-.201.003-.31.01.166.355.27.746.301 1.157h.01c1.574 0 3.383.752 3.5 1.166v.584h-3.856c-.04.078-.082.154-.127.228.191.062.38.129.562.202.454.182.929.421 1.347.736Z"
      />
    </svg>
  );
};

export default IconCommunityOutlined16;
