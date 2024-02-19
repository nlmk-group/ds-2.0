import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21 12c0 4.924-4.076 9-9 9-4.915 0-9-4.076-9-9 0-4.915 4.076-9 8.991-9C16.915 3 21 7.085 21 12Zm-8.78-.759c-.069.049-.136.097-.202.146l.202-.146Zm-.202.146c-.53.402-.9.858-.9 1.628v.114c0 .468.247.697.697.697a.81.81 0 0 0 .425-.106c.187-.111.29-.3.29-.52v-.106c0-.417.207-.702.637-1.024a5.025 5.025 0 0 1 .262-.185c.107-.07.21-.14.31-.21.689-.493 1.155-1.006 1.155-1.925 0-1.473-1.306-2.259-2.797-2.259-.763 0-1.395.181-1.866.464-.465.28-.773.66-.896 1.063-.044.15-.07.29-.07.44 0 .39.308.61.6.61.18 0 .305-.035.405-.095.123-.073.207-.184.306-.314.046-.06.096-.125.153-.191.149-.248.332-.445.554-.578a1.43 1.43 0 0 1 .752-.199c.803 0 1.333.45 1.333 1.13 0 .46-.225.74-.677 1.084-.136.104-.293.214-.47.336m-.928 3.527a.978.978 0 0 1 .504-.139c.52 0 .953.398.953.918 0 .33-.184.617-.453.779a.971.971 0 0 1-.5.139c-.512 0-.953-.415-.953-.918 0-.33.18-.617.45-.779Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelpFilled24;
