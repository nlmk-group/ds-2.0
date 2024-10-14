import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconIdea24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path d="M10 9.5H8C8 7.01 10.01 5 12.5 5v2A2.5 2.5 0 0 0 10 9.5Z" fill={htmlColor || 'currentColor'} />
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M4 9.5C4 4.55 7.83 1 12.5 1S21 4.55 21 9.5c0 1.39-.28 2.48-.73 3.38-.44.89-1.03 1.54-1.56 2.07a8.17 8.17 0 0 1-.279.28l-.121.12c-.88.86-1.31 1.29-1.31 2.15v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-4c0-.855-.425-1.276-1.267-2.107l-.043-.043a6.987 6.987 0 0 0-.258-.26 16.124 16.124 0 0 1-.142-.14c-.53-.53-1.11-1.18-1.56-2.07-.45-.9-.73-1.99-.73-3.38ZM10 20v1.5h5V20h-5Zm7.29-6.46c.47-.47.89-.94 1.19-1.55.3-.6.52-1.38.52-2.49C19 5.69 16.11 3 12.5 3S6 5.69 6 9.5c0 1.11.22 1.89.52 2.49.31.61.72 1.08 1.19 1.55.11.11.22.22.34.33.85.81 1.95 1.86 1.95 3.63v.5h5v-.5c0-1.77 1.1-2.82 1.95-3.63.061-.061.12-.117.177-.172a9.67 9.67 0 0 0 .163-.158Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconIdea24;
