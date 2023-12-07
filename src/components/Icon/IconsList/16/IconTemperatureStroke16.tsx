import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../IconsList.module.scss';

import { IIconsProps } from '../../types';

const IconTemperatureStroke16: FC<IIconsProps> = ({
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
        d="M7.97705 10.1125C7.37299 10.1125 6.8833 10.6022 6.8833 11.2063C6.8833 11.8104 7.37299 12.3 7.97705 12.3C8.58111 12.3 9.0708 11.8104 9.0708 11.2063C9.0708 10.6022 8.58111 10.1125 7.97705 10.1125ZM7.97705 10.1125V5.73755M6.22705 8.96411V3.55005C6.22705 3.08592 6.41143 2.6408 6.73961 2.31261C7.0678 1.98442 7.51292 1.80005 7.97705 1.80005C8.44118 1.80005 8.8863 1.98442 9.21449 2.31261C9.54268 2.6408 9.72705 3.08592 9.72705 3.55005V8.96411C10.1938 9.32851 10.5352 9.82952 10.7035 10.3972C10.8718 10.965 10.8587 11.5711 10.666 12.131C10.4733 12.6909 10.1107 13.1767 9.62863 13.5206C9.14658 13.8645 8.5692 14.0494 7.97705 14.0494C7.3849 14.0494 6.80752 13.8645 6.32547 13.5206C5.84343 13.1767 5.48076 12.6909 5.28807 12.131C5.09538 11.5711 5.08229 10.965 5.25062 10.3972C5.41895 9.82952 5.7603 9.32851 6.22705 8.96411Z"
        stroke={htmlColor || 'currentColor'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTemperatureStroke16;
