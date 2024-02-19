import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M.794 13.226h2.768v2.953c0 1.607 1.051 2.56 3.026 2.896l4.663.789v3.376c0 .471.278.76.754.76.456 0 .744-.289.744-.76v-3.117l4.663.79c1.895.326 3.026-.828 3.026-2.887v-4.8h2.768c.496 0 .794-.279.794-.721 0-.462-.298-.731-.794-.731h-2.768v-4.79c0-2.165-1.051-3.233-3.026-2.896l-4.663.798V1.77c0-.481-.288-.77-.744-.77-.476 0-.754.289-.754.77v3.366l-4.663.799c-1.975.336-3.026 1.27-3.026 2.886v2.953H.794c-.496 0-.794.27-.794.73 0 .443.298.722.794.722ZM17.49 5.54c.943-.154 1.45.356 1.45 1.424v4.81h-6.192V6.329l4.742-.789ZM5.06 8.801c0-.808.506-1.27 1.448-1.423l4.743-.799v5.195H5.06V8.8Zm1.448 8.821c-.942-.154-1.448-.615-1.448-1.423v-2.973h6.19v5.195l-4.742-.799Zm10.983 1.847-4.742-.798v-5.445h6.191v4.82c0 1.02-.536 1.568-1.449 1.423Z"
      />
    </svg>
  );
};

export default IconAnalysisnpOutlined24;
