import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconFilterExceptionContains16: FC<IIconsProps> = ({
  color = 'inherit',
  htmlColor
}) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1273 12.7641L12.3547 13.5367L8.82079 10.0028C8.69271 10.0294 8.55656 10.0427 8.41234 10.0427C7.90837 10.0427 7.50605 9.84938 7.20538 9.46281L7.14955 9.95676H6.03279V7.21477L1.59058 2.77255L2.36313 1.99999L13.1273 12.7641ZM6.03279 4.03212L7.27411 5.27343V3.35931H6.03279V4.03212ZM7.50635 5.50568L8.24435 6.24368C8.46369 6.27614 8.63423 6.38133 8.75596 6.55925C8.8198 6.65132 8.86995 6.76682 8.90642 6.90575L10.1923 8.19159C10.2112 8.02944 10.2206 7.85757 10.2206 7.676V7.60728C10.2206 6.85132 10.0588 6.26574 9.73527 5.85054C9.41456 5.43247 8.97072 5.22344 8.40375 5.22344C8.05396 5.22344 7.75483 5.31752 7.50635 5.50568ZM7.27411 8.55223V8.45609L7.83116 9.01314C7.57478 8.95321 7.3891 8.79957 7.27411 8.55223ZM3.75323 9.54013C3.779 9.70621 3.82053 9.84509 3.87779 9.95676H5.132V9.88374C5.01173 9.65753 4.95017 9.32393 4.9473 8.88296V6.8685C4.9473 6.34735 4.77836 5.9436 4.44047 5.65725C4.10544 5.36804 3.65158 5.22344 3.07888 5.22344C2.70091 5.22344 2.36015 5.2893 2.05662 5.42102C1.75309 5.54987 1.51829 5.72884 1.35221 5.95792C1.18613 6.187 1.10309 6.43612 1.10309 6.70528H2.3444C2.3444 6.53061 2.4031 6.39317 2.52051 6.29294C2.64077 6.19272 2.80542 6.14261 3.01446 6.14261C3.25213 6.14261 3.42537 6.20704 3.53418 6.3359C3.64585 6.46475 3.70169 6.63656 3.70169 6.85132V7.11763H3.13043C2.44033 7.12049 1.91202 7.25364 1.54549 7.51708C1.18183 7.78052 1 8.1585 1 8.65102C1 9.0519 1.1489 9.38407 1.4467 9.64751C1.74737 9.91095 2.12535 10.0427 2.58064 10.0427C3.0617 10.0427 3.45257 9.87515 3.75323 9.54013ZM3.35807 8.97316C3.20345 9.05334 3.0345 9.09342 2.85124 9.09342C2.66225 9.09342 2.51335 9.04331 2.40454 8.94309C2.29572 8.84287 2.24132 8.71545 2.24132 8.56082L2.24561 8.4878C2.2857 8.05828 2.61643 7.84352 3.23781 7.84352H3.70169V8.64243C3.62724 8.77987 3.5127 8.89012 3.35807 8.97316ZM13.0543 9.04188C13.2833 9.04188 13.4695 8.97889 13.6126 8.85289C13.7558 8.7269 13.8303 8.55939 13.836 8.35035H15C14.9971 8.66533 14.9112 8.95455 14.7423 9.21799C14.5733 9.47856 14.3414 9.68187 14.0465 9.82791C13.7544 9.97108 13.4308 10.0427 13.0757 10.0427C12.4114 10.0427 11.8874 9.8322 11.5037 9.41127C11.12 8.98748 10.9281 8.40333 10.9281 7.65882V7.57721C10.9281 6.86134 11.1186 6.29008 11.4994 5.86342C11.8802 5.43676 12.4028 5.22344 13.0672 5.22344C13.6484 5.22344 14.1138 5.38952 14.4631 5.72168C14.8153 6.05098 14.9943 6.49052 15 7.04031H13.836C13.8303 6.79978 13.7558 6.60506 13.6126 6.45616C13.4695 6.3044 13.2805 6.22852 13.0457 6.22852C12.7565 6.22852 12.5374 6.33446 12.3885 6.54636C12.2425 6.7554 12.1695 7.09615 12.1695 7.56862V7.69748C12.1695 8.17568 12.2425 8.5193 12.3885 8.72833C12.5345 8.93737 12.7565 9.04188 13.0543 9.04188Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconFilterExceptionContains16;