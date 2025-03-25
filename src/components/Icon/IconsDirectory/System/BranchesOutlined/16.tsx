import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconBranchesOutlined16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M4.502 8.667H1V7.333h3.5c.712 0 1.228-.11 1.549-.333.32-.222.65-.511.988-.867.444-.466 1.018-.933 1.724-1.4.706-.466 1.893-.71 3.562-.733L11.22 2.933 12.2 2 15 4.667l-2.8 2.666-.98-.95 1.102-1.05c-1.341.023-2.28.206-2.817.55a7.886 7.886 0 0 0-1.418 1.15c-.163.167-.33.33-.498.492a4.047 4.047 0 0 1-.319.276A5.776 5.776 0 0 1 7.003 8a5.772 5.772 0 0 1 .387.296h-.001c.07.06.137.119.2.179.169.161.335.325.498.492.409.422.881.805 1.418 1.15.537.344 1.476.527 2.817.55l-1.102-1.05.98-.95 2.8 2.666L12.2 14l-.98-.933L12.322 12c-1.668-.022-2.855-.267-3.56-.733-.707-.467-1.281-.934-1.725-1.4A6.489 6.489 0 0 0 6.05 9c-.32-.222-.837-.333-1.547-.333Z"
      />
    </svg>
  );
};

export default IconBranchesOutlined16;
