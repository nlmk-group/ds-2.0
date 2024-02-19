import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommunityFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M7 3a3.499 3.499 0 0 0-3.5 3.5C3.5 8.434 5.066 10 7 10s3.5-1.566 3.5-3.5S8.934 3 7 3Zm10 0a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S18.934 3 17 3Zm-5 6a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S13.934 9 12 9Zm0 7.875c-2.336 0-7 1.172-7 3.5V23h14v-2.625c0-2.328-4.664-3.5-7-3.5Zm-5-6c.147 0 .303.005.466.014A4.984 4.984 0 0 0 7 13c0 .95.264 1.837.723 2.592-.286.093-.568.194-.843.304-.68.272-1.393.631-2.02 1.104H0v-2.625c0-2.328 4.664-3.5 7-3.5ZM19.14 17H24v-2.625c0-2.328-4.664-3.5-7-3.5a8.22 8.22 0 0 0-.466.014c.3.641.466 1.357.466 2.111 0 .95-.264 1.837-.723 2.592.286.093.569.194.843.304.68.272 1.393.631 2.02 1.104Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommunityFilled24;
