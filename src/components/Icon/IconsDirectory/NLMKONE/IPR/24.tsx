import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIPR24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M11.166 14.726a1.948 1.948 0 1 0 0-3.897 1.948 1.948 0 0 0 0 3.897Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M15.47.305a1 1 0 0 0-1.448.012l-1.873 2.002a1 1 0 0 0 1.46 1.366l.13-.139v1.689a6.337 6.337 0 0 0-2.573-.547c-4.321 0-7.749 3.652-7.749 8.06 0 1.93.744 4.005 2.203 5.522v4.525a1 1 0 0 0 1 1h6.19a1 1 0 0 0 1-1v-.703h2.674a1 1 0 0 0 1-1v-2.75h1.9a1 1 0 0 0 .915-1.407l-.179-.402a683.623 683.623 0 0 1-1.44-3.273c-.048-2.104-.814-4.183-2.076-5.765a8.415 8.415 0 0 0-.865-.932V3.458l.232.24a1 1 0 1 0 1.437-1.391L15.471.305Zm-1.73 7.211c-.775-.53-1.65-.828-2.574-.828-3.133 0-5.749 2.67-5.749 6.06 0 2.051 1.113 4.236 3.109 5.202a1 1 0 1 1-.871 1.8l-.035-.017v2.062h4.19v-.703a1 1 0 0 1 1-1h2.674v-2.75a1 1 0 0 1 1-1h1.364a361.32 361.32 0 0 1-1.083-2.472 1.001 1.001 0 0 1-.082-.397c0-1.284-.345-2.57-.944-3.673v3.14h-.01c-.08 2.563-2.093 4.615-4.563 4.615-2.522 0-4.566-2.139-4.566-4.777C6.6 10.139 8.644 8 11.166 8c.954 0 1.84.306 2.573.83V7.516Zm-.008 5.262c0 1.62-1.233 2.777-2.566 2.777-1.333 0-2.566-1.158-2.566-2.777C8.6 11.158 9.833 10 11.166 10c1.333 0 2.566 1.157 2.566 2.777Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIPR24;
