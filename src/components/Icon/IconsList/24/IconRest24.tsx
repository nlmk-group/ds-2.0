import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconRest24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 11.1V3H7V6H9V3H11V11.1H9V8H7V11.1H5ZM17 5H19V3H13V5H15V11H17V5ZM7 15L7 21H9L9 15H11V13H9H7H5V15H7ZM13 21V19V18V14V13H14H15H17.1C18.1493 13 19 13.8507 19 14.9V17.1C19 18.1493 18.1493 19 17.1 19H15V21H13ZM15 17H17V15H15V17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRest24;
