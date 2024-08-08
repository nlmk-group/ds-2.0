import React, { FC } from 'react';

import Typography from '@components/Typography';
import { ETypographyVariants } from '@components/Typography/enums';
import { clsx } from 'clsx';

import { ILink } from './types';

import styles from './Link.module.scss';

import { sizeMapping, targetMapping } from './enums';
import { getTypography } from './helpers';

const Link: FC<ILink> = ({
  children,
  href,
  preventRedirect = false,
  target = targetMapping.parent,
  size = sizeMapping.body,
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  className
}) => {
  return (
    <div data-testid="WRAPPER" className={clsx(styles.wrapper, disabled && styles.disabled, className)}>
      {leftIcon !== null && (
        <div data-testid="LEFT_ICON" className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}>
          {leftIcon}
        </div>
      )}
      <a
        data-testid="LINK"
        href={preventRedirect ? 'javascript:void(0);' : href}
        target={target as targetMapping}
        rel="noreferrer noopener"
        className={className}
      >
        <Typography variant={getTypography(size as sizeMapping) as ETypographyVariants}>{children}</Typography>
      </a>
      {rightIcon !== null && (
        <div data-testid="RIGHT_ICON" className={clsx(styles['icon-wrapper'], styles[`icon-${size}`])}>
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Link;
