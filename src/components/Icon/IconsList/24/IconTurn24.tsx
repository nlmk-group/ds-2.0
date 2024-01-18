import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTurn24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M14.439 18.1216C14.5635 18.2461 14.7246 18.3193 14.915 18.3193C15.2959 18.3193 15.5815 18.0337 15.5815 17.6528C15.5815 17.4697 15.5083 17.3013 15.3911 17.1768L10.0591 11.9619L15.3911 6.74707C15.5083 6.62256 15.5815 6.44678 15.5815 6.271C15.5815 5.89014 15.2959 5.59717 14.915 5.59717C14.7246 5.59717 14.5635 5.67041 14.439 5.79492L8.63818 11.4712C8.49902 11.5884 8.41846 11.7715 8.41846 11.9619C8.41846 12.145 8.4917 12.3135 8.63086 12.4526L14.439 18.1216Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTurn24;
