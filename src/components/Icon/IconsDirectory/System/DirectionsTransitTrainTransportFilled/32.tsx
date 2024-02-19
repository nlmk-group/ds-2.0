import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectionsTransitTrainTransportFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.933 26.368L25.333 28.342V29H6.667V28.342L9.067 26.368H6.667C5.787 26.368 5.073 25.962 4.571 25.402C4.071 24.842 3.667 24.13 3.667 23.737V9.263C3.667 7.867 4.229 6.529 5.229 5.542C6.229 4.555 7.567 4 9.333 4H22.667C24.433 4 25.771 4.555 26.771 5.542C27.771 6.529 28.333 7.867 28.333 9.263V23.737C28.333 24.13 27.929 24.842 27.429 25.402C26.929 25.962 26.215 26.368 25.333 26.368H22.933ZM6.667 9.263V14.526H25.333V9.263H6.667ZM16 23.737C16.707 23.737 17.386 23.46 17.886 22.967C18.386 22.474 18.667 21.804 18.667 21.106C18.667 20.409 18.386 19.739 17.886 19.246C17.386 18.753 16.707 18.473 16 18.473C15.293 18.473 14.614 18.753 14.114 19.246C13.614 19.739 13.333 20.409 13.333 21.106C13.333 21.804 13.614 22.474 14.114 22.967C14.614 23.46 15.293 23.737 16 23.737Z"
      />
    </svg>
  );
};

export default IconDirectionsTransitTrainTransportFilled32;
