import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelperMailOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.823 4.2H3.177L8 8.219 12.823 4.2Zm-10.621.749A.813.813 0 0 0 2.2 5v6a.8.8 0 0 0 .8.8h10a.8.8 0 0 0 .8-.8V5c0-.017 0-.034-.002-.051L8.384 9.461a.6.6 0 0 1-.768 0L2.202 4.949ZM1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHelperMailOutlined16;
