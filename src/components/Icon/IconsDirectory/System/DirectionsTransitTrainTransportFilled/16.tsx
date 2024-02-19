import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconDirectionsTransitTrainTransportFilled16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M11.467 13.632L12.667 14.658V15H3.333V14.658L4.533 13.632H3.333C2.98 13.632 2.641 13.487 2.391 13.231C2.141 12.975 2 12.627 2 12.263V4.737C2 4.011 2.28 3.315 2.781 2.802A2.632 2.632 0 014.667 2H11.333C12.09 2 12.862 2.295 13.448 2.802C13.948 3.315 14.229 4.011 14.229 4.737V12.263C14.229 12.626 14.089 12.975 13.839 13.231C13.589 13.487 13.25 13.632 12.903 13.632H11.467ZM3.333 4.737V7.474H12.667V4.737H3.333ZM8 12.263C8.354 12.263 8.693 12.119 8.943 11.863C9.193 11.607 9.333 11.259 9.333 10.895C9.333 10.531 9.193 10.183 8.943 9.927C8.693 9.671 8.354 9.527 8 9.527C7.646 9.527 7.307 9.671 7.057 9.927C6.807 10.183 6.667 10.531 6.667 10.895C6.667 11.259 6.807 11.607 7.057 11.863C7.307 12.119 7.646 12.263 8 12.263Z"
      />
    </svg>
  );
};

export default IconDirectionsTransitTrainTransportFilled16;
