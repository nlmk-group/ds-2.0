import React, { FC } from 'react';

import { IIconsProps } from '@components/Icon/types';
import clsx from 'clsx';

import styles from '@components/Icon/IconsList/IconsList.module.scss';

export const IconMetallurgyKovsh16: FC<IIconsProps> = ({
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
        d="M7.6501 2.23066L6.45972 1.04028L5.54048 1.95952L6.08086 2.4999L2.95469 5.62607C1.9198 6.66096 1.9198 8.33885 2.95469 9.37374L4.62627 11.0453C5.66116 12.0802 7.33904 12.0802 8.37393 11.0453L11.499 7.92022C11.7244 8.16813 11.8501 8.49175 11.8501 8.82833V13.3501H2V14.6501H14V13.3501H13.1501L13.1501 8.82833C13.1501 8.12551 12.8709 7.45147 12.3739 6.9545L10.4597 5.04028L9.54048 5.95952L10.5809 6.9999L7.45469 10.1261C6.92748 10.6533 6.07271 10.6533 5.54551 10.1261L3.87393 8.4545C3.34672 7.92729 3.34672 7.07252 3.87393 6.54531L6.3501 4.06914L6.3501 6.9999C6.3501 7.35889 6.64111 7.6499 7.0001 7.6499C7.35908 7.6499 7.6501 7.35889 7.6501 6.9999V2.23066Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconMetallurgyKovsh16;
