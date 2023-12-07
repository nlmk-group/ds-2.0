import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterNotEqualSign32: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 25.4905L24.4905 5L26.4721 6.98163L22.1745 11.2793H27.9996V14.0818H19.372L14.3274 19.1263H27.9996V21.9288H11.525L5.98164 27.4721L4 25.4905ZM9.52361 19.1263H5.57997V21.9288H6.72116L9.52361 19.1263ZM5.57997 11.2793H17.3707L14.5682 14.0818H5.57997V11.2793Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterNotEqualSign32;
