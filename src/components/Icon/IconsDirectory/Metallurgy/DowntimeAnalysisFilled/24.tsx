import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisFilled24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M21 12.356C21 17.085 16.924 21 12 21c-4.915 0-9-3.915-9-8.644 0-4.415 3.556-8.127 8.047-8.593v-.83c0-.51.432-.933.944-.933.53 0 .944.424.944.932v.83a9.156 9.156 0 0 1 4.862 2.026l.67-.635a.98.98 0 0 1 .724-.28c.512 0 .909.381.909.856a.996.996 0 0 1-.318.686l-.688.67C20.285 8.55 21 10.38 21 12.355Zm-10.42.066c.031.727.646 1.307 1.42 1.307.785 0 1.42-.61 1.42-1.365v-.053c-.02-.511-.334-.954-.811-1.175V6.924c0-.016 0-.031-.002-.046-.024-.308-.288-.54-.616-.54-.344 0-.609.255-.609.586v4.203c-.485.246-.803.703-.803 1.237 0 .02 0 .038.002.057Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisFilled24;
