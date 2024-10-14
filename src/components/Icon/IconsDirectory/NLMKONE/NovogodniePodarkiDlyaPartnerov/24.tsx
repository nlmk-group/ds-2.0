import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNovogodniePodarkiDlyaPartnerov24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7.73 4.73a1.507 1.507 0 0 0 0 2.132c.71.71 1.782 1.018 2.704 1.138h.583c-.05-1.027-.305-2.42-1.156-3.27a1.507 1.507 0 0 0-2.131 0ZM13.018 8c-.045-1.18-.325-3.266-1.743-4.684A3.507 3.507 0 0 0 6.067 8H5a3 3 0 0 0-3 3v3h1v5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5h1v-3a3 3 0 0 0-3-3h-1.068a3.508 3.508 0 0 0-5.069-4.816c.44.617.75 1.278.966 1.922a2.62 2.62 0 0 1 .309-.376 1.507 1.507 0 0 1 2.13 0c.59.589.59 1.632 0 2.22-.505.506-1.195.845-1.882 1.05h-1.368ZM5 19v-5h6v6H6a1 1 0 0 1-1-1Zm8 1h5a1 1 0 0 0 1-1v-5h-6v6Zm0-8h7v-1a1 1 0 0 0-1-1h-6v2Zm-2-1.944a10 10 0 0 1-.691-.056H5a1 1 0 0 0-1 1v1h7v-1.944Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconNovogodniePodarkiDlyaPartnerov24;
