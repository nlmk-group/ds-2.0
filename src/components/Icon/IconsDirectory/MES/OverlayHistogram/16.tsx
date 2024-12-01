import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOverlayHistogram16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m13.123 3.157.398-.386L12.726 2l-.398.386L8.092 6.49 6.504 4.952l-.398-.385-.398.385-3.31 3.208L2 8.546l.796.771.398-.385 2.912-2.823 1.588 1.54.398.385.398-.386 4.633-4.491Zm-1.639 4.828L14 5.578V14h-2.516V7.985ZM5.311 9.348l-2.515 2.647V14H5.31V9.348Zm2.995 1.283L7.1 9.51V14h2.515V9.509L8.306 10.63Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOverlayHistogram16;
