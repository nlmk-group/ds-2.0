import { FC } from 'react';

/**
 * Изображения ошибок по коду ошибки.
 * Ассоциативный массив, связывающий коды ошибок с соответствующими изображениями.
 */
export const errorImagesByCode = {
  /** Изображение для ошибки 404 */
  404: error404,
  /** Изображение для ошибки 403 */
  403: error403,
  /** Изображение по умолчанию для ошибок */
  default: Default
} as const;

/**
 * Свойства компонента страницы ошибок.
 * Интерфейс, описывающий свойства, принимаемые компонентом ErrorPage.
 */
export interface ErrorPageProps {
  /** Код ошибки, отображаемый на странице */
  errorCode?: number;
  /** Описание ошибки */
  description?: string;
  /** Подсказка для пользователя */
  hint?: string;
}

/**
 * Ключи ошибок.
 * Тип, описывающий доступные коды ошибок, отображаемые на странице.
 */
export type ErrorKeys = keyof typeof errorImagesByCode;

/**
 * Компонент страницы ошибок отображает информацию об ошибке с соответствующим изображением и подсказками.
 */
declare const ErrorPage: FC<ErrorPageProps>;

export default ErrorPage;
