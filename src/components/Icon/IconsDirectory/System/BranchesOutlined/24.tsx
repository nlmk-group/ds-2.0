import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBranchesOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.002 13H2v-2h5c1.017 0 1.754-.167 2.213-.5a9.42 9.42 0 0 0 1.412-1.3c.633-.7 1.454-1.4 2.463-2.1 1.008-.7 2.704-1.067 5.087-1.1L16.6 4.4 18 3l4 4-4 4-1.4-1.425L18.175 8c-1.917.033-3.258.308-4.025.825a11.389 11.389 0 0 0-2.025 1.725c-.233.25-.47.496-.713.737-.09.09-.185.18-.285.269h.001a8.302 8.302 0 0 1-.553.444 8.404 8.404 0 0 1 .553.444h-.001c.1.09.195.178.285.268.242.242.48.488.713.738a11.392 11.392 0 0 0 2.025 1.725c.767.517 2.108.792 4.025.825L16.6 14.425 18 13l4 4-4 4-1.4-1.4 1.575-1.6c-2.383-.033-4.08-.4-5.088-1.1-1.008-.7-1.829-1.4-2.462-2.1a9.421 9.421 0 0 0-1.412-1.3c-.458-.333-1.195-.5-2.21-.5Z"
      />
    </svg>
  );
};

export default IconBranchesOutlined24;
