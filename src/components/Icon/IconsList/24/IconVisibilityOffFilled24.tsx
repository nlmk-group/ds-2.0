import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconVisibilityOffFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.08715 3.87001L3.49715 2.45001L21.2271 20.2L19.8171 21.61L16.3871 18.18C15.0471 18.7 13.5971 19 12.0771 19C7.07715 19 2.80715 15.89 1.07715 11.5C1.84715 9.53001 3.13715 7.83001 4.76715 6.55001L2.08715 3.87001ZM17.0771 11.5C17.0771 8.74001 14.8371 6.50001 12.0771 6.50001C11.5671 6.50001 11.0771 6.60001 10.6071 6.74001L8.43715 4.57001C9.58715 4.20001 10.8071 4.00001 12.0771 4.00001C17.0771 4.00001 21.3471 7.11001 23.0771 11.49C22.3871 13.25 21.2871 14.79 19.8971 16.02L16.8371 12.96C16.9771 12.5 17.0771 12.01 17.0771 11.5ZM12.0771 16.5C9.31715 16.5 7.07715 14.26 7.07715 11.5C7.07715 10.73 7.25715 10 7.56715 9.36001L9.13715 10.93C9.10715 11.11 9.07715 11.3 9.07715 11.5C9.07715 13.16 10.4171 14.5 12.0771 14.5C12.2771 14.5 12.4571 14.47 12.6471 14.43L14.2171 16C13.5671 16.32 12.8471 16.5 12.0771 16.5ZM15.0471 11.17C14.8971 9.77001 13.7971 8.68001 12.4071 8.53001L15.0471 11.17Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconVisibilityOffFilled24;
