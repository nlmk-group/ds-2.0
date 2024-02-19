import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAttentionWarningAlertOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M22.866 19.54 13.364 3.487A1.002 1.002 0 0 0 12.5 3c-.356 0-.686.185-.864.486L2.134 19.541a.952.952 0 0 0 0 .973c.178.3.507.486.864.486h19.005c.356 0 .685-.186.863-.486a.953.953 0 0 0 0-.973Zm-2.591-.486H4.725L12.5 5.92l7.775 13.135Zm-8.772-2.919h1.995v1.946h-1.995v-1.946Zm1.995-6.81h-1.995v4.864h1.995V9.324Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAttentionWarningAlertOutlined24;
