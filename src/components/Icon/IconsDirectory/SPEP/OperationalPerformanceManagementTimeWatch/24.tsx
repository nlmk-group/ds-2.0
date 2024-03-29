import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconOperationalPerformanceManagementTimeWatch24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.232 8.176-.01.009a7.581 7.581 0 0 1-.022 9.777 7.498 7.498 0 0 1-2.828 2.064 7.461 7.461 0 0 1-6.776-.529 7.518 7.518 0 0 1-2.477-2.478 7.569 7.569 0 0 1-1.091-3.337H3.875a.623.623 0 0 1-.624-.629.63.63 0 0 1 .624-.628h3.154a7.55 7.55 0 0 1 .254-1.428.628.628 0 0 1 .771-.434.622.622 0 0 1 .45.531.631.631 0 0 1-.019.245 6.282 6.282 0 0 0-.2 1.086H9.5a.623.623 0 0 1 .623.628.63.63 0 0 1-.623.628H8.28a6.298 6.298 0 0 0 1.675 3.688 6.219 6.219 0 0 0 7.537 1.2 6.269 6.269 0 0 0 2.726-2.987 6.314 6.314 0 0 0 .345-4.038 6.286 6.286 0 0 0-2.18-3.41 6.226 6.226 0 0 0-7.63-.108h.62a.623.623 0 0 1 .626.628.63.63 0 0 1-.625.629H7a.623.623 0 0 1-.625-.629A.63.63 0 0 1 7 8.026h1.914a7.458 7.458 0 0 1 4.964-2.485l-.002-.013-.001-.016V3.627A.63.63 0 0 1 14.5 3a.623.623 0 0 1 .625.627v1.885c0 .005 0 .01-.002.015a.133.133 0 0 0 0 .013 7.45 7.45 0 0 1 4.219 1.76.117.117 0 0 0 .008-.01.123.123 0 0 1 .01-.012l.948-.953a.623.623 0 0 1 1.067.444.63.63 0 0 1-.183.444l-.948.953a.125.125 0 0 1-.012.01ZM4.5 8.654a.63.63 0 0 0-.625-.628h-1.25A.623.623 0 0 0 2 8.654a.63.63 0 0 0 .625.629h1.25a.623.623 0 0 0 .625-.629Zm9.558-.444a.623.623 0 0 1 1.067.444v2.961a1.561 1.561 0 0 1 .938 1.438 1.574 1.574 0 0 1-.938 1.438v.448a.632.632 0 0 1-.385.582.622.622 0 0 1-.818-.341.631.631 0 0 1-.047-.241v-.448a1.574 1.574 0 0 1 0-2.876v-2.96a.63.63 0 0 1 .183-.445Zm-8.933 8.614h1.25a.62.62 0 0 1 .58.387.632.632 0 0 1-.34.822.62.62 0 0 1-.24.048h-1.25a.62.62 0 0 1-.579-.388.631.631 0 0 1 .34-.822.62.62 0 0 1 .24-.047Z"
        fill={htmlColor || 'currentColor'}
      />
    </svg>
  );
};

export default IconOperationalPerformanceManagementTimeWatch24;
