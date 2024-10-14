import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconKindness24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M20.789 5.444c-1.17-1.53-2.98-2.52-5-2.44-1.47.06-2.61.61-3.37 1.14-.15.11-.29.22-.42.32-.12-.1-.27-.21-.42-.32a6.41 6.41 0 0 0-3.37-1.14c-2.02-.08-3.83.91-5 2.44-1.04 1.36-1.34 2.81-1.16 4.21.18 1.37.81 2.65 1.56 3.75 1.29 1.9 3.07 3.49 4 4.31l.36.33c.93.86 2.08 1.88 2.77 2.48.72.63 1.79.63 2.51 0a225.966 225.966 0 0 0 3.13-2.81c.92-.82 2.71-2.41 4-4.31.75-1.1 1.38-2.38 1.56-3.75.19-1.4-.11-2.85-1.15-4.21Zm-.82 3.95c-.12.94-.58 1.93-1.24 2.89-1.13 1.67-2.7 3.07-3.64 3.91-.16.14-.3.27-.42.38-.84.77-1.98 1.78-2.67 2.39-.67-.59-1.82-1.61-2.62-2.35l-.05-.04c-.12-.11-.26-.23-.42-.38-.94-.84-2.51-2.25-3.64-3.91-.66-.96-1.11-1.94-1.24-2.89-.09-.71.01-1.42.39-2.13.11-.2.22-.4.38-.6l.17-.2c.81-.95 1.95-1.51 3.16-1.46 1 .04 1.77.41 2.31.79.27.19.47.37.6.5l.14.15.03.03a1.005 1.005 0 0 0 1.58.01l.03-.03.14-.15c.13-.13.33-.31.6-.5a4.27 4.27 0 0 1 2.31-.8c1.29-.05 2.51.58 3.33 1.66.71.91.88 1.83.77 2.73Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconKindness24;
