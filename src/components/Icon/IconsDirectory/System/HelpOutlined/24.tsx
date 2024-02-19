import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHelpOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M12 21c4.924 0 9-4.076 9-9 0-4.915-4.085-9-9.009-9C7.076 3 3 7.085 3 12c0 4.924 4.085 9 9 9Zm0-1.5A7.464 7.464 0 0 1 4.509 12c0-4.156 3.317-7.5 7.482-7.5A7.49 7.49 0 0 1 19.5 12a7.466 7.466 0 0 1-7.5 7.5Zm-.185-5.674c.45 0 .714-.273.714-.626v-.106c0-.494.292-.803.9-1.209.856-.564 1.465-1.085 1.465-2.135 0-1.474-1.306-2.259-2.797-2.259-1.518 0-2.515.715-2.762 1.527-.044.15-.07.29-.07.44 0 .39.309.61.6.61.503 0 .582-.274.864-.6.292-.486.715-.777 1.306-.777.803 0 1.333.45 1.333 1.13 0 .6-.38.89-1.147 1.42-.636.441-1.103.909-1.103 1.774v.114c0 .468.247.697.697.697Zm-.018 2.639c.512 0 .953-.406.953-.918 0-.52-.432-.918-.953-.918-.52 0-.953.406-.953.918 0 .503.441.918.953.918Z"
      />
    </svg>
  );
};

export default IconHelpOutlined24;
