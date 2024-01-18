import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconSourceDoc24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 19.4998V10.4998L12 5.99976L6 5.99976C5.175 5.99976 4.5 6.67476 4.5 7.49976L4.5 19.4998C4.5 20.3248 5.1675 20.9998 5.9925 20.9998H15C15.825 20.9998 16.5 20.3248 16.5 19.4998ZM15 19.4998H5.9925L5.9925 7.49976H11.25V11.2498H15L15 19.4998Z"
        fill={htmlColor || 'currentColor'}
      />
      <path
        d="M19.5 16.5016C19.4991 17.3259 18.8245 18 18 18L18 8.25005L14.25 4.5L7.5 4.5C7.5 3.675 8.175 3 9 3H15L19.5 7.5V16.5L19.5 16.5016Z"
        fill={htmlColor || 'currentColor'}
      />
      <path d="M7.5 13.4998H13.5V14.9998H7.5V13.4998Z" fill={htmlColor || 'currentColor'} />
      <path d="M7.5 16.4998H11.5V17.9998H7.5V16.4998Z" fill={htmlColor || 'currentColor'} />
    </svg>
  );
};

export default IconSourceDoc24;
