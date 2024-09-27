import { IDayProps } from '@components/DatePicker/subcomponents/Day/types';

export type TValue = { value: number; label: string };

export interface IInfiniteContainerProps extends IDayProps {
  /** Массив значений для отображения в контейнере. */
  values: Array<TValue>;
  
  /** Выбранное время. */
  selectedTime?: Date;
  
  /** Функция обработки клика по значению. */
  handleTimeClick: (value: number) => void;
  
  /** Ссылка на DOM-элемент контейнера. */
  container?: null | HTMLDivElement;
  
  /** Функция для определения, выбрано ли значение. */
  getSelected?: (value: number, selectedTime?: Date) => boolean;
}
