import React, { FC, SVGProps } from 'react';

export const MoveToTopIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  fill: htmlColor,
  ...props
}): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 5V3H20V5H4ZM11 11H8L12 7L16 11H13V21H11V11Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};
