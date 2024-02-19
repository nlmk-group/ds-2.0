import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLocationPinaltOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16 14.352c.544 0 1.076-.16 1.528-.46a2.724 2.724 0 0 0 1.013-1.223 2.705 2.705 0 0 0-.596-2.97 2.773 2.773 0 0 0-2.997-.591 2.744 2.744 0 0 0-1.235 1.004 2.71 2.71 0 0 0 .343 3.442 2.762 2.762 0 0 0 1.944.798Zm-.976 9.42a1.375 1.375 0 0 0 .976.403 1.386 1.386 0 0 0 .976-.404l5.624-5.588a9.23 9.23 0 0 0 2.556-4.74 9.181 9.181 0 0 0-.53-5.347 9.273 9.273 0 0 0-3.439-4.155A9.395 9.395 0 0 0 16 2.381a9.394 9.394 0 0 0-5.187 1.56 9.273 9.273 0 0 0-3.439 4.155 9.18 9.18 0 0 0-.53 5.348A9.231 9.231 0 0 0 9.4 18.183l5.624 5.588ZM9.44 10.998c.094-.972.406-1.91.913-2.748a6.582 6.582 0 0 1 2.016-2.09 6.655 6.655 0 0 1 7.26 0 6.597 6.597 0 0 1 2.006 2.078 6.532 6.532 0 0 1 .57 5.586 6.564 6.564 0 0 1-1.545 2.436L16 20.88l-4.661-4.62a6.494 6.494 0 0 1-1.548-2.419A6.45 6.45 0 0 1 9.44 11Zm16.184 15.894H6.375c-.365 0-.714.143-.972.4a1.357 1.357 0 0 0 0 1.927c.258.256.607.4.972.4h19.25c.365 0 .714-.145.972-.4a1.357 1.357 0 0 0 0-1.928 1.381 1.381 0 0 0-.972-.4Z"
      />
    </svg>
  );
};

export default IconLocationPinaltOutlined32;
