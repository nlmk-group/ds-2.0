import React, { FC } from 'react';

import Typography from '@components/Typography';
import clsx from 'clsx';

import { IButtonProps } from './types';

import styles from './Button.module.scss';

export const Button: FC<IButtonProps> = ({
  children,
  variant = 'primary',
  startIcon,
  endIcon,
  badge,
  size = 'm',
  iconButton = false,
  className,
  ...props
}) => {
  const sizeClassesMapping = {
    s: styles.compact,
    xs: styles['extra-compact'],
    m: null
  };

  const iconButtonSizeClassesMapping = {
    s: styles['icon-button-compact'],
    xs: styles['icon-button-extra-compact'],
    m: null
  };

  const classes = clsx(
    styles[variant as keyof typeof styles],
    styles.button,
    iconButton && styles['icon-button'],
    sizeClassesMapping[size],
    iconButton && iconButtonSizeClassesMapping[size]
  );

  const iconClass = (position: 'left' | 'right') =>
    clsx(
      styles.icon,
      variant === 'bar'
        ? styles[`bar-${position}-icon` as keyof typeof styles]
        : styles[`${position}-icon` as keyof typeof styles],
      (size === 's' || size === 'xs') &&
        styles[`compact-${position}-icon` as keyof typeof styles]
    );

  if (iconButton) {
    return (
      <button className={clsx(classes, className)} {...props}>
        <span className={styles.icon}>{iconButton}</span>
      </button>
    );
  }

  return (
    <button className={clsx(classes, className)} {...props}>
      {startIcon && <span className={iconClass('left')}>{startIcon}</span>}
      <Typography variant={size === 'xs' ? 'Caption-Bold' : 'Body1-Bold'}>
        {children}
      </Typography>
      {endIcon && <span className={iconClass('right')}>{endIcon}</span>}
      {badge && <span className={iconClass('right')}>{badge}</span>}
    </button>
  );
};

export default Button;
