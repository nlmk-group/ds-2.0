import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRepairWrenchFrom32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.121 3.707 5.83 8h10.585v2H5.83l4.292 4.293-1.414 1.414L2 9l6.707-6.707 1.414 1.414Zm10.803 9.35L19.51 14.47l1.414 1.414 1.954 1.953 1.414 1.414 1.414-1.414 1.796-1.795a6.285 6.285 0 0 1-1.695 5.803 6.283 6.283 0 0 1-6.075 1.628l-1.115-.298-.815.816-2.836 2.836a2 2 0 0 1-2.829 0l-.202-.203a2 2 0 0 1 0-2.828l2.835-2.836.816-.816-.297-1.114a6.283 6.283 0 0 1 1.627-6.076 6.285 6.285 0 0 1 5.804-1.694l-1.796 1.796Zm7.193-.458-1.44 1.44-.971.97-1.414 1.415-.54-.539-.874-.875-.54-.54 1.415-1.413.97-.971 1.44-1.44a8.289 8.289 0 0 0-12.808 8.901l-2.835 2.835a4 4 0 0 0 0 5.657l.203.203a4 4 0 0 0 5.657 0l2.836-2.836a8.289 8.289 0 0 0 8.901-12.808Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconRepairWrenchFrom32;
