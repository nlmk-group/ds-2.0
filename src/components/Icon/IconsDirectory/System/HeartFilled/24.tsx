import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHeartFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.013 22h-.025a.461.461 0 0 1-.28-.094c-.267-.201-6.58-4.968-8.905-8.99l-.01-.016A6.125 6.125 0 0 1 2 9.872C2 6.634 4.488 4 7.547 4c1.77 0 3.415.89 4.453 2.37C13.038 4.89 14.683 4 16.453 4 19.512 4 22 6.634 22 9.872a6.125 6.125 0 0 1-.802 3.045c-2.326 4.02-8.64 8.788-8.907 8.989a.46.46 0 0 1-.278.094Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHeartFilled24;
