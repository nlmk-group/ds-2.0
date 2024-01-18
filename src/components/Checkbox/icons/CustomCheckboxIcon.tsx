import type { SVGProps } from 'react';
import React, { FC } from 'react';

export const CustomCheckboxIcon: FC<SVGProps<SVGSVGElement>> = ({ fill }): JSX.Element => {
  return (
    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.701 0.971H2.701C1.601 0.971 0.701 1.871 0.701 2.971V16.971C0.701 18.071 1.601 18.971 2.701 18.971H16.701C17.801 18.971 18.701 18.071 18.701 16.971V2.971C18.701 1.871 17.801 0.971 16.701 0.971ZM7.701 14.971L2.701 10.163L4.101 8.817L7.701 12.278L15.301 4.971L16.701 6.317L7.701 14.971Z"
        fill={fill || 'currentColor'}
      />
    </svg>
  );
};
