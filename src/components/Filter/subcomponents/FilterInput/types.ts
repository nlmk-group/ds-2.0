import { InputHTMLAttributes, ReactNode, Ref } from 'react';

export interface IFilterInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'ref'> {
  /** Значение input */
  value?: string;

  /** Лейбл для поля */
  label?: string;

  /** Кастомная иконка слева */
  icon?: ReactNode;

  /** Показывать иконку сброса (крестик справа) */
  reset?: boolean;

  /** Коллбэк для сброса значения, вызывается при клике по иконке сброса */
  onReset?: () => void;

  /** Внешний ref для внутреннего input */
  inputRef?: Ref<HTMLInputElement>;

  /** Принудительно показать иконку сброса, даже если value пустое */
  forceReset?: boolean;
}
