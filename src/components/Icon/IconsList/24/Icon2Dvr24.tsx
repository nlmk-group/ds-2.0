import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const Icon2Dvr24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
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
        d="M4.50016 4.5H19.5002C20.4168 4.5 21.1668 5.25 21.1668 6.16667V16.1667C21.1668 17.0833 20.4168 17.8333 19.5002 17.8333H15.3335V19.35H8.66682V17.8333H4.50016C3.5835 17.8333 2.8335 17.0833 2.8335 16.1667V6.16667C2.8335 5.25 3.5835 4.5 4.50016 4.5ZM4.27513 16.275H19.6126V6.00001H4.27513V16.275ZM17.8336 8.6667H8.66682V10.17H17.8336V8.6667ZM8.66682 12H17.8336V13.5H8.66682V12ZM7.66685 8.6667H6.16686V10.1667H7.66685V8.6667ZM6.16686 12H7.66685V13.5H6.16686V12Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default Icon2Dvr24;
