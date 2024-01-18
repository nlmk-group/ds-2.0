import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownLeftOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 4C26.5523 4 27 4.44772 27 5V6.88274C27 9.04967 27 10.7373 26.8894 12.0912C26.777 13.4662 26.5456 14.5849 26.0327 15.5917C25.1818 17.2616 23.8241 18.6193 22.1542 19.4702C21.1474 19.9831 20.0287 20.2145 18.6537 20.3269C17.2998 20.4375 15.6121 20.4375 13.4452 20.4375H7.41421L12.2696 25.2929C12.6601 25.6834 12.6601 26.3166 12.2696 26.7071C11.8791 27.0976 11.2459 27.0976 10.8554 26.7071L4.29289 20.1446C3.90237 19.7541 3.90237 19.1209 4.29289 18.7304L10.8554 12.1679C11.2459 11.7774 11.8791 11.7774 12.2696 12.1679C12.6601 12.5584 12.6601 13.1916 12.2696 13.5821L7.41421 18.4375H13.4C15.6217 18.4375 17.2278 18.4367 18.4909 18.3335C19.7422 18.2313 20.5684 18.0335 21.2462 17.6882C22.5398 17.029 23.5915 15.9773 24.2507 14.6837C24.596 14.0059 24.7938 13.1797 24.896 11.9284C24.9992 10.6653 25 9.05921 25 6.8375V5C25 4.44772 25.4477 4 26 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownLeftOutlined32;
