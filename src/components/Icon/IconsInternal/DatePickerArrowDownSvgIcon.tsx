import React, { FC } from 'react';

const DatePickerArrowDownSvgIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ onClick, className, ...props }): JSX.Element => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12.5 13.0913L17.5558 8L19 9.45436L12.5 16L6 9.45436L7.44422 8L12.5 13.0913Z" fill="#167FFB" />
    </svg>
  );
};

export default DatePickerArrowDownSvgIcon;
