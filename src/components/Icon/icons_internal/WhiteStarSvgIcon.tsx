import React, { FC } from 'react';

import { ISvgProps } from '../types';

export const WhiteStarSvgIcon: FC<ISvgProps> = (): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.81 13.12L26 13.74L20.55 18.47L22.18 25.5L16 21.77L9.82 25.5L11.46 18.47L6 13.74L13.19 13.13L16 6.5L18.81 13.12ZM12.24 22.17L16 19.9L19.77 22.18L18.77 17.9L22.09 15.02L17.71 14.64L16 10.6L14.3 14.63L9.92 15.01L13.24 17.89L12.24 22.17Z"
        fill="white"
      />
    </svg>
  );
};
