import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconReportInWorkOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M26 30H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4.087a2.497 2.497 0 0 1 2.163-1.25h1.25c0-.829 1.12-1.5 2.5-1.5s2.5.671 2.5 1.5h1.25A2.497 2.497 0 0 1 21.913 4H26a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2Zm-.25-23.75h-3.71a2.5 2.5 0 0 1-2.29 1.5h-7.5a2.5 2.5 0 0 1-2.29-1.5H6.25v21.5h19.5V6.25Zm-6.716 5.996c.075.042.143.087.213.133l.628-1.088c.385-.67 1.01-.85 1.241-.152.288.87.76 2.403 1.04 3.198a.995.995 0 0 1-.75 1.3c-.836.173-2.385.51-3.29.698-.675.141-.863-.506-.498-1.134l.632-1.098c-.07-.046-.142-.082-.216-.124a4.5 4.5 0 0 0-6.147 1.646c-.433.75-.62 1.07-.597 1.875l-1.998.5a6.49 6.49 0 0 1 9.742-5.754Zm-8.44 8.118c.836-.174 2.385-.51 3.29-.699.675-.14.862.506.498 1.135l-.632 1.097c.07.047.143.083.216.125a4.501 4.501 0 0 0 6.148-1.647c.432-.75.62-1.07.596-1.875l1.999-.5a6.489 6.489 0 0 1-9.742 5.754c-.075-.042-.144-.087-.215-.133l-.627 1.088c-.385.67-1.01.85-1.241.152-.288-.87-.76-2.403-1.04-3.198a.994.994 0 0 1 .75-1.3Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconReportInWorkOutlined32;
