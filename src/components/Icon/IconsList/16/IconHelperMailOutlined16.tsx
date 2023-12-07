import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconHelperMailOutlined16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8228 4.2H3.17728L8.00004 8.21897L12.8228 4.2ZM2.2016 4.94899C2.20054 4.96585 2.2 4.98286 2.2 5V11C2.2 11.4418 2.55817 11.8 3 11.8H13C13.4418 11.8 13.8 11.4418 13.8 11V5C13.8 4.98289 13.7995 4.9659 13.7984 4.94905L8.38415 9.46093C8.16164 9.64635 7.83844 9.64635 7.61593 9.46093L2.2016 4.94899ZM1 5C1 3.89543 1.89543 3 3 3H13C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelperMailOutlined16;
