import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLearning24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M7.598 10.218h-.02c-.781-.05-1.542-.02-2.254.06l-.09.01.03-.07A4.996 4.996 0 0 1 8.67 7.371a4.063 4.063 0 0 1-.68-2.26v-.01C7.998 2.841 9.85 1 12.123 1c2.284 0 4.136 1.842 4.136 4.111 0 .837-.25 1.613-.68 2.26a4.99 4.99 0 0 1 3.394 2.837l.04.08-.09-.01c-.721-.1-1.502-.14-2.293-.1h-.02l-.02-.02a2.993 2.993 0 0 0-2.184-.945H9.841c-.881 0-1.682.378-2.223.985l-.02.02Zm6.66-5.117a2.13 2.13 0 0 0-2.134-2.12c-1.181 0-2.143.956-2.133 2.12 0 1.165.952 2.12 2.133 2.12a2.129 2.129 0 0 0 2.133-2.12Zm8.182 7.894c.19.07.33.2.42.369.09.169.14.338.12.527v4.719c0 .378-.13.687-.39.896-.25.199-.622.308-1.082.288-4.056-.139-7.05 1.683-8.983 3.206l-.01.01h-.05l-.01-.01c-2.484-1.961-5.909-3.235-8.983-3.206-.46.01-.821-.1-1.081-.298-.25-.21-.391-.508-.391-.886v-4.72c0-.189.05-.358.14-.527.09-.16.22-.289.41-.369a9.658 9.658 0 0 1 2.294-.856 10.558 10.558 0 0 1 5.137.06c.872.239 1.713.587 2.514 1.055a10.439 10.439 0 0 1 2.514-1.055 10.71 10.71 0 0 1 2.703-.348c.822 0 1.643.1 2.434.288.801.19 1.562.478 2.293.856ZM7.877 18.471c1.372.398 2.714.985 3.626 1.602v-5.117a7.786 7.786 0 0 0-2.023-.826 9.07 9.07 0 0 0-2.193-.279c-.571 0-1.132.05-1.693.16-.54.11-1.071.269-1.582.478v3.494c1.051-.13 2.473.09 3.865.488Zm13.11-.5v-3.492A8.318 8.318 0 0 0 19.404 14c-.56-.1-1.122-.16-1.693-.16a8.6 8.6 0 0 0-2.193.28 7.934 7.934 0 0 0-2.023.825v5.127a20.777 20.777 0 0 1 4.737-1.812c.691-.159 1.302-.268 1.783-.308.424-.04.76-.03.971.017Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconLearning24;