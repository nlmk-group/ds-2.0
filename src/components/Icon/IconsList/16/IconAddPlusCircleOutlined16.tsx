import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconAddPlusCircleOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M12.369 13.469A6.97 6.97 0 0 1 8 15c-3.864 0-7-3.136-7-7s3.136-7 7-7 7 3.136 7 7a6.97 6.97 0 0 1-1.531 4.369l-1.1 1.1ZM13.444 8a5.426 5.426 0 0 1-1.536 3.792l-.116.116A5.426 5.426 0 0 1 8 13.444 5.443 5.443 0 0 1 2.556 8 5.442 5.442 0 0 1 8 2.556 5.443 5.443 0 0 1 13.444 8Z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.222 7.222V4.89h1.556v2.333h2.333v1.556H8.778v2.333H7.222V8.778H4.89V7.222h2.333Z"
      />
    </svg>
  );
};

export default IconAddPlusCircleOutlined16;
