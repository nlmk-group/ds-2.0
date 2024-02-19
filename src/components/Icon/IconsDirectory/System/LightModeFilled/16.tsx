import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconLightModeFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M8 4.818a3.183 3.183 0 0 0 0 6.364 3.183 3.183 0 0 0 0-6.364ZM1.636 8.636H2.91c.35 0 .637-.286.637-.636a.638.638 0 0 0-.637-.636H1.636A.638.638 0 0 0 1 8c0 .35.286.636.636.636Zm11.455 0h1.273c.35 0 .636-.286.636-.636a.638.638 0 0 0-.636-.636H13.09a.638.638 0 0 0-.636.636c0 .35.286.636.636.636Zm-5.727-7V2.91c0 .35.286.636.636.636.35 0 .636-.286.636-.636V1.636A.638.638 0 0 0 8 1a.638.638 0 0 0-.636.636Zm0 11.455v1.273c0 .35.286.636.636.636.35 0 .636-.286.636-.636V13.09A.638.638 0 0 0 8 12.455a.638.638 0 0 0-.636.636ZM4.176 3.278a.634.634 0 1 0-.898.897l.675.675a.634.634 0 1 0 .897-.897l-.674-.675Zm7.871 7.872a.634.634 0 1 0-.897.897l.675.675a.634.634 0 1 0 .897-.897l-.675-.675Zm.675-6.975a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .897.897l.675-.675ZM4.85 12.047a.634.634 0 1 0-.897-.897l-.675.675a.634.634 0 1 0 .898.897l.674-.675Z"
      />
    </svg>
  );
};

export default IconLightModeFilled16;
