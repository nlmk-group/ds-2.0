import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M14.175 6.126 9.581 2.6h4.345c.302 0 .578-.25.578-.552a.553.553 0 0 0-.55-.552h-11.9a.555.555 0 0 0-.552.552c0 .302.25.552.552.552H6.4L1.7 6.208a.49.49 0 0 0-.197.475v7.269c0 .303.25.552.552.552h11.872c.302 0 .552-.25.578-.525V6.633a.553.553 0 0 0-.329-.507ZM12.34 6.08H3.623L7.99 2.738l4.35 3.342Zm-6.583 5.47c0 .302-.25.551-.552.551a.553.553 0 0 1-.552-.552V9.01c0-.303.25-.553.552-.553.302 0 .552.25.552.552v2.541Zm5.577 0c0 .302-.25.551-.552.551a.553.553 0 0 1-.552-.552V9.01c0-.303.25-.553.552-.553.302 0 .552.25.552.552v2.541Zm-2.79 0c0 .302-.25.551-.552.551a.553.553 0 0 1-.552-.552V9.01c0-.303.25-.553.552-.553.303 0 .552.25.552.552v2.541Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneFilled16;
