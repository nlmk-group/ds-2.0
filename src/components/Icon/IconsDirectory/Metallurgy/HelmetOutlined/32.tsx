import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelmetOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M26.594 20.764V18.77c0-2.28-.747-4.446-2.159-6.265a10.742 10.742 0 0 0-4.922-3.528C19.459 7.877 18.535 7 17.406 7h-2.812c-1.129 0-2.053.877-2.107 1.976a10.742 10.742 0 0 0-4.922 3.528 10.135 10.135 0 0 0-2.159 6.265v1.995C4 20.764 4 20.764 4 22.882S4 25 6.11 25h19.78C28 25 28 25.08 28 22.923c0-2.159 0-2.159-1.406-2.159ZM6.812 18.77c0-2.496 1.083-4.833 2.86-6.5v2.346h1.406v-3.433a9.197 9.197 0 0 1 1.406-.723V16h1.406V9.078c0-.382.316-.692.704-.692h2.812c.388 0 .703.31.703.692V16h1.406v-5.54c.494.202.964.445 1.407.723v3.433h1.406v-2.347c1.776 1.667 2.86 4.005 2.86 6.501v1.995l-18.376.082V18.77Zm19.079 4.846H6.109c-.388 0-.703 0-.703-.692 0-.693.315-.693.703-.693h19.782c.387 0 .703 0 .703.693 0 .692-.316.692-.703.692Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconHelmetOutlined32;
