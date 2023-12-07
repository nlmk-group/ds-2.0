import React, { FC } from 'react';

export const DatePickerArrowLeftSvgIcon: FC<{
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
      <path
        d="M18.91 11.41L14.33 16L18.91 20.59L17.5 22L11.5 16L17.5 10L18.91 11.41Z"
        fill="#808B94"
      />
    </svg>
  );
};

export default DatePickerArrowLeftSvgIcon;
