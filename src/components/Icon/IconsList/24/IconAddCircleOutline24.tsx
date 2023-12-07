import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconAddCircleOutline24: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.93138 5.42666C1.01971 9.33559 1.0175 15.6571 4.92643 19.5688C8.83536 23.4805 15.1569 23.4827 19.0686 19.5737C22.9802 15.6648 22.9824 9.34328 19.0735 5.43161C15.1646 1.51994 8.84305 1.51772 4.93138 5.42666ZM11.0046 7.84002L11.0033 11.5028L7.34049 11.5015L7.33979 13.4956L11.0026 13.4969L11.0013 17.1597L12.9954 17.1604L12.9966 13.4976L16.6595 13.4989L16.6602 11.5048L12.9973 11.5035L12.9986 7.84072L11.0046 7.84002ZM6.34114 18.1551C9.45839 21.2745 14.5354 21.2763 17.6548 18.159C20.7743 15.0418 20.7761 9.96476 17.6588 6.84533C14.5416 3.72589 9.46453 3.72412 6.3451 6.84136C3.22567 9.95861 3.22389 15.0356 6.34114 18.1551Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconAddCircleOutline24;
