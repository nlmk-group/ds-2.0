import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileVideo16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.007-11.455C2.007 1.572 2.585 1 3.3 1h7.8zm-11.7 8.91h10.4V5.454h-2.275a.964.964 0 0 1-.975-.954V2.272H3.3z"
        clipRule="evenodd"
      />
      <path
        fill={htmlColor || 'currentColor'}
        d="M7.725 6.11c-.4-.258-.725-.046-.725.473v3.834c0 .52.324.731.725.473L10.7 8.968c.4-.258.4-.678 0-.936z"
      />
    </svg>
  );
};

export default IconFileVideo16;
