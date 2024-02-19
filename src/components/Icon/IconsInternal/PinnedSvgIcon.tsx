import React, { FC } from 'react';

import { ISvgProps } from '../types';

const PinnedSvgIcon: FC<ISvgProps> = (): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6H11C10.45 6 10 6.45 10 7C10 7.55 10.45 8 11 8H12V13C12 14.66 10.66 16 9 16V18H14.97V25L15.97 26L16.97 25V18H23V16C21.34 16 20 14.66 20 13Z"
        fill="#167FFB"
      />
    </svg>
  );
};

export default PinnedSvgIcon;
