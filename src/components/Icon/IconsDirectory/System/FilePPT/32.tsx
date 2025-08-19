import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePPT32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M30 9.182v19.09c0 1.5-1.215 2.728-2.7 2.728H5.687C4.202 31 3 29.773 3 28.273l.014-24.545C3.014 2.228 4.215 1 5.7 1h16.2L30 9.182ZM5.7 28.272h21.6V10.547h-4.725A2.036 2.036 0 0 1 20.55 8.5V3.728H5.7v24.545Zm9.484-16.232a6.688 6.688 0 0 1 3.899.388 6.766 6.766 0 0 1 3.03 2.511 6.867 6.867 0 0 1 1.137 3.788 6.85 6.85 0 0 1-1.977 4.822 6.717 6.717 0 0 1-4.773 1.997c-1.335 0-2.64-.4-3.75-1.15a6.804 6.804 0 0 1-2.486-3.06 6.883 6.883 0 0 1-.384-3.938 6.84 6.84 0 0 1 1.847-3.492 6.733 6.733 0 0 1 3.457-1.866Zm.352 1.917a4.797 4.797 0 0 0-1.715.72 4.86 4.86 0 0 0-1.775 2.186 4.92 4.92 0 0 0-.274 2.815 4.885 4.885 0 0 0 1.319 2.493 4.807 4.807 0 0 0 2.469 1.333 4.776 4.776 0 0 0 2.785-.277 4.834 4.834 0 0 0 2.164-1.794 4.894 4.894 0 0 0 .713-1.732H16.5a.959.959 0 0 1-.682-.285.979.979 0 0 1-.282-.689v-4.77Zm1.928 3.796h3.76a4.886 4.886 0 0 0-1.315-2.47 4.808 4.808 0 0 0-2.445-1.328v3.798Z"
      />
    </svg>
  );
};

export default IconFilePPT32;
