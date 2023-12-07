import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconListAltError24: FC<IIconsProps> = ({
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
      <mask
        id="masked"
        maskUnits="userSpaceOnUse"
        x="0"
        y="-2"
        width="26"
        height="26"
        className={styles.mask}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 11.2916C25.2447 9.88138 26 8.02889 26 6C26 3.97111 25.2447 2.11862 24 0.708351V0H23.2916C21.8814 -1.24473 20.0289 -2 18 -2C15.9711 -2 14.1186 -1.24473 12.7084 0H0V24H24V11.2916ZM12.7084 0C11.0475 1.46589 10 3.61061 10 6C10 10.4183 13.5817 14 18 14C20.3894 14 22.5341 12.9525 24 11.2916V0.708351C23.7788 0.457776 23.5422 0.221162 23.2916 0H12.7084Z"
          fill="black"
        />
      </mask>
      <g mask="url(#masked)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM9 7H7V9H9V7ZM17 7H11V9H17V7ZM17 11H11V13H17V11ZM11 15H17V17H11V15ZM7 11H9V13H7V11ZM9 15H7V17H9V15ZM5 19H19V5H5V19Z"
          fill={htmlColor || 'currentColor'}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0ZM17.2491 2.47119L17.2491 5.99976H18.7491L18.7491 2.47119H17.2491ZM17.9979 7.25028C17.445 7.25057 16.997 7.69904 16.9973 8.25197C16.9976 8.80489 17.4461 9.25289 17.999 9.2526C18.5519 9.25231 18.9999 8.80384 18.9996 8.25091C18.9993 7.69799 18.5509 7.24999 17.9979 7.25028Z"
        fill="#40515E"
      />
    </svg>
  );
};

export default IconListAltError24;
