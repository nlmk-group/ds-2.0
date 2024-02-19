import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m27.333 4-.213.04L20 6.8 12.143 4 4.48 6.533a.672.672 0 0 0-.48.64v20.16a.66.66 0 0 0 .667.667l.213-.04 7.263-2.76L20 28l7.52-2.533a.672.672 0 0 0 .48-.64V4.667A.66.66 0 0 0 27.333 4Zm-14 2.533L19 8.58V25.2l-5.667-1.914V6.533Zm-7.19 1.753 5.143-1.753v16.753L6.143 25.2V8.286Zm19.714 15.428L21.143 25.2V8.714L25.857 7v16.714Z"
      />
    </svg>
  );
};

export default IconMapOutlined32;
