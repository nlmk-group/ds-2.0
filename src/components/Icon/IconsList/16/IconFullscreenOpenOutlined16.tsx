import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconFullscreenOpenOutlined16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.55556 6H1V1H6V2.55556H2.55556V6ZM1 10H2.55556V13.4444H6V15H1V10ZM13.4444 13.4444H10V15H15V10H13.4444V13.4444ZM10 2.55556V1H15V6H13.4444V2.55556H10Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFullscreenOpenOutlined16;
