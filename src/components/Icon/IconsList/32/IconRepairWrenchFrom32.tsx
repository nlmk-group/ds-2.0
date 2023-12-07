import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRepairWrenchFrom32: FC<IIconsProps> = ({
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
        d="M16.2091 12.248C18.4648 9.99232 21.8329 9.52425 24.5493 10.8455L21.6312 13.7636L20.9241 14.4707L21.6312 15.1778L23.5844 17.131L24.2915 17.8381L24.9986 17.131L27.9168 14.2129C29.238 16.9293 28.7699 20.2974 26.5142 22.5531C24.6079 24.4594 21.9077 25.09 19.4738 24.44L18.9165 24.2912L18.5086 24.6991L15.6729 27.5348C14.5013 28.7064 12.6018 28.7064 11.4302 27.5348L11.2274 27.332C10.0559 26.1604 10.0559 24.2609 11.2274 23.0894L14.0632 20.2536L14.471 19.8458L14.3222 19.2885C13.6722 16.8546 14.3028 14.1543 16.2091 12.248Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.8284 8.00002L10.1213 3.70712L8.70708 2.29291L1.99997 9.00001L8.70708 15.7071L10.1213 14.2929L5.8284 10H16.4142V8.00002H5.8284Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRepairWrenchFrom32;
