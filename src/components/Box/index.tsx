import React, { FC } from 'react';

import clsx from 'clsx';

import { IBox } from './types';

import styles from './Box.module.scss';

const getPadding = (p: string | number) => {
  if (typeof p === 'number') {
    return `${p}px`;
  }
  return p;
};

const Box: FC<IBox> = ({
  children,
  st,
  className,
  p,
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
  borderRadius,
  display = 'flex',
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  gap = '24px',
  ...rest
}) => {
  const paddings = {
    pl: getPadding(px ?? pl ?? p ?? 0),
    pr: getPadding(px ?? pr ?? p ?? 0),
    pt: getPadding(py ?? pt ?? p ?? 0),
    pb: getPadding(py ?? pb ?? p ?? 0)
  };
  const padding = `${paddings.pt} ${paddings.pr} ${paddings.pb} ${paddings.pl}`;
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
    padding,
    ...st
  };

  return (
    <div data-testid="BOX_WRAPPER" className={clsx(styles.wrapper, className)} style={propsStyles} {...rest}>
      {children}
    </div>
  );
};

export default Box;
