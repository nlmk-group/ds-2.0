import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBalanceFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M16.74 11.677V3.72c0-.397-.309-.719-.69-.719a.706.706 0 0 0-.692.72v7.712l-6.139-1.09c-.537-.095-1.047.281-1.14.84-.043.266.016.526.148.736a.751.751 0 0 0-.014.028l-3.828 8.535a1.04 1.04 0 0 0-.385.814c0 .049 0 .097.002.146a.746.746 0 0 0 .009.184c.182 2.78 2.643 4.808 5.421 4.808 2.888 0 5.432-2.19 5.432-5.138 0-.37-.188-.694-.47-.875l-3.536-7.702 10.464 1.857-3.8 8.472a1.04 1.04 0 0 0-.386.815c0 .05 0 .098.002.147a.74.74 0 0 0 .009.187C17.33 26.974 19.79 29 22.568 29c2.778 0 5.238-2.027 5.421-4.806a.74.74 0 0 0 .009-.183l.002-.149a1.04 1.04 0 0 0-.41-.834l-4.006-8.525a.736.736 0 0 0-.042-.078c.098-.13.168-.288.197-.463.092-.56-.27-1.09-.807-1.186l-6.191-1.099Zm-7.38 1.115 3.432 7.475H6.007l3.353-7.475Zm13.112 2.62 3.487 7.422h-6.816l3.33-7.422Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconBalanceFilled32;
