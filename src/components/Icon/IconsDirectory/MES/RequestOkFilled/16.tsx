import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRequestOkFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1ZM10.5 3h-5a.5.5 0 1 0 0 1h5a.5.5 0 0 0 0-1ZM5 5.5a.5.5 0 0 0 .5.5h3a.5.5 0 1 0 0-1h-3a.5.5 0 0 0-.5.5Zm5.662 2.435L7.657 10.94 5.713 8.996l-.973.972 2.917 2.917 3.978-3.978-.973-.972Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRequestOkFilled16;
