import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTrendIndicatorDown24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.98607 6.12873C3.74058 5.93775 3.39083 5.9617 3.17365 6.18436C2.95647 6.40702 2.94117 6.75733 3.13811 6.99808L8.63682 13.7202C8.84066 13.9694 9.20285 14.0177 9.4648 13.8305L13.2947 11.0943L16.3016 14.4779L14.7815 15.9979C14.412 16.3674 14.6732 17 15.1954 17H21.3542C21.6777 17 21.94 16.7373 21.94 16.4132V10.2547C21.94 9.7322 21.3095 9.47027 20.9404 9.83943L19.3676 11.4121L13.7776 6.75275C13.5485 6.56185 13.2152 6.56416 12.9888 6.75823L9.09091 10.1001L3.98607 6.12873Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTrendIndicatorDown24;
