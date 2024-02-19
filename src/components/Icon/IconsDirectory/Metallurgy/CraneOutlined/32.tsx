import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconCraneOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M16.96 22.275a.982.982 0 0 1-.975.977.978.978 0 0 1-.976-.977v-4.492a.98.98 0 0 1 .976-.976c.535 0 .976.441.976.976v4.492Zm-5.904.977a.982.982 0 0 0 .976-.977v-4.492a.981.981 0 0 0-.976-.976.981.981 0 0 0-.976.976v4.492a.98.98 0 0 0 .976.977Zm10.836-.977a.982.982 0 0 1-.976.977.979.979 0 0 1-.976-.977v-4.492c0-.535.441-.976.976-.976.535 0 .976.441.976.976v4.492Z"
      />
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="m18.917 6.038 8.476 6.504c.357.162.612.52.607.936V27.03c-.049.51-.51.97-1.067.97H5.03c-.558 0-1.018-.46-1.018-1.019v-13.41a.903.903 0 0 1 .362-.877c.015-.01 8.672-6.656 8.672-6.656H5.03c-.558 0-1.018-.46-1.018-1.02C4.012 4.46 4.472 4 5.03 4h21.956C27.545 4 28 4.46 28 5.019c0 .558-.51 1.019-1.067 1.019h-8.016Zm-10.993 6.42h16.08l-8.02-6.166-8.06 6.167ZM6 26.012h19.968V14.447H6v11.564Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconCraneOutlined32;
