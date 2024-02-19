import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCheckDoneOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 8.121c0 2.277-1.79 4.121-4 4.121s-4-1.844-4-4.12C7 5.843 8.79 4 11 4s4 1.844 4 4.121Zm-2 0c0-1.133-.9-2.06-2-2.06s-2 .927-2 2.06c0 1.134.9 2.06 2 2.06s2-.926 2-2.06ZM5 18.424c.2-.649 2.57-1.73 4.96-1.998L12 14.364a9.072 9.072 0 0 0-1-.062c-2.67 0-8 1.38-8 4.121v2.06h9l-2-2.06H5Zm10.47-.34 5.13-5.326L22 14.21 15.47 21 12 17.394l1.4-1.453 2.07 2.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCheckDoneOutlined24;
