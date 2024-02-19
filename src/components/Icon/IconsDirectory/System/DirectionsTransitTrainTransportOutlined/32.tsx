import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectionsTransitTrainTransportOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="m22.933 26.368 2.4 1.974V29H6.667v-.658l2.4-1.974h-2.4a2.684 2.684 0 0 1-1.886-.77A2.614 2.614 0 0 1 4 23.737V9.263c0-1.396.562-2.734 1.562-3.721A5.37 5.37 0 0 1 9.333 4h13.334a5.37 5.37 0 0 1 3.77 1.542A5.228 5.228 0 0 1 28 9.263v14.474c0 .698-.281 1.367-.781 1.86-.5.494-1.178.771-1.886.771h-2.4ZM9.333 6.632c-.707 0-1.385.277-1.885.77a2.614 2.614 0 0 0-.781 1.861v14.474h18.666V9.263a2.61 2.61 0 0 0-.78-1.86 2.685 2.685 0 0 0-1.886-.771H9.333ZM16 22.422a2.685 2.685 0 0 1-1.886-.772 2.614 2.614 0 0 1-.78-1.86c0-.698.28-1.368.78-1.861A2.684 2.684 0 0 1 16 17.158c.707 0 1.386.277 1.886.77a2.613 2.613 0 0 1 0 3.722c-.5.494-1.179.771-1.886.771ZM8 9.262h16v5.263H8V9.263Z"
      />
    </svg>
  );
};

export default IconDirectionsTransitTrainTransportOutlined32;
