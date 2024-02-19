import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconAnalysisnpFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M6.859 16.821h-3c-.537 0-.859-.315-.859-.816 0-.521.322-.826.86-.826h2.999v-3.338c0-1.827 1.139-2.882 3.278-3.263l5.051-.902V3.87c0-.544.301-.87.817-.87.495 0 .806.326.806.87v3.523l5.052-.902c2.14-.381 3.278.826 3.278 3.273v5.415h3c.537 0 .859.304.859.826 0 .5-.322.816-.86.816h-2.999v5.426c0 2.327-1.225 3.632-3.278 3.262l-5.052-.891v3.523c0 .533-.311.859-.806.859-.515 0-.816-.326-.816-.86v-3.816l-5.052-.892c-2.14-.38-3.278-1.457-3.278-3.273v-3.338Zm8.38 5.89v-5.867H8.48v-1.6h6.757V9.301l1.6-.278v6.221h6.678v1.6h-6.678v6.136l-1.6-.27Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconAnalysisnpFilled32;
