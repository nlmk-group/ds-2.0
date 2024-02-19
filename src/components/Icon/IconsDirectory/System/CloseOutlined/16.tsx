import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCloseOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7.086 8.114 4 11.2l.8.8 3.086-3.086L8 8.8l.114.114L11.2 12l.8-.8-3.086-3.086L8.8 8l.114-.114.258-.257L12 4.8l-.8-.8-3.086 3.086L8 7.2l-.114-.114-.257-.257L4.8 4l-.8.8 3.086 3.086L7.2 8l-.114.114Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCloseOutlined16;
