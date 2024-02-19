import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCalendarCheckFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.117 2.667v2.7h8.1v-2.7h2.7v2.7h5.4c.746 0 1.35.604 1.35 1.35v21.6a1.35 1.35 0 0 1-1.35 1.35h-24.3a1.35 1.35 0 0 1-1.35-1.35v-21.6c0-.746.604-1.35 1.35-1.35h5.4v-2.7h2.7Zm14.85 9.45h-21.6v14.85h21.6v-14.85ZM20.266 15l-4.772 4.774-2.864-2.865-1.912 1.91 4.774 4.773 6.683-6.683L20.265 15Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCalendarCheckFilled32;
