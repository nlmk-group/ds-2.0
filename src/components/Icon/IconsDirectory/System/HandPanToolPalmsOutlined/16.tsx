import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconHandPanToolPalmsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.686 15h-3.79a2.329 2.329 0 0 1-1.672-.718L2 9.842l1.198-1.069a1.15 1.15 0 0 1 1.307-.157l1.395.747V3.79a1.453 1.453 0 0 1 1.74-1.43A1.453 1.453 0 0 1 9.082 1c.498 0 .931.25 1.192.636a1.453 1.453 0 0 1 1.99 1.354v.163A1.453 1.453 0 0 1 14 4.583v8.083A2.324 2.324 0 0 1 11.686 15Zm-8.02-5.089 3.39 3.56c.22.228.522.362.834.362h3.796c.636 0 1.157-.525 1.157-1.167V4.583a.288.288 0 0 0-.29-.292.288.288 0 0 0-.289.292v3.414h-1.157V2.99a.288.288 0 0 0-.29-.292.288.288 0 0 0-.289.292v5.007H9.371V2.46a.288.288 0 0 0-.289-.292.288.288 0 0 0-.29.292v5.538H7.636V3.79a.288.288 0 0 0-.289-.292.291.291 0 0 0-.29.291V11.3L3.962 9.65l-.295.262Z"
      />
    </svg>
  );
};

export default IconHandPanToolPalmsOutlined16;
