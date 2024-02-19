import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTaskOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14 3.908 7.154 10.76 4.61 8.216l.846-.846 1.698 1.698 6-6 .846.84Zm-1.326 3.024c.078.342.126.702.126 1.068 0 2.652-2.148 4.8-4.8 4.8A4.799 4.799 0 0 1 3.2 8c0-2.652 2.148-4.8 4.8-4.8.948 0 1.824.276 2.568.75l.864-.864A5.94 5.94 0 0 0 8 2C4.688 2 2 4.688 2 8s2.688 6 6 6 6-2.688 6-6c0-.714-.132-1.398-.36-2.034l-.966.966Z"
      />
    </svg>
  );
};

export default IconTaskOutlined16;
