import React, { FC } from 'react';

import clsx from 'clsx';

import styles from '../../IconsDirectory.module.scss';

import { IIconsProps } from '../../../types';

const IconFunctionOutlined24: FC<IIconsProps> = ({ color = 'inherit', htmlColor }) => {
  const classes = clsx(styles[color as keyof typeof styles]);
  return (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" className={classes}>
      <path
        fill={htmlColor || 'currentColor'}
        d="M10 18v-2h1.55l2.625-3-2.625-3H9.9l-1.6 8.6c-.133.75-.442 1.337-.925 1.762-.483.426-1.1.638-1.85.638s-1.358-.2-1.825-.6c-.467-.4-.7-.933-.7-1.6 0-.533.142-.963.425-1.288a1.365 1.365 0 0 1 1.075-.487c.417 0 .77.142 1.063.425.291.283.437.625.437 1.025 0 .083-.004.158-.013.225-.008.067-.02.142-.037.225a.353.353 0 0 0 .212-.137.84.84 0 0 0 .138-.313L7.85 10H5V8h3.225l.525-2.85c.117-.633.43-1.15.938-1.55.508-.4 1.112-.6 1.812-.6.733 0 1.333.217 1.8.65.467.433.7.975.7 1.625 0 .5-.142.912-.425 1.237A1.365 1.365 0 0 1 12.5 7c-.417 0-.77-.142-1.063-.425A1.406 1.406 0 0 1 11 5.525c0-.083.004-.158.012-.225.009-.067.021-.142.038-.225a.448.448 0 0 0-.225.15.852.852 0 0 0-.125.3L10.275 8H15v2h-.8l1.3 1.475L16.8 10H16V8h5v2h-1.55l-2.625 3 2.625 3H21v2h-5v-2h.8l-1.3-1.5-1.3 1.5h.8v2h-5Z"
      />
    </svg>
  );
};

export default IconFunctionOutlined24;
