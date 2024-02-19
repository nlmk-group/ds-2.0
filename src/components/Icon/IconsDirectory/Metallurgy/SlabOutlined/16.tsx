import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconSlabOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.166 2.069a.566.566 0 0 1 .54 0l4.02 2.202a.52.52 0 0 1 .274.454v4.899a.52.52 0 0 1-.276.455l-7.081 3.853a.566.566 0 0 1-.55-.007l-3.828-2.201A.519.519 0 0 1 2 11.275V6.284a.52.52 0 0 1 .276-.454l6.89-3.761ZM3.09 9.857v1.122l3.29 1.893 6.528-3.553V8.18l-6.267 3.41a.566.566 0 0 1-.55-.006L3.092 9.857Zm9.818-2.88L6.38 10.529 3.09 8.637V6.588l6.344-3.463 3.167 1.735-6.205 3.31-2.215-1.411v1.255l1.892 1.204c.17.106.387.114.564.02l6.271-3.345v1.084Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconSlabOutlined16;
