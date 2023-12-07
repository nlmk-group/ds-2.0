import React, { FC } from 'react';

export const DatePickerArrowRightSvgIcon: FC<{
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
        d="M13.0898 11.41L17.6698 16L13.0898 20.59L14.4998 22L20.4998 16L14.4998 10L13.0898 11.41Z"
        fill="#808B94"
      />
    </svg>
  );
};

export default DatePickerArrowRightSvgIcon;
