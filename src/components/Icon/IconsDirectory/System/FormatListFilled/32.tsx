import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatListFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2 1a1 1 0 0 0-1 1v28a1 1 0 0 0 1 1h28a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2Zm26.857 3.571H10.286v2.857h18.571V4.571ZM7.43 3.857H3.143v4.286h4.286V3.857Zm0 10H3.143v4.286h4.286v-4.286Zm0 10H3.143v4.286h4.286v-4.286Zm21.428-9.286H10.286v2.857h18.571v-2.857Zm0 10H10.286v2.857h18.571v-2.857Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFormatListFilled32;
