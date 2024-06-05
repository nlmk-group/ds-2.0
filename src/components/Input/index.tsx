import React, { FC, useMemo, useRef } from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import Icon from '@components/Icon';
import { PseudoInput } from '@components/index';
import Typography from '@components/Typography';
import clsx from 'clsx';

import { TInputProps } from './types';

import styles from './Input.module.scss';

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
  reset = false,
  onChange,
  onReset,
  onBlur,
  color = customInputColors.default,
  className,
  inputRef,
  colored = false,
  ...props
}) => {
  const ref = inputRef || useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  id = useMemo(() => `Input-${(id && id.toString()) || generateUUID()}`, [id]);

  const isCompact = size === sizesMappingInput.s;
  const isExtraCompact = size === sizesMappingInput.xs;

  const { s, m } = sizesMappingInput;

  if (pseudo) {
    return (
      <PseudoInput label={label as string} size={isCompact ? s : m} labelColor={color}>
        {value}
      </PseudoInput>
    );
  }

  const colorClassName = styles[color as keyof typeof styles];
  const isIconVisible = value && value.length > 0;

  return (
    <div className={clsx(styles['input-wrapper'], className)}>
      {multiline ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={id}
          className={clsx(
            styles['text-field'],
            styles.textarea,
            resize && styles.resize,
            colorClassName,
            disabled && styles['disabled-input'],
            colored && styles.colored
          )}
          disabled={disabled}
          placeholder=" "
          value={value}
          onChange={onChange}
          onBlur={onBlur}
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
            colorClassName,
            colored && styles.colored,
            disabled && styles['disabled-input']
          )}
          disabled={disabled}
          type="text"
          placeholder=" "
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
      )}
      {label && (
        <label className={clsx(styles.label, colorClassName)} htmlFor={id}>
          <Typography variant="Body1-Medium" className={styles.typography}>
            {label}
          </Typography>
        </label>
      )}
      {reset && onReset && isIconVisible && !disabled && (
        <div
          className={clsx(
            styles.icon,
            icon && styles['close-icon-with-text'],
            !icon && styles['close-icon-without-text'],
            disabled && styles.disabled,
            colorClassName
          )}
          data-testid="CLOSE_ICON"
          onClick={reset && onReset}
        >
          {<Icon color={disabled ? 'disabled' : 'primary'} containerSize={24} name="IconCloseOutlined24" />}
        </div>
      )}
      {icon && (
        <div className={clsx(styles.icon, styles['icon-text'], disabled && styles.disabled, colorClassName)}>
          {icon}
        </div>
      )}

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
