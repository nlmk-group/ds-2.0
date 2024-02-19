import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconVideoCameraOffOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M10.553 8.624 4.915 3 3 4.915l3.708 3.709h-.991c-.747 0-1.359.611-1.359 1.358v13.584c0 .748.612 1.359 1.359 1.359h16.3c.286 0 .53-.109.748-.245l4.32 4.32L29 27.085 16.965 15.049l-3.695-3.708-2.717-2.717ZM7.075 22.208V11.341h2.35l10.868 10.867H7.075Zm13.584-7.322v-3.545h-3.545l-2.717-2.717h7.62c.748 0 1.359.611 1.359 1.358v4.755l5.434-5.434v13.734l-8.15-8.15Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconVideoCameraOffOutlined32;
