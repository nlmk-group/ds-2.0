import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportCheckedFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M13 15H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2.044a1.248 1.248 0 0 1 1.081-.625h.625c0-.414.56-.75 1.25-.75s1.25.336 1.25.75h.625A1.249 1.249 0 0 1 10.956 2H13a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1ZM5.75 3c.188.438.502 1 1.125 1h2.25c.636 0 .94-.558 1.125-1h-4.5Zm5.037 4.185L7.782 10.19 5.838 8.246l-.973.972 2.917 2.917 3.978-3.978-.973-.972Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportCheckedFilled16;
