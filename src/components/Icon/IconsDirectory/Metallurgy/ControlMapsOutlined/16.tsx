import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconControlMapsOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.315 11.063c.424 0 .799-.256.974-.625l7.344 2.176c.122.473.55.823 1.057.823.595 0 1.087-.493 1.087-1.098 0-.458-.283-.852-.673-1.02L12.9 6.37c.414-.152.716-.56.716-1.038 0-.606-.487-1.099-1.082-1.099-.4 0-.745.217-.935.537L7.535 3.642c0-.582-.488-1.079-1.082-1.079-.6 0-1.092.497-1.092 1.103 0 .325.142.62.366.823L3.47 8.872c-.054-.01-.103-.01-.156-.01a1.102 1.102 0 0 0 0 2.201ZM6.453 4.77c.356 0 .677-.182.872-.458l4.123 1.148c.048.438.36.802.765.926l.175 4.89a1.13 1.13 0 0 0-.711.65L4.382 9.758a1.117 1.117 0 0 0-.273-.547L6.37 4.764c.024 0 .054.005.083.005Z"
      />
    </svg>
  );
};

export default IconControlMapsOutlined16;
