import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M1.179 8.442h1.685v1.798c0 .977.64 1.557 1.842 1.762l2.838.48v2.055c0 .287.17.463.46.463.277 0 .452-.176.452-.463V12.64l2.838.48c1.154.2 1.842-.503 1.842-1.756V8.442h1.685c.302 0 .483-.17.483-.44 0-.28-.18-.444-.483-.444h-1.685V4.642c0-1.317-.64-1.967-1.842-1.762l-2.838.486V1.468c0-.292-.175-.468-.453-.468-.29 0-.459.176-.459.468v2.05l-2.838.486c-1.202.205-1.842.773-1.842 1.756v1.798H1.179c-.302 0-.483.164-.483.445 0 .27.18.44.483.44Zm10.164-4.678c.573-.094.881.216.881.866v2.928H8.456V4.244l2.887-.48ZM3.776 5.749c0-.492.308-.773.881-.867l2.887-.486v3.162H3.776v-1.81Zm.881 5.369c-.573-.094-.881-.375-.881-.867V8.442h3.768v3.162l-2.887-.486Zm6.686 1.124-2.887-.486V8.442h3.768v2.934c0 .62-.326.954-.881.866Z"
      />
    </svg>
  );
};

export default IconAnalysisnpOutlined16;
