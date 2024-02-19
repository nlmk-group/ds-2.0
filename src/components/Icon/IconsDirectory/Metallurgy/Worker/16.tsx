import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorker16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.65 1.4V.5h-1.3v.9a4.151 4.151 0 0 0-3.5 4.1v.35H3.5v1.3h.85V8.5c0 .673.182 1.303.5 1.845v1.738l-3.835 1.761.003.006H1v1.3h14v-1.3h-.017l.002-.006-3.835-1.76v-1.739a3.63 3.63 0 0 0 .5-1.845V7.15h.85v-1.3h-.35V5.5a4.151 4.151 0 0 0-3.5-4.1Zm1.2 10.247A3.633 3.633 0 0 1 8 12.15a3.634 3.634 0 0 1-1.85-.503v1.27l-2.032.933h7.764l-2.032-.933v-1.27ZM5.65 8.5V7.15h4.7V8.5a2.35 2.35 0 1 1-4.7 0Zm1.7-5.775V5h1.3V2.725a2.851 2.851 0 0 1 2.2 2.775v.35h-5.7V5.5c0-1.35.94-2.481 2.2-2.775Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconWorker16;
