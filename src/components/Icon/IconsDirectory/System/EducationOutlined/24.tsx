import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconEducationOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.5 3 1 8.833l3.818 2.12v5.833L11.5 20.5l6.682-3.714v-5.833l1.909-1.06v6.718H22V8.833L11.5 3Zm6.51 5.833L11.5 12.45 4.99 8.833l6.51-3.616 6.51 3.616Zm-1.737 6.796L11.5 18.283 6.727 15.63v-3.617l4.773 2.655 4.773-2.655v3.617Z"
      />
    </svg>
  );
};

export default IconEducationOutlined24;
