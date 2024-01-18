import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconFormatLineSpacingOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M8.70732 9.43902H11.878L7.43902 5L3 9.43902H6.17073V22.122H3L7.43902 26.561L11.878 22.122H8.70732V9.43902ZM13.7805 6.90244V9.43902H29V6.90244H13.7805ZM13.7805 24.6585H29V22.122H13.7805V24.6585ZM13.7805 17.0488H29V14.5122H13.7805V17.0488Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined32;
