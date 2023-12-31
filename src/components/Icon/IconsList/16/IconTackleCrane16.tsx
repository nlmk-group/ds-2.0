import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTackleCrane16: FC<IIconsProps> = ({
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
        d="M7.3499 4.65V1H8.6499V3.4254C8.97901 3.50279 9.29339 3.63875 9.57742 3.82853C10.0444 4.14054 10.4083 4.584 10.6232 5.10284C10.8381 5.62168 10.8944 6.1926 10.7848 6.7434C10.6752 7.2942 10.4048 7.80015 10.0077 8.19725C9.96002 8.24493 9.91077 8.29078 9.86007 8.33475L11.4224 11.8501H15V13.1501H1V11.8501H4.57756L6.13988 8.33487C5.94932 8.16966 5.78061 7.97893 5.63898 7.76697C5.32698 7.30002 5.16045 6.75104 5.16045 6.18945H6.46045C6.46045 6.49393 6.55074 6.79157 6.71989 7.04473C6.88905 7.29789 7.12948 7.4952 7.41078 7.61172C7.69208 7.72824 8.00161 7.75873 8.30023 7.69933C8.59886 7.63993 8.87316 7.49331 9.08846 7.27801C9.30376 7.06271 9.45037 6.78841 9.50977 6.48979C9.56917 6.19116 9.53869 5.88163 9.42217 5.60033C9.30565 5.31903 9.10834 5.0786 8.85518 4.90944C8.60201 4.74029 8.30438 4.65 7.9999 4.65H7.3499ZM9.99983 11.8501L8.70629 8.93964C8.6559 8.95258 8.60507 8.96416 8.55385 8.97435C8.13484 9.05769 7.7042 9.04509 7.29369 8.93968L6.00017 11.8501H9.99983Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconTackleCrane16;
