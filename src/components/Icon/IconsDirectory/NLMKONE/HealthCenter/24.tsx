import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHealthCenter24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15.563 8.161c1.719-1.496 4.363-1.517 6.003-.23.86.674 1.428 1.698 1.434 2.979.006 1.248-.521 2.64-1.62 4.128-2.123 2.875-5.411 6.572-9.38 6.46-4.024.115-7.202-3.51-9.38-6.46C1.52 13.549.994 12.158 1 10.91c.006-1.28.573-2.305 1.434-2.98 1.64-1.286 4.284-1.265 6.002.231A201.438 201.438 0 0 0 12 11.197c.729-.604 1.955-1.634 3.564-3.036ZM7.123 9.67c-1.003-.873-2.578-.852-3.455-.165-.399.313-.665.77-.668 1.415-.003.676.287 1.654 1.229 2.93 1.773 2.403 4.428 5.735 7.77 5.648 3.22.087 5.801-3.005 7.57-5.378-1.957 1.575-4.91 1.554-7.567-.336l-.003.002-.04-.033c-.016-.012-.034-.023-.05-.036l.002-.003-.544-.444a182.908 182.908 0 0 1-4.244-3.6Z"
        clipRule="evenodd"
      />
      <path fill={htmlColor || 'currentColor'} d="M12 1a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z" />
    </svg>
  );
};

export default IconHealthCenter24;
