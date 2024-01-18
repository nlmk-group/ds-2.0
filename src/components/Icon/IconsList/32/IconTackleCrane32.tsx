import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTackleCrane32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1501 2V7.85H16.0001C16.8209 7.85 17.6232 8.09339 18.3057 8.5494C18.9882 9.00541 19.5201 9.65355 19.8342 10.4119C20.1483 11.1702 20.2305 12.0046 20.0704 12.8096C19.9102 13.6146 19.515 14.3541 18.9346 14.9345C18.3542 15.5149 17.6147 15.9101 16.8097 16.0703C16.0047 16.2304 15.1703 16.1482 14.412 15.8341C13.6536 15.52 13.0055 14.9881 12.5495 14.3056C12.0935 13.6232 11.8501 12.8208 11.8501 12H10.1501C10.1501 13.157 10.4932 14.2881 11.136 15.2501C11.6309 15.9908 12.2864 16.6057 13.0497 17.0515L9.94411 24.1499H2V25.8499H30V24.1499H22.0559L18.9504 17.0516C19.3811 16.8 19.7802 16.4931 20.1367 16.1366C20.9548 15.3184 21.512 14.2761 21.7377 13.1413C21.9634 12.0065 21.8476 10.8302 21.4048 9.7613C20.962 8.69235 20.2122 7.77871 19.2502 7.1359C18.5257 6.65179 17.7053 6.33767 16.8501 6.21208V2H15.1501ZM17.3727 17.6867C17.296 17.7052 17.2189 17.7222 17.1414 17.7376C16.3061 17.9038 15.4483 17.8848 14.6274 17.6867L11.7997 24.1499H20.2003L17.3727 17.6867Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M2 29.8499H30V28.1499H2V29.8499Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconTackleCrane32;
