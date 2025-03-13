import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarClock32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.5 29.775v-26.1h4.35v-2.9h2.9v2.9h11.6v-2.9h2.9v2.9h4.35v11.129a10.03 10.03 0 0 0-2.9-.87v-1.56H4.4v14.5h9.135c.17.533.369 1.04.599 1.523.23.484.502.943.815 1.378H1.5Zm21.75 1.45c-2.006 0-3.715-.707-5.129-2.122-1.413-1.414-2.12-3.123-2.121-5.128-.001-2.005.706-3.715 2.121-5.129 1.416-1.414 3.125-2.121 5.129-2.121 2.004 0 3.714.707 5.13 2.121 1.416 1.415 2.123 3.124 2.12 5.129-.003 2.005-.71 3.715-2.121 5.13-1.412 1.415-3.121 2.122-5.129 2.12Zm2.429-3.806 1.015-1.015-2.719-2.72v-4.06h-1.45v4.64l3.154 3.155Z"
      />
    </svg>
  );
};

export default IconCalendarClock32;
