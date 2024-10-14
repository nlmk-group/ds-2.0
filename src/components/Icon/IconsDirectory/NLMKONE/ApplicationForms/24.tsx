import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconApplicationForms24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M5.2 1.2a2.2 2.2 0 0 0-2.202 2.202v17.604c0 1.212.99 2.196 2.202 2.196h9.198l6.594-6.618V3.402A2.198 2.198 0 0 0 18.796 1.2H5.2Zm-.204 2.202c0-.114.09-.204.204-.204h13.602c.108 0 .198.09.198.204v11.766h-3.81c-1.218 0-2.202.99-2.202 2.202v3.828H5.2A.201.201 0 0 1 4.996 21V3.402Zm10.188 13.764h2.4l-2.604 2.616V17.37c0-.114.096-.204.204-.204ZM11.002 15.3h.006l-.006-.006v.006Zm-2.604 0h2.604v1.794h-3.51a.899.899 0 0 1-.9-.9v-2.598a3.3 3.3 0 0 1 2.886-3.27 3.108 3.108 0 0 1-.636-1.878c0-1.74 1.416-3.15 3.15-3.15s3.15 1.41 3.15 3.15c0 .708-.24 1.35-.636 1.878a3.312 3.312 0 0 1 2.862 2.88h-1.83a1.494 1.494 0 0 0-1.44-1.104h-4.2a1.5 1.5 0 0 0-1.5 1.5V15.3Zm4.95-6.852c0-.744-.606-1.35-1.35-1.35-.744 0-1.35.606-1.35 1.35 0 .744.606 1.35 1.35 1.35.744 0 1.35-.606 1.35-1.35Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconApplicationForms24;
