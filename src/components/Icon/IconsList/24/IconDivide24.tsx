import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDivide24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M4.15725 13.6622H19.9972C20.5936 13.6622 21.0771 13.1569 21.0771 12.5332C21.0771 11.9096 20.5938 11.4041 19.9972 11.4041H4.15725C3.56068 11.4043 3.07715 11.9097 3.07715 12.5332C3.07715 13.1568 3.56068 13.6622 4.15725 13.6622Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M12.0475 8.58205C13.5198 8.58205 14.7174 7.3302 14.7174 5.79102C14.7174 4.25201 13.5198 3 12.0475 3C10.5754 3 9.37733 4.25201 9.37733 5.79102C9.37719 7.33004 10.5751 8.58205 12.0475 8.58205Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M14.7173 18.2091C14.7173 16.6701 13.5197 15.4183 12.0472 15.4183C10.5752 15.4183 9.37719 16.6701 9.37719 18.2091C9.37719 19.7478 10.5748 21 12.0472 21C13.5195 21 14.7173 19.7485 14.7173 18.2091Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDivide24;
