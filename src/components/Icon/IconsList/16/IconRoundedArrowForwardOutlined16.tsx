import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

export const IconRoundedArrowForwardOutlined16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        d="M12.3808 4.87719H7.47368C5.20641 4.87719 3.36842 6.62766 3.36842 8.78697C3.36842 10.9463 5.20641 12.6967 7.47368 12.6967H13.6316V14H7.47368C4.45065 14 2 11.666 2 8.78697C2 5.90789 4.45065 3.57393 7.47368 3.57393H12.3808L10.6457 1.9214L11.6132 1L15 4.22556L11.6132 7.45113L10.6457 6.52972L12.3808 4.87719Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconRoundedArrowForwardOutlined16;
