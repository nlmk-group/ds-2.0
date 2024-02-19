import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M2.864 8.442H1.179c-.302 0-.483-.17-.483-.44 0-.28.18-.444.483-.444h1.685V5.76c0-.983.64-1.551 1.842-1.756l2.838-.486v-2.05c0-.292.17-.468.46-.468.277 0 .452.176.452.468v1.898l2.838-.486c1.202-.205 1.842.445 1.842 1.762v2.916h1.685c.302 0 .483.164.483.445 0 .27-.18.44-.483.44h-1.685v2.92c0 1.254-.688 1.957-1.842 1.758l-2.838-.48v1.896c0 .287-.175.463-.453.463-.29 0-.459-.176-.459-.463v-2.055l-2.838-.48c-1.202-.205-1.842-.785-1.842-1.762V8.442Zm4.715 3.177V8.45h-3.81v-.9h3.81V4.38l.9-.146V7.55h3.752v.9H8.479v3.31l-.9-.142Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalysisnpFilled16;
