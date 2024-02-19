import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVideoCameraOffOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m7.345 6.529-1.15-1.15L3.81 3 3 3.81l1.569 1.57h-.42a.576.576 0 0 0-.574.574v5.747c0 .316.258.575.574.575h6.897a.59.59 0 0 0 .316-.104L13.19 14l.81-.81-5.092-5.092-1.563-1.57Zm-2.62 4.597V6.53h.993l4.598 4.597H4.724ZM10.47 8.03v-1.5h-1.5L7.82 5.38h3.225c.316 0 .575.259.575.575v2.012l2.298-2.3v5.811L10.47 8.03Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVideoCameraOffOutlined16;
