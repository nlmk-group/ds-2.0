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
 * @param {boolean} [props.isMandatory] - Флаг, показывающий, является ли поле обязательным.
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
 * @param {string} [props.placeholder=''] - Текст плейсхолдера. Скрывается при наличии label и отсутствии фокуса.
 * @extends {InputHTMLAttributes<HTMLInputElement>} Наследует все стандартные атрибуты input элемента
 * @extends {TextareaHTMLAttributes<HTMLTextAreaElement>} Наследует все стандартные атрибуты textarea элемента
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
  placeholder = '',
  isMandatory,
  ...props
}) => {
  const ref = inputRef || useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  id = useMemo(() => `Input-${(id && id.toString()) || generateUUID()}`, [id]);

  const sizeStyles = {
    [sizesMappingInput.m]: undefined,
    [sizesMappingInput.s]: styles.compact,
    [sizesMappingInput.xs]: styles['extra-compact']
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
  const isResetIconVisible = reset && onReset && value && value.length > 0 && !disabled && !resize;
  const isCustomIconVisible = icon && !multiline;

  const hasBothIcons = isResetIconVisible && isCustomIconVisible;
  const hasIcon = isCustomIconVisible;
  const hasReset = isResetIconVisible;

  return (
    <div className={clsx(styles.input, colored && styles.colored, className)} data-ui-input>
      {multiline ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
          id={id}
          className={clsx(
            styles.textfield,
            styles.textarea,
            resize && styles.resize,
            {
              [styles['textarea--with-reset']]: hasReset
            },
            colorClassName,
            colored && styles.colored
          )}
          data-ui-textfield
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...props}
        />
      ) : (
        <input
          ref={ref as Ref<HTMLInputElement>}
          id={id}
          className={clsx(
            styles.textfield,
            sizeStyles[size],
            {
              [styles['textfield--with-icon']]: hasIcon,
              [styles['textfield--with-reset']]: hasReset,
              [styles['textfield--with-icons']]: hasBothIcons
            },
            colorClassName,
            colored && styles.colored
          )}
          data-ui-textfield
          disabled={disabled}
          type="text"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          {...props}
        />
      )}
      {label && (
        <label className={clsx(styles.label, colorClassName)} htmlFor={id} data-ui-input-label>
          <Typography variant="Body2-Medium" className={styles.typography}>
            {label}
            {isMandatory && <span className={styles.mandatory}>*</span>}
          </Typography>
        </label>
      )}
      {isResetIconVisible && (
        <div
          className={clsx(styles.icon, styles.reset, hasIcon && styles['reset--with-icon'], colorClassName)}
          data-ui-input-reset-icon
          data-testid="RESET_ICON"
          onClick={onReset}
        >
          {<Icon htmlColor="var(--steel-70)" containerSize={24} name="IconCloseOutlined24" />}
        </div>
      )}
      {isCustomIconVisible && (
        <div className={clsx(styles.icon, colorClassName)} data-ui-input-custom-icon>
          {icon}
        </div>
      )}
      {helperText && (
        <Typography
          variant="Caption-Medium"
          id={`${id}-helper-text`}
          className={clsx(styles.helper, colorClassName)}
          data-ui-input-helper-text
        >
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
