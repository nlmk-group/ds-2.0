import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSettingsAltFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.628 8c0 .204-.019.396-.044.588l1.302.99c.117.09.148.252.074.384l-1.234 2.076a.307.307 0 0 1-.265.15.358.358 0 0 1-.111-.018l-1.536-.6c-.32.234-.666.438-1.042.588l-.235 1.59a.298.298 0 0 1-.302.252H6.768a.298.298 0 0 1-.303-.252l-.234-1.59a4.539 4.539 0 0 1-1.042-.588l-1.536.6a.295.295 0 0 1-.105.018.31.31 0 0 1-.272-.15L2.043 9.962a.297.297 0 0 1 .074-.384l1.301-.99A4.631 4.631 0 0 1 3.375 8c0-.198.019-.396.043-.588l-1.301-.99a.29.29 0 0 1-.074-.384l1.233-2.076a.317.317 0 0 1 .377-.132l1.536.6c.32-.234.666-.438 1.042-.588l.234-1.59A.298.298 0 0 1 6.768 2h2.467c.154 0 .284.108.302.252l.235 1.59c.376.15.721.348 1.042.588l1.536-.6a.318.318 0 0 1 .376.132l1.234 2.076a.297.297 0 0 1-.074.384l-1.302.99c.025.192.044.384.044.588ZM8 5.6C6.638 5.6 5.534 6.674 5.534 8c0 1.326 1.104 2.4 2.467 2.4 1.364 0 2.468-1.074 2.468-2.4 0-1.326-1.104-2.4-2.468-2.4ZM6.768 8c0 .66.555 1.2 1.233 1.2.679 0 1.234-.54 1.234-1.2 0-.66-.555-1.2-1.234-1.2-.678 0-1.233.54-1.233 1.2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconSettingsAltFilled16;
