import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconRightColumnArrowFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 15V2h-2.556v13H16Zm-7.222-2.323L13.109 8.5 8.778 4.323V7.25H1v2.5h7.778v2.927Z"
      />
    </svg>
  );
};

export default IconRightColumnArrowFilled16;
