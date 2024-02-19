import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.026 13.611c3.268 0 5.974-2.599 5.974-5.737 0-1.31-.474-2.526-1.265-3.499l.457-.444a.66.66 0 0 0 .21-.456c0-.315-.263-.568-.603-.568a.65.65 0 0 0-.48.185l-.445.422A6.077 6.077 0 0 0 8.647 2.17v-.551A.622.622 0 0 0 8.02 1a.63.63 0 0 0-.626.619v.551c-2.981.31-5.341 2.773-5.341 5.704 0 3.138 2.711 5.737 5.973 5.737Zm0-.956c-2.764 0-4.972-2.126-4.972-4.781 0-2.65 2.202-4.782 4.966-4.782 2.765 0 4.979 2.132 4.984 4.782.006 2.655-2.213 4.78-4.978 4.78Zm0-3.87c.522 0 .943-.405.943-.906a.899.899 0 0 0-.539-.815V4.268c0-.22-.181-.388-.41-.388a.39.39 0 0 0-.404.388v2.79c-.322.163-.533.467-.533.821 0 .5.416.906.943.906Z"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisOutlined16;
