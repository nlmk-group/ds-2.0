import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRepairWrenchTo32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        d="M16.2091 12.248C18.4648 9.99232 21.8329 9.52425 24.5493 10.8455L21.6312 13.7636L20.9241 14.4707L21.6312 15.1778L23.5844 17.131L24.2915 17.8381L24.9986 17.131L27.9168 14.2129C29.238 16.9293 28.7699 20.2974 26.5142 22.5531C24.6079 24.4594 21.9077 25.09 19.4738 24.44L18.9165 24.2912L18.5086 24.6991L15.6729 27.5348C14.5013 28.7064 12.6018 28.7064 11.4302 27.5348L11.2274 27.332C10.0559 26.1604 10.0559 24.2609 11.2274 23.0894L14.0632 20.2536L14.471 19.8458L14.3222 19.2885C13.6722 16.8546 14.3028 14.1543 16.2091 12.248Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12.5858 8.00002L8.29289 3.70712L9.70711 2.29291L16.4142 9.00001L9.70711 15.7071L8.29289 14.2929L12.5858 10H2V8.00002H12.5858Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRepairWrenchTo32;
