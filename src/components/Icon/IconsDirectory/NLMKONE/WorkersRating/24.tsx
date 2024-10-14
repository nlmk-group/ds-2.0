import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconWorkersRating24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <g clipPath="url(#a)" fill={htmlColor || 'currentColor'} fillRule="evenodd" clipRule="evenodd">
        <path d="M9.876 4.5a3.5 3.5 0 1 0-6.272 2.137 6.28 6.28 0 0 0-3.52 5.643V14a1 1 0 0 0 1 1h3.007a1 1 0 1 0 0-2H2.084v-.72a4.28 4.28 0 0 1 4-4.271v-.021A3.5 3.5 0 0 0 9.876 4.5ZM6.376 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
        <path d="M8.084 10a4 4 0 1 1 6.982 2.665c-.632.708-1.982 1.335-2.982 1.335a5 5 0 0 0-5 5v2h-1a1 1 0 0 1-1-1v-1A7 7 0 0 1 9.1 12.665 3.985 3.985 0 0 1 8.084 10Zm6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
        <path d="M20.564 6.637a6.285 6.285 0 0 1 3.472 4.863h-2.023a4.282 4.282 0 0 0-3.929-3.491v-.021a3.5 3.5 0 1 1 2.48-1.35ZM16.29 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.294 7.5a1 1 0 0 1 .897.557l1.383 2.804 3.095.45a1 1 0 0 1 .554 1.706l-2.24 2.182.53 3.081a1 1 0 0 1-1.451 1.055l-2.768-1.455-2.768 1.455a1 1 0 0 1-1.45-1.055l.528-3.081-2.239-2.183a1 1 0 0 1 .554-1.705l3.095-.45 1.383-2.804a1 1 0 0 1 .897-.557Zm0 3.26-.72 1.458a1 1 0 0 1-.753.547l-1.609.234 1.165 1.135a1 1 0 0 1 .287.885l-.275 1.603 1.44-.757a1 1 0 0 1 .93 0l1.44.757-.275-1.603a1 1 0 0 1 .287-.885l1.165-1.135-1.61-.234a1 1 0 0 1-.752-.547l-.72-1.458Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M.084 0h24v24h-24z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconWorkersRating24;
