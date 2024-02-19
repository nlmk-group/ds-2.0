import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRoundedArrowForwardFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10.895 4.9H7.474c-2.268 0-4.106 1.746-4.106 3.9s1.838 3.9 4.106 3.9h6.158V14H7.474C4.45 14 2 11.672 2 8.8c0-2.872 2.45-5.2 5.474-5.2h3.42V1L15 4.25 10.895 7.5V4.9Z"
      />
    </svg>
  );
};

export default IconRoundedArrowForwardFilled16;
