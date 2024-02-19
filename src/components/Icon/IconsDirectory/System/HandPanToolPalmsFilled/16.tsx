import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHandPanToolPalmsFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M8.722 1.015a.77.77 0 0 1 .473.427l.063.137.008 3.283.007 3.283.06.063a.202.202 0 0 0 .292 0l.06-.064V5.339c0-3.1-.005-3.002.174-3.25.172-.239.538-.348.799-.24a.828.828 0 0 1 .37.357l.074.14.013 2.91.014 2.91.065.052c.083.067.2.067.283 0l.065-.052.014-1.788c.013-1.78.014-1.789.074-1.901.298-.555 1.048-.541 1.304.023l.066.144v4.078c0 4.396.005 4.232-.144 4.653a2.455 2.455 0 0 1-1.604 1.55c-.203.062-.224.063-1.98.072-1.875.01-1.961.005-2.34-.118a2.492 2.492 0 0 1-1.189-.916C5.625 13.783 2.999 8.768 3 8.725c.001-.045.324-.279.481-.348.181-.08.528-.102.726-.044.304.089.418.187.904.772.25.301.487.565.529.585.064.032.088.032.154 0a.283.283 0 0 0 .114-.106c.027-.054.034-.75.035-3.3 0-3.629-.015-3.373.209-3.62.35-.388.92-.282 1.15.214.057.123.058.153.072 2.706l.014 2.582.064.052c.122.098.277.053.333-.095.02-.05.029-1.134.029-3.298 0-3.544-.009-3.356.168-3.569.13-.156.3-.243.5-.254a.906.906 0 0 1 .24.013Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconHandPanToolPalmsFilled16;
