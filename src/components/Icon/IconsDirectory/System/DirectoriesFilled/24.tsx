import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectoriesFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M18.773 19.823H5.462C3.823 19.823 3 19.002 3 17.348v-6.656h18v6.656c0 1.645-.815 2.476-2.227 2.476ZM21 9.491H3V7.412C3 5.799 3.792 5 5.164 5H7.5c.768 0 1.176.152 1.693.591l.479.407c.392.336.705.472 1.238.472h7.628c1.639 0 2.462.822 2.462 2.468v.553Z"
      />
    </svg>
  );
};

export default IconDirectoriesFilled24;
