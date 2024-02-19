import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpOutlined32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M3.86 16.821h2.999v3.338c0 1.816 1.139 2.893 3.278 3.274l5.051.891v3.817c0 .533.301.859.817.859.495 0 .806-.326.806-.86v-3.522l5.052.891c2.053.37 3.278-.935 3.278-3.262v-5.426h3c.537 0 .859-.315.859-.816 0-.521-.322-.826-.86-.826h-2.999V9.764c0-2.447-1.139-3.654-3.278-3.273l-5.052.902V3.87c0-.544-.311-.87-.806-.87-.515 0-.816.326-.816.87v3.806l-5.052.902c-2.14.381-3.278 1.436-3.278 3.263v3.338h-3c-.537 0-.859.304-.859.826 0 .5.322.816.86.816Zm18.09-8.688c1.02-.174 1.568.402 1.568 1.609v5.437h-6.707V9.024l5.138-.891ZM8.481 11.819c0-.914.548-1.436 1.569-1.61l5.137-.902v5.872H8.482v-3.36Zm1.569 9.972c-1.021-.175-1.57-.697-1.57-1.61v-3.36h6.707v5.872l-5.137-.902Zm11.898 2.087-5.138-.902V16.82h6.707v5.448c0 1.153-.58 1.772-1.569 1.61Z"
      />
    </svg>
  );
};

export default IconAnalysisnpOutlined32;
