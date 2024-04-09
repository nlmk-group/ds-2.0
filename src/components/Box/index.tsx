import React, { FC } from 'react';

import clsx from 'clsx';

import { IBox } from './types';

import styles from './Box.module.scss';

const Box: FC<IBox> = ({
  children,
  st,
  className,
  paddingSpace = 'm',
  background,
  height,
  width,
  color = 'var(--text-grey-900)',
  border,
  borderRadius = 0,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap = 'var(--24-size)',
  ...rest
}) => {
  const propsStyles = {
    backgroundColor: background,
    height,
    color,
    width,
    border,
    borderRadius,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    ...st
  };

  const paddingClassName = `padding-space-${paddingSpace}`;

  return (
    <div
      data-testid="BOX_WRAPPER"
      className={clsx(styles.wrapper, styles[paddingClassName], className)}
      style={propsStyles}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Box;
