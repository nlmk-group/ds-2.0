import { EAlertSeverity } from '@components/Alert/enums';

export interface IAlertIconProps {
  /**
   * Тип сообщения Alert.
   */
  severity?: `${EAlertSeverity}`;
}
