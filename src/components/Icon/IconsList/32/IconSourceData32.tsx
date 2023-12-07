import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSourceData32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <mask
        id="masked"
        maskUnits="userSpaceOnUse"
        x="2"
        y="4"
        width="16"
        height="16"
        className={styles.mask}
      >
        <path
          d="M7.5 14.7376C7.5 8.8074 12.201 4 18 4H2V19.8508H8.03354C7.68976 18.4517 7.5 16.7592 7.5 14.7376Z"
          fill={htmlColor || 'currentColor'}
        />
      </mask>
      <g mask="url(#masked)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 5.47168H17V7.64168H2V5.47168ZM10 12.7549H2V10.5849H10V12.7549ZM2 17.8681H10V15.6981H2V17.8681Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.085 14.7376C12.085 14.4105 12.1101 14.0898 12.1583 13.7774L18 13.7774V11.6074L12.9293 11.6074C13.9681 9.83823 15.8593 8.66414 18 8.66414C21.244 8.66414 23.915 11.3603 23.915 14.7376C23.915 18.1148 21.244 20.811 18 20.811C16.3052 20.811 14.7668 20.0751 13.684 18.8906L18 18.8906V16.7206L12.4068 16.7206C12.1984 16.1002 12.085 15.4334 12.085 14.7376ZM11 18.8638C10.3095 17.648 9.91504 16.2375 9.91504 14.7376C9.91504 10.2079 13.5121 6.49414 18 6.49414C22.488 6.49414 26.085 10.2079 26.085 14.7376C26.085 16.7271 25.3911 18.5592 24.2326 19.9884L29.5725 25.4491C30.1517 26.0414 30.1411 26.9911 29.5488 27.5703C28.9565 28.1495 28.0068 28.1389 27.4276 27.5466L21.9424 21.9372C20.7782 22.6015 19.4346 22.981 18 22.981C15.0091 22.981 12.4139 21.3316 11.0153 18.8906H11V18.8638Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSourceData32;
