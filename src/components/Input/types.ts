import { ChangeEventHandler, ComponentPropsWithoutRef, CSSProperties, ReactNode, Ref } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';

export interface IInputAdditionalProps {
  /** Уникальный идентификатор инпута */
  id?: string;
  /** Значение инпута */
  value?: string;
  /** Флаг отключения инпута */
  disabled?: boolean;
  /** Текст метки (label) инпута */
  label?: string;
  /** Имя инпута */
  name?: string;
  /** Флаг многострочного режима */
  multiline?: boolean;
  /** Флаг псевдо-инпута */
  pseudo?: boolean;
  /** Иконка инпута */
  icon?: ReactNode;
  /** Вспомогательный текст */
  helperText?: ReactNode;
  /** Флаг возможности изменения размера (для textarea) */
  resize?: boolean;
  /** Флаг наличия кнопки сброса */
  reset?: boolean;
  /** Обработчик сброса значения */
  onReset?: () => void;
  /** Обработчик изменения значения */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Обработчик потери фокуса */
  onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /** Размер инпута */
  size?: `${sizesMappingInput}`;
  /** Цвет инпута */
  color?: `${customInputColors}`;
  /** Флаг цветного фона */
  colored?: boolean;
  /** Инлайн стили для PseudoInput режима */
  pseudoInputStyle?: CSSProperties;
}

export type TInputProps = IInputAdditionalProps &
  Omit<ComponentPropsWithoutRef<'input'>, 'size'> &
  Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> & {
    /** Реф для доступа к DOM-элементу инпута */
    inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  };
