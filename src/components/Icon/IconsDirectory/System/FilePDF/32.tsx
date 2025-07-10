import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFilePDF32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M29.333 9.333V28c0 1.467-1.2 2.667-2.666 2.667H5.32A2.663 2.663 0 0 1 2.667 28L2.68 4a2.664 2.664 0 0 1 2.653-2.667h16l8 8ZM5.333 28h21.334V10.667H22a2 2 0 0 1-2-2V4H5.333v24ZM16 12.001c1.589 0 2.582 1.706 1.788 3.071l-.877 1.506 1.937 3.326H20.6l.147.005c1.502.102 2.41 1.744 1.64 3.067-.795 1.365-2.78 1.365-3.576 0l-.875-1.505h-3.871l-.877 1.505c-.794 1.365-2.78 1.365-3.575 0-.794-1.366.199-3.071 1.787-3.072h1.752l1.936-3.326-.876-1.506c-.794-1.365.2-3.07 1.788-3.071Zm-4.6 9.47a.481.481 0 0 0-.419.721c.187.32.654.321.84 0l.42-.721h-.84Zm8.78.721c.187.32.653.32.84 0a.481.481 0 0 0-.42-.721h-.84l.42.721Zm-5.203-2.288h2.046L16 18.145l-1.022 1.76ZM16 13.567a.482.482 0 0 0-.42.722l.419.723.42-.723a.481.481 0 0 0-.419-.722Z"
      />
    </svg>
  );
};

export default IconFilePDF32;
