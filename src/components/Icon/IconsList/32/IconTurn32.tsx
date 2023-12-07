import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTurn32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M20.8617 27.6269C21.0864 27.8618 21.3771 28 21.7206 28C22.4077 28 22.9231 27.4611 22.9231 26.7427C22.9231 26.3972 22.7909 26.0794 22.5795 25.8446L12.9599 16.0069L22.5795 6.16926C22.7909 5.93437 22.9231 5.60276 22.9231 5.27116C22.9231 4.55268 22.4077 4 21.7206 4C21.3771 4 21.0864 4.13817 20.8617 4.37306L10.3964 15.0812C10.1454 15.3022 10 15.6477 10 16.0069C10 16.3523 10.1321 16.6701 10.3832 16.9326L20.8617 27.6269Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTurn32;
