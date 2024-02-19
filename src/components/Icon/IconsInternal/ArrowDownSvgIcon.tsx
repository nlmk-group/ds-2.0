import React, { FC } from 'react';

const ArrowDownSvgIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ onClick, className, ...props }): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z" />
    </svg>
  );
};

export default ArrowDownSvgIcon;
