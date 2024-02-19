import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAutoRenewReloadFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.707 6 11.5.793v3.721A8.498 8.498 0 0 0 3.5 13c0 1.67.49 3.221 1.318 4.528l.334.527 2.165-2.165-.177-.328A5.37 5.37 0 0 1 6.5 13c0-2.865 2.2-5.224 5-5.478v3.685L16.707 6Zm2.475 2.472-.334-.527-2.162 2.161.171.326c.406.774.643 1.645.643 2.568 0 2.865-2.2 5.224-5 5.477v-3.684L7.293 20l5.207 5.207v-3.722a8.498 8.498 0 0 0 8-8.485 8.43 8.43 0 0 0-1.318-4.528Z"
      />
    </svg>
  );
};

export default IconAutoRenewReloadFilled24;
