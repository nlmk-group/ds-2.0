import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownRightOutlined32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C5.55228 4 6 4.44772 6 5V6.8375C6 9.05921 6.00078 10.6653 6.10397 11.9284C6.20621 13.1797 6.40397 14.0059 6.74933 14.6837C7.40846 15.9773 8.4602 17.029 9.75382 17.6882C10.4316 18.0335 11.2578 18.2313 12.5091 18.3335C13.7722 18.4367 15.3783 18.4375 17.6 18.4375H23.5858L18.7304 13.5821C18.3399 13.1916 18.3399 12.5584 18.7304 12.1679C19.1209 11.7774 19.7541 11.7774 20.1446 12.1679L26.7071 18.7304C27.0976 19.1209 27.0976 19.7541 26.7071 20.1446L20.1446 26.7071C19.7541 27.0976 19.1209 27.0976 18.7304 26.7071C18.3399 26.3166 18.3399 25.6834 18.7304 25.2929L23.5858 20.4375H17.5548C15.3879 20.4375 13.7002 20.4375 12.3463 20.3269C10.9713 20.2145 9.85258 19.9831 8.84583 19.4702C7.1759 18.6193 5.81819 17.2616 4.96732 15.5917C4.45435 14.5849 4.22295 13.4662 4.11061 12.0912C3.99999 10.7373 3.99999 9.04966 4 6.88271V5C4 4.44772 4.44772 4 5 4Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined32;
