import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFormatLineSpacingOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8.707 9.439h3.171L7.439 5 3 9.439h3.17v12.683H3l4.439 4.439 4.439-4.439h-3.17V9.439Zm5.073-2.537V9.44H29V6.902H13.78Zm0 17.756H29v-2.536H13.78v2.537Zm0-7.61H29v-2.536H13.78v2.537Z"
      />
    </svg>
  );
};

export default IconFormatLineSpacingOutlined32;
