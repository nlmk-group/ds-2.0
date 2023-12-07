import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconTelegramFilled16: FC<IIconsProps> = ({
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
        d="M15.0198 2.17871C14.7761 1.97201 14.3932 1.94244 13.9974 2.10136H13.9967C13.5804 2.26841 2.21187 7.14473 1.74907 7.34395C1.66489 7.3732 0.929738 7.6475 1.00546 8.25851C1.07306 8.80938 1.66391 9.03753 1.73607 9.06386L4.6263 10.0535C4.81805 10.6918 5.52493 13.0467 5.68125 13.5498C5.77875 13.8635 5.93768 14.2756 6.2162 14.3604C6.4606 14.4546 6.70371 14.3685 6.86101 14.245L8.62804 12.606L11.4806 14.8307L11.5485 14.8713C11.7422 14.9571 11.9278 15 12.1049 15C12.2417 15 12.373 14.9743 12.4985 14.923C12.9258 14.7475 13.0968 14.3402 13.1147 14.2941L15.2454 3.21904C15.3754 2.62754 15.1947 2.32659 15.0198 2.17871ZM7.17528 10.4493L6.20028 13.0493L5.22528 9.79933L12.7003 4.27432L7.17528 10.4493Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTelegramFilled16;
