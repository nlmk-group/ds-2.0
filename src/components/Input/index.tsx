import React, { FC, useMemo, useRef } from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { PseudoInput } from '@components/index';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { TInputProps } from './types';

import styles from './Input.module.scss';

const sizeToVariantMapping = {
  [sizesMappingInput.xs]: 'Caption-Medium',
  [sizesMappingInput.s]: 'Body2-Medium',
  [sizesMappingInput.m]: 'Body1-Medium'
} as const;

const Input: FC<TInputProps> = ({
  id,
  value,
  disabled = false,
  label,
  pseudo = false,
  icon,
  multiline = false,
  resize = false,
  helperText,
  size = sizesMappingInput.m,
  onChange,
  color = customInputColors.default,
  className,
  inputRef,
  ...props
}) => {
  const ref = inputRef || useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  id = useMemo(() => `Input-${(id && id.toString()) || generateUUID()}`, [id]);

  const isCompact = size === sizesMappingInput.s;
  const isExtraCompact = size === sizesMappingInput.xs;
  const typographyVariant = sizeToVariantMapping[size];

  const { s, m } = sizesMappingInput;

  if (pseudo) {
    return (
      <PseudoInput label={label as string} size={isCompact ? s : m} labelColor={color}>
        {value}
      </PseudoInput>
    );
  }

  const colorClassName = styles[color as keyof typeof styles];

  return (
    <div className={clsx(styles['input-wrapper'], className)}>
      {multiline ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          className={clsx(styles['text-field'], styles.textarea, resize && styles.resize, colorClassName)}
          disabled={disabled}
          placeholder=" "
          value={value}
          onChange={onChange}
          {...props}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          id={id}
          className={clsx(
            styles['text-field'],
            icon && styles['input-with-icon'],
            isCompact && styles.compact,
            isExtraCompact && styles['extra-compact'],
            colorClassName
          )}
          disabled={disabled}
          type="text"
          placeholder=" "
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
      {label && (
        <label className={clsx(styles.label, colorClassName)} htmlFor={id}>
          <Typography variant={typographyVariant} className={styles.typography}>
            {label}
          </Typography>
        </label>
      )}
      {icon && <div className={clsx(styles.icon, disabled && styles.disabled, colorClassName)}>{icon}</div>}
      {helperText && (
        <Typography
          variant="Caption-Medium"
          id={`${id}-helper-text`}
          className={clsx(styles['helper-text'], colorClassName)}
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
