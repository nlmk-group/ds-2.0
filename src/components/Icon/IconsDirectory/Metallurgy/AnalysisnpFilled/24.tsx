import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M3.562 13.226H.794c-.496 0-.794-.279-.794-.721 0-.462.298-.731.794-.731h2.768V8.82c0-1.616 1.051-2.55 3.026-2.886l4.663-.799V1.77c0-.481.278-.77.754-.77.456 0 .744.289.744.77v3.116l4.663-.798c1.975-.337 3.026.73 3.026 2.895v4.79h2.768c.496 0 .794.27.794.732 0 .442-.298.721-.794.721h-2.768v4.8c0 2.059-1.13 3.213-3.026 2.886l-4.663-.789v3.117c0 .471-.288.76-.744.76-.476 0-.754-.289-.754-.76v-3.376l-4.663-.79c-1.975-.336-3.026-1.288-3.026-2.895v-2.953Zm7.655 5.192V13.25H5.046v-1.5h6.171V6.581l1.5-.248v5.417h6.235v1.5h-6.235v5.414l-1.5-.246Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalysisnpFilled24;
