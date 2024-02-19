import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 21c4.924 0 9-3.915 9-8.644 0-1.975-.715-3.805-1.906-5.271l.688-.67a.996.996 0 0 0 .318-.686c0-.475-.397-.856-.909-.856a.98.98 0 0 0-.723.28l-.67.635a9.156 9.156 0 0 0-4.863-2.025v-.83A.937.937 0 0 0 11.991 2a.949.949 0 0 0-.944.932v.83C6.556 4.23 3 7.942 3 12.357 3 17.085 7.085 21 12 21Zm0-1.44c-4.165 0-7.491-3.204-7.491-7.204 0-3.992 3.317-7.203 7.482-7.203s7.5 3.211 7.509 7.203c.009 4-3.335 7.203-7.5 7.203Zm0-5.831c1.047 0 1.894-.61 1.894-1.365 0-.534-.317-1-.811-1.228V6.924c0-.33-.274-.77-.618-.77s-.609.254-.609.77v4.203c-.485.246-.803.704-.803 1.237 0 .755.627 1.365 1.421 1.365Z"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisOutlined24;
