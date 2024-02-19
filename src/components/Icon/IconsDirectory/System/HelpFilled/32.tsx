import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28 16c0 6.565-5.435 12-12 12-6.553 0-12-5.435-12-12C4 9.447 9.435 4 15.988 4 22.553 4 28 9.447 28 16Zm-11.706-1.012c-.093.065-.183.13-.27.195l.27-.195Zm-.27.195c-.706.536-1.2 1.143-1.2 2.17v.153c0 .623.329.93.929.93.226 0 .417-.052.567-.142a.784.784 0 0 0 .386-.694v-.141c0-.556.276-.936.85-1.366a6.796 6.796 0 0 1 .35-.246c.143-.094.28-.187.411-.281.92-.656 1.542-1.341 1.542-2.566 0-1.965-1.741-3.012-3.73-3.012-1.017 0-1.86.241-2.487.619-.62.373-1.031.879-1.195 1.417a2.04 2.04 0 0 0-.094.588c0 .518.412.812.8.812.24 0 .407-.047.54-.127.164-.098.277-.245.409-.418a5.19 5.19 0 0 1 .204-.255 2.19 2.19 0 0 1 .737-.771 1.907 1.907 0 0 1 1.004-.265c1.07 0 1.776.6 1.776 1.506 0 .615-.298.987-.901 1.446-.182.139-.391.285-.628.448m-1.236 4.703c.195-.117.426-.185.671-.185.695 0 1.27.53 1.27 1.224 0 .44-.245.823-.603 1.038a1.295 1.295 0 0 1-.667.185c-.682 0-1.27-.553-1.27-1.223 0-.442.24-.824.599-1.039Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelpFilled32;
