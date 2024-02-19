import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPeopleCancelFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.649 11.861c2.389 0 4.324-1.982 4.324-4.43C14.973 4.983 13.038 3 10.649 3c-2.39 0-4.325 1.983-4.325 4.43 0 2.449 1.935 4.431 4.325 4.431Zm-6.487 6.647c.216-.698 2.779-1.861 5.362-2.15l2.206-2.215a9.858 9.858 0 0 0-1.081-.066C7.762 14.077 2 15.56 2 18.507v2.216h9.73l-2.162-2.215H4.162Zm13.514-3.5 2.8-2.87L22 13.7l-2.8 2.87 2.8 2.868L20.476 21l-2.8-2.869-2.8 2.869-1.525-1.562 2.8-2.869-2.8-2.869 1.525-1.561 2.8 2.868Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconPeopleCancelFilled24;
