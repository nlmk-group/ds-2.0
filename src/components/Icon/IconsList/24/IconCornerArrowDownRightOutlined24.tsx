import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconCornerArrowDownRightOutlined24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3C4.55229 3 5 3.44772 5 4V5.4C5 7.09666 5.00078 8.30901 5.07842 9.25936C5.15512 10.198 5.30179 10.7927 5.54497 11.27C6.02433 12.2108 6.78924 12.9757 7.73005 13.455C8.20732 13.6982 8.80197 13.8449 9.74064 13.9216C10.691 13.9992 11.9033 14 13.6 14H17.5858L14.2929 10.7071C13.9024 10.3166 13.9024 9.68342 14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289L20.7071 14.2929C21.0976 14.6834 21.0976 15.3166 20.7071 15.7071L15.7071 20.7071C15.3166 21.0976 14.6834 21.0976 14.2929 20.7071C13.9024 20.3166 13.9024 19.6834 14.2929 19.2929L17.5858 16H13.5556C11.9131 16 10.6191 16 9.57778 15.9149C8.51543 15.8281 7.62827 15.6478 6.82207 15.237C5.50493 14.5659 4.43407 13.4951 3.76295 12.1779C3.35217 11.3717 3.17186 10.4846 3.08507 9.42222C2.99999 8.38091 2.99999 7.08696 3 5.44441L3 4C3 3.44772 3.44772 3 4 3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconCornerArrowDownRightOutlined24;
