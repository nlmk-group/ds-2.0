import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconModelling24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.5 1.25a.75.75 0 0 0-.403.117l-5.5 3.5a.75.75 0 0 0-.347.633v4a.75.75 0 0 0 1.2.6l10-7.5A.75.75 0 0 0 21 1.25h-4.5Zm-4.75 4.662 4.968-3.162h2.032l-7 5.25V5.912Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.194 8.276a.75.75 0 0 0-.724.194L11 12.94 6.53 8.47a.75.75 0 0 0-.724-.194l-4 1.071a.75.75 0 0 0 .388 1.449l3.582-.96 4.694 4.694a.75.75 0 0 0 1.06 0l4.694-4.694 3.582.96a.75.75 0 1 0 .388-1.449l-4-1.071Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.47 12.47a.75.75 0 0 1 .724-.194l4 1.071a.75.75 0 1 1-.388 1.449l-3.582-.96-4.694 4.694a.75.75 0 0 1-1.06 0l-4.694-4.694-3.582.96a.75.75 0 1 1-.388-1.449l4-1.071a.75.75 0 0 1 .725.194L11 16.94l4.469-4.47Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.194 16.276a.75.75 0 0 0-.724.194L11 20.94l-4.47-4.47a.75.75 0 0 0-.724-.194l-4 1.071a.75.75 0 0 0 .388 1.449l3.582-.96 4.694 4.694a.75.75 0 0 0 1.06 0l4.694-4.694 3.582.96a.75.75 0 1 0 .388-1.449l-4-1.071Z"
      />
    </svg>
  );
};

export default IconModelling24;
