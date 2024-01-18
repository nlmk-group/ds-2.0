import React, { FC } from 'react';

import { ISvgProps } from '../types';

export const CalendarSvgIcon: FC<ISvgProps> = (props: ISvgProps): JSX.Element => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 7H24C25.1 7 26 7.9 26 9V25C26 26.1 25.1 27 24 27H8C6.9 27 6 26.1 6 25V9C6 7.9 6.9 7 8 7H9V5H11V7H21V5H23V7ZM8 25H24V12H8V25Z"
        fill="#167FFB"
      />
    </svg>
  );
};

export default CalendarSvgIcon;
