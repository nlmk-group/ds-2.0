import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRepairWrenchTo32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m8.293 3.414 4.293 4.293H2v2h10.586L8.293 14l1.414 1.414 6.707-6.707L9.707 2 8.293 3.414Zm12.631 9.35-1.414 1.414 1.414 1.414 1.953 1.953 1.415 1.415 1.414-1.415L27.5 15.75a6.285 6.285 0 0 1-1.694 5.803 6.283 6.283 0 0 1-6.075 1.628l-1.115-.297-.815.815-2.836 2.836a2 2 0 0 1-2.829 0l-.202-.203a2 2 0 0 1 0-2.828l2.835-2.836.816-.816-.297-1.114a6.284 6.284 0 0 1 1.627-6.076 6.285 6.285 0 0 1 5.804-1.694l-1.796 1.796Zm7.193-.458-1.44 1.44-.971.97-1.414 1.415-.54-.539-.875-.875-.539-.54 1.415-1.413.97-.971 1.44-1.44a8.289 8.289 0 0 0-12.808 8.901L10.52 22.09a4 4 0 0 0 0 5.656l.203.203a4 4 0 0 0 5.657 0l2.836-2.836a8.288 8.288 0 0 0 8.901-12.808Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRepairWrenchTo32;
