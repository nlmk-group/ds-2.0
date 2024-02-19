import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconTelegramFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M28.961 4.344c-.468-.398-1.205-.455-1.966-.15h-.001c-.8.322-22.663 9.7-23.553 10.083-.162.056-1.576.584-1.43 1.759.13 1.059 1.266 1.498 1.405 1.548l5.558 1.904c.368 1.227 1.728 5.756 2.028 6.723.188.603.493 1.396 1.03 1.559.47.181.937.016 1.24-.222l3.397-3.152 5.486 4.278.13.079c.373.165.73.247 1.07.247.264 0 .516-.05.757-.148.822-.338 1.151-1.12 1.186-1.21l4.097-21.298c.25-1.137-.098-1.716-.434-2ZM13.876 20.249l-1.875 5-1.875-6.25L24.5 8.374 13.875 20.249Z"
      />
    </svg>
  );
};

export default IconTelegramFilled32;
