import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRecognitionProgram24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M12 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm-9 7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm9-5.5a1 1 0 0 1 .841.46l1.324 2.06 2.369.622a1 1 0 0 1 .52 1.6l-1.551 1.896.14 2.445a1 1 0 0 1-1.361.99L12 13.682l-2.282.89a1 1 0 0 1-1.361-.99l.14-2.445-1.55-1.895a1 1 0 0 1 .52-1.6l2.368-.623 1.324-2.06A1 1 0 0 1 12 4.5Zm0 2.85-.693 1.079a1 1 0 0 1-.587.427l-1.24.325.812.992a1 1 0 0 1 .224.69l-.073 1.28 1.194-.465a1 1 0 0 1 .726 0l1.194.466-.073-1.28a1 1 0 0 1 .224-.69l.812-.993-1.24-.325a1 1 0 0 1-.587-.427L12 7.35ZM6 23v-3.5h2v2.185l3.733-1.033a1 1 0 0 1 .534 0L16 21.685V19.5h2V23a1 1 0 0 1-1.267.964L12 22.653l-4.733 1.31A1 1 0 0 1 6 23Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconRecognitionProgram24;
