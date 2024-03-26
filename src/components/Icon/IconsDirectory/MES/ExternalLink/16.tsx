import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconExternalLink16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.74 1.06c-.312.11-.486.387-.487.775-.001.317.114.535.365.691l.187.116 1.196.012 1.195.012L9.938 4.93C8.118 6.752 7.67 7.22 7.632 7.34c-.146.46.201.995.683 1.052.389.046.301.12 2.757-2.33l2.263-2.259L13.347 5l.012 1.195.116.187c.155.251.374.367.69.365.401-.001.702-.202.793-.53.06-.218.054-4.484-.007-4.688a.801.801 0 0 0-.479-.479c-.24-.072-4.527-.064-4.732.01Zm-7.363.792c-.671.116-1.227.685-1.34 1.372-.05.306-.05 10.06 0 10.364a1.666 1.666 0 0 0 1.375 1.375c.305.05 10.06.05 10.364 0a1.662 1.662 0 0 0 1.377-1.398c.023-.146.034-.964.027-1.999-.01-1.625-.016-1.762-.083-1.887-.1-.188-.177-.268-.333-.347-.475-.24-1.063-.019-1.193.45-.026.094-.04.77-.04 1.854l-.001 1.706H2.658V3.471h1.706c1.131 0 1.759-.015 1.86-.044.237-.065.463-.314.517-.569.089-.414-.059-.76-.4-.943-.151-.081-.194-.083-1.967-.09-.997-.002-1.895.01-1.997.027Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconExternalLink16;
