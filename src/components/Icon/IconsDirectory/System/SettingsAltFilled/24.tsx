import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingsAltFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M18.17 12c0 .272-.025.528-.057.784l1.735 1.32c.156.12.197.336.099.512l-1.645 2.768a.41.41 0 0 1-.354.2.478.478 0 0 1-.148-.024l-2.048-.8a6.365 6.365 0 0 1-1.39.784l-.312 2.12a.398.398 0 0 1-.403.336h-3.29a.398.398 0 0 1-.403-.336l-.313-2.12a6.052 6.052 0 0 1-1.39-.784l-2.047.8a.394.394 0 0 1-.14.024.413.413 0 0 1-.362-.2l-1.645-2.768a.396.396 0 0 1 .099-.512l1.735-1.32A6.174 6.174 0 0 1 5.833 12c0-.264.025-.528.058-.784l-1.735-1.32a.387.387 0 0 1-.099-.512l1.645-2.768a.423.423 0 0 1 .502-.176l2.047.8a6.364 6.364 0 0 1 1.39-.784l.313-2.12A.398.398 0 0 1 10.357 4h3.29c.205 0 .378.144.403.336l.312 2.12c.502.2.963.464 1.39.784l2.048-.8a.424.424 0 0 1 .502.176l1.645 2.768a.396.396 0 0 1-.1.512l-1.734 1.32c.032.256.057.512.057.784Zm-6.168-3.2c-1.818 0-3.29 1.432-3.29 3.2 0 1.768 1.472 3.2 3.29 3.2 1.817 0 3.29-1.432 3.29-3.2 0-1.768-1.473-3.2-3.29-3.2ZM10.357 12c0 .88.74 1.6 1.645 1.6.904 0 1.645-.72 1.645-1.6 0-.88-.74-1.6-1.645-1.6s-1.645.72-1.645 1.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingsAltFilled24;
