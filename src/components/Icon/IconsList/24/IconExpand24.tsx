import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconExpand24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M9.08496 18.3267C9.27539 18.3267 9.43652 18.2534 9.56104 18.1289L15.3691 12.4526C15.5083 12.3135 15.5815 12.145 15.5815 11.9619C15.5815 11.7715 15.5083 11.5957 15.3691 11.4712L9.56836 5.80225C9.43652 5.67041 9.27539 5.59717 9.08496 5.59717C8.7041 5.59717 8.41846 5.89014 8.41846 6.271C8.41846 6.44678 8.4917 6.62256 8.60889 6.74707L13.9409 11.9619L8.60889 17.1768C8.4917 17.3013 8.41846 17.4697 8.41846 17.6528C8.41846 18.0337 8.7041 18.3267 9.08496 18.3267Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconExpand24;
