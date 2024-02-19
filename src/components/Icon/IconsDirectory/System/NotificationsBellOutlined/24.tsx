import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconNotificationsBellOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.5 22c1.169 0 2.125-.923 2.125-2.051h-4.25c0 1.128.956 2.051 2.125 2.051Zm6.375-6.154v-5.128c0-3.149-1.732-5.785-4.781-6.482v-.698c0-.85-.712-1.538-1.594-1.538-.882 0-1.594.687-1.594 1.538v.698c-3.039.697-4.781 3.323-4.781 6.482v5.128L3 17.897v1.026h17v-1.026l-2.125-2.05Zm-2.125 1.026h-8.5v-6.154c0-2.544 1.604-4.615 4.25-4.615s4.25 2.071 4.25 4.615v6.154Z"
      />
    </svg>
  );
};

export default IconNotificationsBellOutlined24;
