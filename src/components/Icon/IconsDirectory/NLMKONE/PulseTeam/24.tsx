import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconPulseTeam24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipPath="evenodd"
        d="M12.084 1c-6.07 0-11 4.93-11 11 0 6.06 4.93 11 11 11s11-4.93 11-11-4.93-11-11-11ZM3.209 13.5c.717 4.25 4.426 7.5 8.875 7.5 4.45 0 8.158-3.25 8.875-7.5h-3.84l-2.703 4.055a1 1 0 0 1-1.814-.368l-1.283-6.731-.786 2.36a1 1 0 0 1-.949.684H3.209Zm17.861-2C20.81 6.771 16.876 3 12.084 3c-4.792 0-8.726 3.771-8.986 8.5h5.765l1.772-5.316a1 1 0 0 1 1.931.129l1.543 8.097 1.643-2.465a1 1 0 0 1 .832-.445h4.486Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconPulseTeam24;
