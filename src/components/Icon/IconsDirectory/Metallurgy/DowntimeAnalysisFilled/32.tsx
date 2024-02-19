import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDowntimeAnalysisFilled32: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M28 16.626C28 22.848 22.565 28 16 28 9.447 28 4 22.848 4 16.626 4 10.816 8.741 5.933 14.73 5.32V4.227c0-.67.576-1.227 1.258-1.227.706 0 1.26.558 1.26 1.227v1.092a12.294 12.294 0 0 1 6.481 2.665l.895-.836c.282-.256.564-.368.964-.368.683 0 1.212.502 1.212 1.126 0 .301-.153.647-.424.904l-.917.88C27.047 11.62 28 14.028 28 16.626Zm-13.747.71a1.726 1.726 0 0 1-.147-.699c0-.702.423-1.304 1.07-1.628V9.48c0-.435.353-.77.812-.77.344 0 .636.188.76.466a.733.733 0 0 1 .064.304v5.542c.412.188.731.498.913.875a1.698 1.698 0 0 1 .17.741c0 .993-.848 1.796-1.895 1.796-.794 0-1.463-.452-1.747-1.096Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconDowntimeAnalysisFilled32;
