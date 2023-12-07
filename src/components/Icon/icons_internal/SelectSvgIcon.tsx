import React, { FC } from 'react';

import { ISvgProps } from '../types';

export const SelectSvgIcon: FC<ISvgProps> = (props: ISvgProps): JSX.Element => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.91 8.59L12.5 13.17L17.09 8.59L18.5 10L12.5 16L6.5 10L7.91 8.59Z"
        fill="#167FFB"
      />
    </svg>
  );
};
