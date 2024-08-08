/**
 * Перечисление типов сообщений Alert.
 * @enum {string}
 */
export enum EAlertSeverity {
  /** Успешное сообщение */
  success = 'success',
  /** Сообщение об ошибке */
  error = 'error',
  /** Предупреждающее сообщение */
  warning = 'warning',
  /** Информационное сообщение */
  info = 'info'
}
