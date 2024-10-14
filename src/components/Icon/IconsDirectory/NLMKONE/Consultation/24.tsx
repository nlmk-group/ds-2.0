import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconConsultation24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M10.084 2.998h10c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2v3c0 .39-.23.75-.59.91-.13.06-.27.09-.41.09-.24 0-.47-.08-.66-.25l-4.22-3.75h-4.12c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2Zm9 9h1v-7h-10v7h4.5c.24 0 .48.09.66.25l2.84 2.52v-1.77c0-.55.45-1 1-1Zm-8 5h1v-1h2v1c0 1.1-.9 2-2 2v2a1 1 0 0 1-.55.89c-.14.07-.3.11-.45.11-.21 0-.42-.07-.6-.2l-3.73-2.8h-2.67c-1.1 0-2-.9-2-2v-5c0-1.1.9-2 2-2h2v2h-2v5h3c.22 0 .43.07.6.2l2.4 1.8v-1c0-.55.45-1 1-1Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconConsultation24;
