import { ChangeEventHandler, ComponentPropsWithoutRef, CSSProperties, FC, ReactNode, Ref } from 'react';

export enum EInputSizes {
  m = 'm',
  s = 's',
  xs = 'xs'
}

export enum EInputColors {
  default = 'default',
  error = 'error',
  warning = 'warning',
  success = 'success'
}

export interface IInputProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'size'>,
    Omit<ComponentPropsWithoutRef<'textarea'>, 'size'> {
  /**
   * Уникальный идентификатор инпута
   */
  id?: string;
  
  /**
   * Значение инпута
   */
  value?: string;
  
  /**
   * Флаг отключения инпута
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Текст метки (label) инпута
   */
  label?: string;
  
  /**
   * Имя инпута для идентификации в формах
   */
  name?: string;
  
  /**
   * Флаг многострочного режима (textarea)
   * @default false
   */
  multiline?: boolean;
  
  /**
   * Флаг псевдо-инпута (нередактируемое поле)
   * @default false
   */
  pseudo?: boolean;
  
  /**
   * Иконка инпута
   */
  icon?: ReactNode;
  
  /**
   * Вспомогательный текст под инпутом
   */
  helperText?: ReactNode;
  
  /**
   * Флаг возможности изменения размера (для textarea)
   * @default false
   */
  resize?: boolean;
  
  /**
   * Флаг наличия кнопки сброса
   * @default false
   */
  reset?: boolean;
  
  /**
   * Обработчик изменения значения
   */
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  
  /**
   * Обработчик сброса значения
   */
  onReset?: () => void;
  
  /**
   * Обработчик потери фокуса
   */
  onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  
  /**
   * Размер инпута
   * @default 'm'
   */
  size?: `${EInputSizes}`;
  
  /**
   * Цвет инпута для индикации состояния
   * @default 'default'
   */
  color?: `${EInputColors}`;
  
  /**
   * Флаг цветного фона (светло-желтый)
   * @default false
   */
  colored?: boolean;
  
  /**
   * Реф для доступа к DOM-элементу инпута
   */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement>;
  
  /**
   * Флаг обязательного поля
   * @default false
   */
  required?: boolean;
  
  /**
   * Инлайн стили для PseudoInput режима
   */
  pseudoInputStyle?: CSSProperties;
}

declare const Input: FC<IInputProps>;

export default Input;
export type { IInputProps };