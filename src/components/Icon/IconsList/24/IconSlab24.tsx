import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSlab24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6027 3.47326C13.8332 3.34205 14.1157 3.34226 14.346 3.47382L19.8723 6.63171C20.106 6.76524 20.2502 7.01375 20.2502 7.28289V10.9397C20.2503 10.946 20.2503 10.9523 20.2502 10.9586V14.3092C20.2502 14.5791 20.1051 14.8282 19.8704 14.9615L10.1335 20.4878C9.89831 20.6213 9.60941 20.6178 9.37747 20.4786L4.11431 17.3208C3.88841 17.1852 3.75018 16.9411 3.75018 16.6776V13.3341C3.74994 13.3231 3.74994 13.312 3.75018 13.301V9.51974C3.75018 9.25019 3.89482 9.00138 4.12905 8.868L13.6027 3.47326ZM5.25018 14.6429V16.253L9.77384 18.9672L18.7502 13.8725V12.2379L10.1335 17.1284C9.89824 17.2619 9.60934 17.2584 9.3774 17.1193L5.25018 14.6429ZM18.7502 10.5131L9.77377 15.6078L5.25018 12.8937V9.95573L13.9732 4.98844L18.3284 7.47711L9.79539 12.2234L6.75028 10.2L6.75018 12L9.3518 13.7264C9.58507 13.8795 9.88404 13.8905 10.1279 13.7548L18.7502 8.95892V10.5131Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlab24;
