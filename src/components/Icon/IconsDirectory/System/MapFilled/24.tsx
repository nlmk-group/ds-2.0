import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconMapFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M14.267 5.339 10 3.819v15.9l4.266 1.52v-15.9Zm1.569 15.879L20.64 19.6c.21-.07.36-.25.36-.48V4c0-.28-.22-.5-.5-.5l-.16.03-4.504 1.746v15.942ZM3.36 5.4l5.072-1.677v15.934L3.66 21.47l-.16.03c-.28 0-.5-.22-.5-.5V5.88c0-.23.15-.41.36-.48Z"
      />
    </svg>
  );
};

export default IconMapFilled24;
