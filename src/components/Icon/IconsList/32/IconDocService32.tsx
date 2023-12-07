import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconDocService32: FC<IIconsProps> = ({
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
        d="M7.33422 27H24.9843C26.8957 27 28 25.7496 28 23.2728V10.9274C28 8.45065 26.8851 7.21226 24.6658 7.21226H14.5633C13.8413 7.21226 13.4165 7.00787 12.8856 6.50289L12.2379 5.88971C11.537 5.22844 10.9849 5 9.94425 5H6.93071C5.07247 5 4 6.20232 4 8.63099V23.2728C4 25.7616 5.11495 27 7.33422 27ZM6.25325 9.21291C6.25325 8.02262 6.80542 7.42146 7.82479 7.42146H9.49827C10.2097 7.42146 10.6345 7.61383 11.176 8.14285L11.8237 8.74401C12.5139 9.39326 13.0767 9.63373 14.128 9.63373H24.1795C25.2307 9.63373 25.8253 10.271 25.8253 11.5214V12.2428V22.573C25.8253 23.8114 25.2307 24.4487 24.1795 24.4487H7.89912C6.83727 24.4487 6.25325 23.8114 6.25325 22.561V12.2428V9.21291ZM22.353 16.8463L15.2942 16.8463L8.23538 16.8463V14.3713L22.353 14.3713V16.8463ZM8.23532 21.923L18.1177 21.923V19.448L8.23532 19.448V21.923Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconDocService32;
