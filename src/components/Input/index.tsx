import React, { FC, Ref, useMemo, useRef } from 'react';

import { customInputColors, generateUUID, sizesMappingInput } from '@components/declaration';
import { Icon, PseudoInput, Typography } from '@components/index';
import clsx from 'clsx';

import { TInputProps } from './types';

import styles from './Input.module.scss';

/**
 * Компонент Input для создания текстовых полей ввода различных стилей и размеров.
 * @component
 * @param {Object} props - Свойства компонента Input.
 * @param {string} [props.id] - Уникальный идентификатор инпута.
 * @param {string} [props.value] - Значение инпута.
 * @param {boolean} [props.disabled=false] - Флаг отключения инпута.
 * @param {string} [props.label] - Текст метки (label) инпута.
 * @param {boolean} [props.pseudo=false] - Флаг псевдо-инпута.
 * @param {ReactNode} [props.icon] - Иконка инпута.
 * @param {boolean} [props.multiline=false] - Флаг многострочного режима.
 * @param {boolean} [props.resize=false] - Флаг возможности изменения размера (для textarea).
 * @param {ReactNode} [props.helperText] - Вспомогательный текст.
 * @param {sizesMappingInput} [props.size=sizesMappingInput.m] - Размер инпута.
 * @param {boolean} [props.reset=false] - Флаг наличия кнопки сброса.
 * @param {function} [props.onChange] - Обработчик изменения значения.
 * @param {function} [props.onReset] - Обработчик сброса значения.
 * @param {function} [props.onBlur] - Обработчик потери фокуса.
 * @param {customInputColors} [props.color=customInputColors.default] - Цвет инпута.
 * @param {string} [props.className] - Дополнительный CSS класс.
 * @param {Ref<HTMLInputElement | HTMLTextAreaElement>} [props.inputRef] - Реф для доступа к DOM-элементу инпута.
 * @param {boolean} [props.colored=false] - Флаг цветного фона.
 * @returns {JSX.Element} Компонент Input.
 */
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

  const sizeStyles = {
    [sizesMappingInput.m]: styles['text-field'],
    [sizesMappingInput.s]: clsx(styles['text-field'], styles.compact),
    [sizesMappingInput.xs]: clsx(styles['text-field'], styles['extra-compact'])
  };

  if (pseudo) {
    return (
      <PseudoInput
        label={label as string}
        size={size === sizesMappingInput.s ? sizesMappingInput.s : sizesMappingInput.m}
        labelColor={color}
      >
        {value}
      </PseudoInput>
    );
  }

  const colorClassName = styles[color];
  const isResetIconVisible = reset && onReset && value && value.length > 0 && !disabled && !multiline;
  const isCustomIconVisible = icon && !multiline;

  return (
    <div className={clsx(styles['input-wrapper'], colored && styles.colored, className)}>
      {multiline ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
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
          ref={ref as Ref<HTMLInputElement>}
          id={id}
          className={clsx(
            sizeStyles[size],
            icon && styles['input-with-icon'],
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
      {isResetIconVisible && (
        <div
          className={clsx(styles.icon, styles.reset, icon && styles['reset-with-icon'], colorClassName)}
          data-testid="CLOSE_ICON"
          onClick={onReset}
        >
          {<Icon htmlColor="var(--steel-70)" containerSize={24} name="IconCloseOutlined24" />}
        </div>
      )}
      {isCustomIconVisible && (
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
