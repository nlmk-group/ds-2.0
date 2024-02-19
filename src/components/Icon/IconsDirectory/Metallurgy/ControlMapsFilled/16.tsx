import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.456 12.339a1.79 1.79 0 0 0-.688-1.409l-.172-4.177c.425-.327.7-.844.7-1.422 0-.972-.783-1.778-1.762-1.778-.453 0-.86.17-1.17.446L8.127 3.1a1.774 1.774 0 0 0-1.674-1.217 1.781 1.781 0 0 0-1.53 2.68L3.052 8.202a1.781 1.781 0 0 0 .264 3.54c.483 0 .921-.2 1.238-.517l6.573 1.948c.297.56.886.944 1.564.944.975 0 1.766-.802 1.766-1.778Zm-2.908-5.527.145 4.054a1.814 1.814 0 0 0-.304.265L4.913 9.207a1.76 1.76 0 0 0-.019-.04l1.909-3.754c.27-.056.517-.175.726-.34l3.365.937c.135.328.364.607.654.802Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconControlMapsFilled16;
