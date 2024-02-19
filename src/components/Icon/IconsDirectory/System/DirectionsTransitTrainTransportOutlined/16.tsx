import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectionsTransitTrainTransportOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m11.467 13.632 1.2 1.026V15H3.333v-.342l1.2-1.026h-1.2c-.353 0-.692-.145-.942-.401A1.387 1.387 0 0 1 2 12.263V4.737c0-.726.28-1.422.781-1.935A2.632 2.632 0 0 1 4.667 2h6.666a2.63 2.63 0 0 1 1.886.802c.5.513.781 1.209.781 1.935v7.526c0 .363-.14.711-.39.968-.25.256-.59.4-.943.4h-1.2Zm-6.8-10.264c-.354 0-.693.145-.943.401-.25.257-.39.605-.39.968v7.526h9.333V4.737c0-.363-.14-.711-.39-.968a1.32 1.32 0 0 0-.944-.4H4.667ZM8 11.578c-.354 0-.693-.143-.943-.4a1.387 1.387 0 0 1-.39-.968c0-.362.14-.71.39-.967a1.315 1.315 0 0 1 1.886 0c.25.257.39.605.39.967 0 .363-.14.711-.39.968s-.59.4-.943.4Zm-4-6.84h8v2.737H4V4.737Z"
      />
    </svg>
  );
};

export default IconDirectionsTransitTrainTransportOutlined16;
