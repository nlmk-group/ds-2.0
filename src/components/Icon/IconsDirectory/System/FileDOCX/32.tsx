import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileDOCX32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M5.7 2h16.2L30 9.91v18.454C30 29.814 28.785 31 27.3 31H5.686C4.202 31 3 29.814 3 28.364l.014-23.728C3.014 3.186 4.215 2 5.7 2Zm0 2.636v23.728h21.6V11.227h-4.725c-1.118 0-2.025-.885-2.025-1.977V4.636H5.7Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.1 16.295c0 .445.4.806.894.806s.895-.361.895-.806v-.819h7.222v.819c0 .445.4.806.895.806.494 0 .894-.361.894-.806V14.67c0-.445-.4-.806-.894-.806h-9.012c-.493 0-.894.361-.894.806v1.625Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M15.605 14.67v8.933c0 .445.4.806.895.806.494 0 .894-.36.894-.806v-8.934c0-.445-.4-.806-.894-.806s-.895.361-.895.806Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m17.852 24.409.09-.004c.452-.042.804-.385.804-.802 0-.417-.352-.76-.803-.802l-.091-.004h-2.704c-.494 0-.894.36-.894.806 0 .445.4.806.894.806h2.704Z"
      />
    </svg>
  );
};

export default IconFileDOCX32;
