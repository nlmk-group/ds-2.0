import { ChangeEvent } from 'react';

/**
 * Свойства компонента File.
 * Интерфейс, описывающий свойства, принимаемые компонентом File.
 */
export interface IFileProps {
  /** Заголовок файла */
  title?: string;
  /** Метка файла */
  label?: string;
  /** Флаг, указывающий, отмечен ли файл */
  checked?: boolean;
  /** Флаг, указывающий, удален ли файл */
  removed?: boolean;
  /** Флаг, указывающий, прокомментирован ли файл */
  commented?: boolean;
  /** Флаг, указывающий, сохранен ли файл */
  saved?: boolean;
  /** Флаг, указывающий, добавлен ли файл */
  addFile?: boolean;
  /** Функция для обработки изменения состояния checkbox-а */
  onCheckedChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Функция обработки клика для удаления файла */
  removedOnClick?: () => void;
  /** Функция обработки клика для комментария */
  commentedOnClick?: () => void;
  /** Функция обработки клика для сохранения файла */
  savedOnClick?: () => void;
  /** Функция обработки клика для добавления файла */
  addFileOnClick?: () => void;
  /** Описание файла */
  description?: string;
  /** Флаг, указывающий, пуст ли файл */
  empty?: boolean;
  /** Значение состояния checkbox-а */
  checkedValue?: boolean;
  /** Флаг, указывающий, является ли checkbox неопределенным */
  indeterminate?: boolean;
  /** Флаг, указывающий, показывать ли галочку */
  tick?: boolean;
  /** Дополнительный CSS-класс */
  className?: string;
}

/**
 * Компонент File обеспечивает свойства и функциональность для управления файлами.
 */
declare const File: FC<IFileProps>;

export default File;
