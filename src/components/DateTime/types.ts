export interface IDateTimeProps {
  /**
    * Язык для отображения дня недели (например, "Среда" или "Wednesday").
    * Числовой формат даты (ДД.ММ.ГГГГ) остаётся неизменным.
    * @default 'ru'
    */
  locale?: 'ru' | 'en';
}