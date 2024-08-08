import React, { FC } from 'react';

import clsx from 'clsx';

import { IBox } from './types';

import styles from './Box.module.scss';

const Box: FC<IBox> = ({
  children,
  st,
  className,
  p = 0,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  background,
  height,
  width,
  maxWidth,
  color = 'var(--text-grey-900)',
  border,
  borderRadius = 0,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap = '24px',
  ...rest
}) => {
  const propsStyles = {
    backgroundColor: background,
    height,
    color,
    width,
    maxWidth,
    border,
    borderRadius,
    display,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    gap,
    padding: p,
    paddingTop: pt,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingRight: pr,
    ...st
  };

  if (px !== undefined) {
    propsStyles.paddingLeft = px;
    propsStyles.paddingRight = px;
  }

  if (py !== undefined) {
    propsStyles.paddingTop = py;
    propsStyles.paddingBottom = py;
  }

  return (
    <div data-testid="BOX_WRAPPER" className={clsx(styles.wrapper, className)} style={propsStyles} {...rest}>
      {children}
    </div>
  );
};

export default Box;
