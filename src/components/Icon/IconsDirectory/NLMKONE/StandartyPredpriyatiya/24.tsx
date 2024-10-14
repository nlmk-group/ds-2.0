import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconStandartyPredpriyatiya24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.315 7.716A2 2 0 0 0 9.4 6.4L6.037 8.247A2 2 0 0 0 5 10v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5c0-.11-.01-.22-.027-.329l-1-6A2 2 0 0 0 16 2h-1a2 2 0 0 0-1.98 1.717l-.623 4.365-.082-.366ZM7 10l3.363-1.847.322 1.441a1.799 1.799 0 0 0 3.535-.138L15 4h1l1 6v5H7v-5Zm4 2v2h2v-2h-2Zm-3 2v-2h2v2H8ZM3 5h7.816l.224-1.566A3.92 3.92 0 0 1 11.127 3H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2.127c.029.112.053.226.073.342L20.222 5H21v14H3V5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconStandartyPredpriyatiya24;
