import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconParentalLeaveFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M22.918 5.367h5.4c.746 0 1.35.604 1.35 1.35v21.6a1.35 1.35 0 0 1-1.35 1.35H18.2v-2.7h8.768v-16.2h-21.6V12.8h-2.7V6.717c0-.746.604-1.35 1.35-1.35h5.4v-2.7h2.7v2.7h8.1v-2.7h2.7v2.7Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M21.568 14.817h2.7v2.7h-2.7v-2.7Zm0 5.4h2.7v2.7h-2.7v-2.7ZM11.3 12.466l-.015 5.072H17c-.054-3.345-1.892-5.304-5.194-5.537a.474.474 0 0 0-.505.466ZM9.142 27.923C9.142 29.07 8.182 30 7 30c-1.183 0-2.142-.93-2.142-2.077 0-1.147.959-2.077 2.142-2.077 1.184 0 2.143.93 2.143 2.077ZM14.144 30c1.183 0 2.143-.93 2.143-2.077 0-1.147-.96-2.077-2.143-2.077-1.184 0-2.143.93-2.143 2.077C12 29.07 12.96 30 14.144 30Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="m17 19.27-.671 3.293a1.526 1.526 0 0 1-1.499 1.206H6.518c-.756 0-1.407-.554-1.513-1.288l-.832-5.712H3.02a1.01 1.01 0 0 1-1.019-1c0-.552.456-1 1.019-1h2.038c.507 0 .937.366 1.009.859l.53 3.641H17Z"
      />
    </svg>
  );
};

export default IconParentalLeaveFilled32;
