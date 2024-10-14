import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconShkolaFinansovojGramotnosti24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4.347 6.055 9 3.995l4.653 2.06L9 8.382 4.347 6.055Zm5.325-3.949a1.66 1.66 0 0 0-1.344 0L1.98 4.916c-.927.41-.958 1.713-.051 2.166L4.022 8.13v2.892c0 .618.344 1.185.891 1.471l3.32 1.735a1.66 1.66 0 0 0 1.533.002l3.34-1.736a1.66 1.66 0 0 0 .895-1.473V8.117l1-.5V9.3a1 1 0 1 0 2 0V6a1 1 0 0 0-.785-.977 1.249 1.249 0 0 0-.196-.108L9.672 2.106Zm-3.65 8.71V9.128l2.236 1.117a1.66 1.66 0 0 0 1.484 0l2.26-1.129v1.697l-3 1.558-2.98-1.557Zm16.66.39-6.473 6.5a1 1 0 0 1-1.412.005l-1.292-1.278L9.922 20H22v2H4a2 2 0 0 1-2-2v-5h2v5h3.087l5.71-5.685a1 1 0 0 1 1.41-.002l1.288 1.275 5.77-5.794 1.417 1.412Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconShkolaFinansovojGramotnosti24;
