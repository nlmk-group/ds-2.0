import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRemovedFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M21 19.5H3A1.5 1.5 0 0 1 1.5 18V6A1.5 1.5 0 0 1 3 4.5h18A1.5 1.5 0 0 1 22.5 6v12a1.5 1.5 0 0 1-1.5 1.5Zm-4.133-9.312c-.493.184-.534 1.135-.707 1.824A5.377 5.377 0 0 0 11.378 9c-2.802 0-5.106 2.222-5.375 5.067-.023.244-.026.933.728.933.733 0 .69-.686.724-.943.265-2.01 1.92-3.557 3.923-3.557a3.928 3.928 0 0 1 3.446 2.101c-.758-.24-1.675-.638-2.068-.115-.438.583-.224.964.42 1.257 1.029.466 1.634.674 2.679 1.047.783.28 1.391-.081 1.545-.868.218-1.119.391-1.632.584-2.8.123-.743-.454-1.181-1.117-.934ZM21.75 3H2.25a.75.75 0 0 1 0-1.5h19.5a.75.75 0 1 1 0 1.5ZM2.25 21h19.5a.75.75 0 1 1 0 1.5H2.25a.75.75 0 1 1 0-1.5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRemovedFilled24;
