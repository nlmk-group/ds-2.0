import React, { FC } from 'react';

import styles from './IconsInternal.module.scss';

import { ISvgProps } from '../types';

const StarSvgIcon: FC<ISvgProps> = (props: ISvgProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? ''}
      onClick={props.onClick}
    >
      {!props.active && (
        <path
          className={styles.path}
          d="M12.81 7.12L20 7.74L14.55 12.47L16.18 19.5L10 15.77L3.82 19.5L5.46 12.47L0 7.74L7.19 7.13L10 0.5L12.81 7.12ZM6.24 16.17L10 13.9L13.77 16.18L12.77 11.9L16.09 9.02L11.71 8.64L10 4.6L8.3 8.63L3.92 9.01L7.24 11.89L6.24 16.17Z"
        />
      )}
      {props.active && (
        <path
          d="M20 7.74L12.81 7.12L10 0.5L7.19 7.13L0 7.74L5.46 12.47L3.82 19.5L10 15.77L16.18 19.5L14.55 12.47L20 7.74Z"
          fill="white"
        />
      )}
    </svg>
  );
};

export default StarSvgIcon;
