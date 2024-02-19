import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconContentCopyOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12.47 24.4a2.729 2.729 0 0 1-1.993-.822 2.686 2.686 0 0 1-.83-1.978V4.8c0-.77.277-1.43.83-1.978A2.729 2.729 0 0 1 12.471 2h12.706c.776 0 1.44.274 1.994.822C27.724 3.37 28 4.03 28 4.8v16.8c0 .77-.276 1.43-.829 1.978a2.734 2.734 0 0 1-1.994.822H12.47Zm0-2.8h12.707V4.8H12.47v16.8ZM6.825 30a2.734 2.734 0 0 1-1.995-.822A2.688 2.688 0 0 1 4 27.2V7.6h2.824v19.6h15.529V30H6.823Z"
      />
    </svg>
  );
};

export default IconContentCopyOutlined32;
