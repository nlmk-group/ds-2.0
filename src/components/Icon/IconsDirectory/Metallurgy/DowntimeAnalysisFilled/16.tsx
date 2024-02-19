import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14 7.874c0 3.138-2.706 5.737-5.974 5.737-3.262 0-5.973-2.599-5.973-5.737 0-2.93 2.36-5.395 5.34-5.704v-.551A.63.63 0 0 1 8.02 1c.352 0 .627.281.627.619v.551a6.077 6.077 0 0 1 3.227 1.344l.445-.422a.65.65 0 0 1 .48-.185c.34 0 .604.253.604.568a.66.66 0 0 1-.211.456l-.457.444C13.525 5.348 14 6.563 14 7.874Zm-6.906-.13a.876.876 0 0 0-.01.135c0 .5.415.906.942.906a.931.931 0 0 0 .934-.776.899.899 0 0 0-.53-.945V4.268c0-.22-.181-.388-.41-.388a.392.392 0 0 0-.404.388v2.79a.94.94 0 0 0-.522.687Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisFilled16;
