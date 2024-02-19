import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommunityOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7 3a3.499 3.499 0 0 0-3.5 3.5C3.5 8.434 5.066 10 7 10s3.5-1.566 3.5-3.5S8.934 3 7 3Zm0 1.75c.963 0 1.75.787 1.75 1.75S7.963 8.25 7 8.25 5.25 7.463 5.25 6.5 6.037 4.75 7 4.75ZM17 3a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S18.934 3 17 3Zm0 1.75c.962 0 1.75.787 1.75 1.75S17.962 8.25 17 8.25s-1.75-.787-1.75-1.75.788-1.75 1.75-1.75ZM12 9a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S13.934 9 12 9Zm0 1.75c.963 0 1.75.787 1.75 1.75s-.787 1.75-1.75 1.75-1.75-.787-1.75-1.75.787-1.75 1.75-1.75Zm0 6.125c-2.336 0-7 1.172-7 3.5V23h14v-2.625c0-2.328-4.664-3.5-7-3.5Zm0 1.75c2.363 0 5.075 1.129 5.25 1.75v.875H6.75v-.866c.175-.63 2.887-1.759 5.25-1.759Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.533 15.25H1.75v-.866c.175-.63 2.888-1.759 5.25-1.759h.014a4.972 4.972 0 0 1 .452-1.736A8.223 8.223 0 0 0 7 10.875c-2.336 0-7 1.172-7 3.5V17h4.86c.627-.473 1.34-.832 2.02-1.104.275-.11.557-.211.843-.304a4.991 4.991 0 0 1-.19-.342ZM19.14 17H24v-2.625c0-2.328-4.664-3.5-7-3.5a8.22 8.22 0 0 0-.466.014c.25.534.407 1.12.452 1.736H17c2.363 0 5.075 1.129 5.25 1.75v.875h-5.783a5.02 5.02 0 0 1-.19.342c.286.093.569.194.843.304.68.272 1.393.631 2.02 1.104Z"
      />
    </svg>
  );
};

export default IconCommunityOutlined24;
