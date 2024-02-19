import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPersonOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 2.75c.963 0 1.75.788 1.75 1.75 0 .963-.787 1.75-1.75 1.75S6.25 5.463 6.25 4.5c0-.962.787-1.75 1.75-1.75Zm0 7.875c2.363 0 5.075 1.129 5.25 1.75v.875H2.75v-.866c.175-.63 2.888-1.759 5.25-1.759ZM8 1a3.499 3.499 0 0 0-3.5 3.5C4.5 6.434 6.066 8 8 8s3.5-1.566 3.5-3.5S9.934 1 8 1Zm0 7.875c-2.336 0-7 1.172-7 3.5V15h14v-2.625c0-2.328-4.664-3.5-7-3.5Z"
      />
    </svg>
  );
};

export default IconPersonOutlined16;
