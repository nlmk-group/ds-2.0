import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconTelegramFilled24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M21.4121 3.24745C21.0746 2.96125 20.5445 2.9203 19.9964 3.14035H19.9955C19.419 3.37165 3.67797 10.1235 3.03717 10.3993C2.92062 10.4398 1.90271 10.8196 2.00756 11.6656C2.10116 12.4284 2.91927 12.7443 3.01917 12.7807L7.02103 14.151C7.28653 15.0348 8.26528 18.2955 8.48173 18.9921C8.61673 19.4263 8.83678 19.9969 9.22244 20.1144C9.56084 20.2449 9.89744 20.1256 10.1152 19.9546L12.5619 17.6853L16.5116 20.7655L16.6056 20.8218C16.8738 20.9406 17.1308 21 17.376 21C17.5655 21 17.7473 20.9645 17.921 20.8933C18.5127 20.6503 18.7494 20.0865 18.7742 20.0226L21.7244 4.6879C21.9044 3.8689 21.6542 3.4522 21.4121 3.24745ZM10.5504 14.6991L9.20039 18.2991L7.85038 13.7991L18.2004 6.14906L10.5504 14.6991Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTelegramFilled24;
