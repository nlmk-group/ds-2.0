import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFileZIP16: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        fillRule="evenodd"
        d="M15 4.818v8.91c0 .7-.585 1.272-1.3 1.272H3.294A1.285 1.285 0 0 1 2 13.727l.006-11.454C2.006 1.573 2.585 1 3.3 1h7.8L15 4.818Zm-11.7 8.91h10.4V5.454h-2.275a.965.965 0 0 1-.975-.955V2.273H8.051a.48.48 0 0 1-.435.455l-.05.002h-.427v.835h.427l.05.003a.481.481 0 0 1 .437.475.48.48 0 0 1-.437.474l-.05.003h-.427v.835h.427l.05.003a.481.481 0 0 1 .437.474c0 .247-.192.45-.437.475l-.05.003h-.427v.835h.427l.05.002a.481.481 0 0 1 .437.475c0 .247-.192.45-.437.475l-.05.002h-.427v.836h.427c.269 0 .487.213.487.477v1.491c0 .758-.627 1.373-1.401 1.373S5.25 11.66 5.25 10.903V9.412c0-.264.218-.477.487-.477h.427v-1.73h-.426a.482.482 0 0 1-.488-.478c0-.263.218-.477.487-.477h.427v-.835h-.426a.482.482 0 0 1-.488-.478c0-.263.218-.477.487-.477h.427v-.835h-.426a.482.482 0 0 1-.488-.477c0-.264.218-.478.487-.478h.427v-.397H3.3v11.454Zm2.925-2.825c0 .231.191.418.427.418a.422.422 0 0 0 .426-.418V9.89h-.853v1.014Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default IconFileZIP16;
