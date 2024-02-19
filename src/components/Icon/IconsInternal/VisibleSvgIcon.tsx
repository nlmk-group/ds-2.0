import React, { FC } from 'react';

import { ISvgProps } from '../types';

const VisibleSvgIcon: FC<ISvgProps> = (): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C11 8 6.73 11.11 5 15.5C6.73 19.89 11 23 16 23C21 23 25.27 19.89 27 15.5C25.27 11.11 21 8 16 8ZM16 20.5C13.24 20.5 11 18.26 11 15.5C11 12.74 13.24 10.5 16 10.5C18.76 10.5 21 12.74 21 15.5C21 18.26 18.76 20.5 16 20.5ZM13 15.5C13 13.84 14.34 12.5 16 12.5C17.66 12.5 19 13.84 19 15.5C19 17.16 17.66 18.5 16 18.5C14.34 18.5 13 17.16 13 15.5Z"
        fill="#167FFB"
      />
    </svg>
  );
};

export default VisibleSvgIcon;
