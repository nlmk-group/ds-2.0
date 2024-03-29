import React, { FC } from 'react';
import clsx from 'clsx';

import Typography from '@components/Typography';

import { IButtonProps } from './types';
import { EVariant, ESizes, EFill } from './enums'

import styles from './Button.module.scss';
import BadgeHelper from './BadgeHelper'

export const Button: FC<IButtonProps> = ({
  children,
  variant = EVariant['primary'],
  fill = EFill.solid,
  startIcon,
  endIcon,
  badge,
  size = ESizes.m,
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
    variant === EVariant.secondary ? styles[variant] : styles[`${variant}-${fill}`],
    styles.button,
    iconButton && styles['icon-button'],
    sizeClassesMapping[size],
    iconButton && iconButtonSizeClassesMapping[size]
  );

  const iconClass = (position: 'left' | 'right') =>
    clsx(
      styles.icon,
      styles[`${position}-icon` as keyof typeof styles],
      (size === 's' || size === 'xs') && styles[`compact-${position}-icon` as keyof typeof styles],
      size === 'm' && styles['icon-big-wrapper']
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
      <Typography
        className={clsx(
          styles[`text-height-${size}`],
          styles['label-wrapper']
        )}
        variant={size === 'xs' ? 'Caption-Bold' : 'Body1-Bold'}
      >
        {children}
      </Typography>
      {endIcon && <span className={iconClass('right')}>{endIcon}</span>}
      {badge && (
        <span className={iconClass('right')}>
          <BadgeHelper
            {...{
              badge,
              variant,
              fill,
              size
            }}
          />
        </span>
      )}
    </button>
  );
};

export default Button;
