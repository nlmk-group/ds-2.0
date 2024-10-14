import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRecruitmentOfStaff24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          clipPath="evenodd"
          d="M8.333 1.954a.833.833 0 0 0-.833.834v7.333c0 .46.373.833.833.833h7.334c.46 0 .833-.373.833-.833V2.787a.833.833 0 0 0-.833-.833H8.333ZM5.5 2.788A2.833 2.833 0 0 1 8.333-.046h7.334A2.833 2.833 0 0 1 18.5 2.787v7.334a2.833 2.833 0 0 1-2.833 2.833H8.333A2.833 2.833 0 0 1 5.5 10.121V2.787Zm10.294 1.987L11.727 8.84a1 1 0 0 1-1.414 0L8.206 6.734 9.621 5.32l1.4 1.4 3.358-3.36 1.415 1.415ZM4.667 15.795a1.062 1.062 0 1 0 0 2.126 1.062 1.062 0 0 0 0-2.125Zm2.49 2.845a3.062 3.062 0 1 0-4.982 0A4.663 4.663 0 0 0 0 22.588v.458a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-.458c0-1.662-.868-3.12-2.176-3.948a3.062 3.062 0 1 0-4.982 0c-.45.285-.847.644-1.175 1.06a4.692 4.692 0 0 0-1.176-1.06 3.062 3.062 0 1 0-4.982 0c-.45.285-.847.644-1.176 1.06a4.692 4.692 0 0 0-1.175-1.06Zm.121 3.406a2.668 2.668 0 0 0-5.223 0h5.223Zm2.11 0h5.224a2.668 2.668 0 0 0-5.224 0Zm7.334 0h5.223a2.668 2.668 0 0 0-5.223 0ZM12 15.796a1.063 1.063 0 1 0 0 2.125 1.063 1.063 0 0 0 0-2.125Zm7.333 0a1.063 1.063 0 1 0 0 2.125 1.063 1.063 0 0 0 0-2.125Z"
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

export default IconRecruitmentOfStaff24;
