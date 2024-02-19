import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCommunityFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M9.333 3C6.754 3 4.666 5.114 4.666 7.725c0 2.61 2.088 4.725 4.667 4.725 2.578 0 4.666-2.114 4.666-4.725C14 5.115 11.911 3 9.333 3Zm13.333 0c-2.578 0-4.667 2.114-4.667 4.725 0 2.61 2.089 4.725 4.667 4.725s4.667-2.114 4.667-4.725c0-2.61-2.089-4.725-4.667-4.725Zm-6.667 8.1c-2.578 0-4.666 2.115-4.666 4.726 0 2.61 2.088 4.725 4.666 4.725 2.579 0 4.667-2.115 4.667-4.725 0-2.61-2.088-4.725-4.667-4.725Zm0 10.632c-3.115 0-9.333 1.583-9.333 4.725V30h18.667v-3.544c0-3.142-6.219-4.725-9.334-4.725Zm-6.666-8.1c.196 0 .404.006.621.019a6.798 6.798 0 0 0-.62 2.85c0 1.281.352 2.48.964 3.5-.382.124-.759.26-1.124.409-.908.368-1.858.852-2.693 1.49H0v-3.543c0-3.142 6.218-4.725 9.333-4.725Zm16.186 8.269H32v-3.544c0-3.142-6.218-4.725-9.333-4.725-.196 0-.404.006-.622.019.4.866.622 1.831.622 2.85 0 1.281-.353 2.48-.965 3.5.382.124.759.26 1.124.409.908.368 1.858.852 2.693 1.49Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCommunityFilled32;
