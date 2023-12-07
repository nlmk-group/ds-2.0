import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconMetallurgyKovsh24: FC<IIconsProps> = ({
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
        d="M9.24983 8.6685C8.65871 8.94941 8.25005 9.55197 8.25005 10.25C8.25005 11.2165 9.03355 12 10.0001 12C10.9666 12 11.7501 11.2165 11.7501 10.25C11.7501 9.5518 11.3412 8.9491 10.7498 8.66828L10.75 3.65662L9.33207 2.43213L8.35166 3.56738L8.89905 4.04011L3.88382 9.05534C2.80988 10.1293 2.80989 11.8705 3.88383 12.9444L7.5554 16.616C8.62934 17.6899 10.3705 17.6899 11.4445 16.616L16.4999 11.5605L16.8838 11.9444C17.1182 12.1788 17.2499 12.4968 17.2499 12.8283L17.2499 20.25H16.2501V16H14.7501V20.25H4.00005V21.75H20.0001V20.25H18.7499L18.7499 12.8283C18.7499 12.099 18.4602 11.3995 17.9445 10.8838L15.0303 7.96955L13.9696 9.03021L15.4393 10.4999L10.3838 15.5553C9.89567 16.0435 9.10421 16.0435 8.61606 15.5553L4.94449 11.8838C4.45633 11.3956 4.45633 10.6042 4.94449 10.116L9.2499 5.81058L9.24983 8.6685Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallurgyKovsh24;
