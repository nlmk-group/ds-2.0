import { ChangeEvent, PropsWithChildren, ReactNode } from 'react';

import { sizesDnD } from '@components/declaration';

import { EDnDFileType, EDnDStatusColor } from './enums';

/**
 * Свойства компонента File.
 * Интерфейс, описывающий свойства, принимаемые компонентом File.
 */
export interface IFileProps extends PropsWithChildren<{ any }> {
  /** Дочерний элемент */
  children?: JSX.Element;
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
  /** Функция для обработки событий удаления файла */
  removedOnClick?: () => void;
  /** Функция для обработки событий комментирования файла */
  commentedOnClick?: () => void;
  /** Функция для обработки событий сохранения файла */
  savedOnClick?: () => void;
  /** Функция для обработки событий добавления файла */
  addFileOnClick?: () => void;
  /** Описание файла */
  description?: string;
  /** Флаг, указывающий, пуст ли файл */
  empty?: boolean;
  /** Значение состояния checkbox-а */
  checkedValue?: boolean;
  /** Флаг, указывающий, является ли checkbox неопределенным */
  indeterminate?: boolean;
  /** Флаг, указывающий, длинный ли заголовок */
  longTitle?: boolean;
  /** Флаг, указывающий, нужно ли показывать галочку */
  tick?: boolean;
}

/**
 * Свойства компонента Drag and Drop.
 * Интерфейс, описывающий свойства, принимаемые компонентом Drag and Drop.
 */
export interface IDragAndDropProps extends PropsWithChildren<{ children?: ReactNode }> {
  /** Дополнительный CSS-класс */
  className?: string;
  /** Заголовок для области перетаскивания */
  title?: string | ReactNode;
  /** Описание для области перетаскивания */
  description?: string | ReactNode;
  /** Текст кнопки для выбора файлов */
  btnLabel?: string;
  /** Тип загружаемых файлов */
  fileType?: `${EDnDFileType}`;
  /** Цвет статуса */
  statusColor?: `${EDnDStatusColor}`;
  /** Показывать ли иконку в области перетаскивания */
  withIcon?: boolean;
  /** Пользовательская иконка */
  customIcon?: JSX.Element;
  /** Размер области перетаскивания */
  size?: `${sizesDnD}`;
  /** Разрешить множество файлов */
  multiple?: boolean;
  /** Показать индикатор загрузки */
  loading?: boolean;
  /** Процент выполнения загрузки */
  percentUpload?: number;
  /** Использовать маленький текст */
  smallText?: boolean;
  /** Использовать маленькую иконку */
  smallIcon?: boolean;
  /** Отключить область перетаскивания */
  disabled?: boolean;
  /** Допустимые MIME-типы файлов */
  accept?: string;
  /** Функция для обработки загруженных файлов */
  onUpload: (a: FileList) => void;
  /** Функция для отмены загрузки */
  cancelUpload?: () => void;
}

/**
 * Свойства вспомогательного компонента загрузки.
 * Интерфейс, описывающий свойства, принимаемые вспомогательным компонентом загрузки.
 */
export interface IUploadHelperProps {
  /** Использовать маленький текст */
  smallText?: boolean;
  /** Использовать маленькую иконку */
  smallIcon?: boolean;
  /** Показать индикатор загрузки */
  showSpinner?: boolean;
  /** Размер компонента загрузки */
  size: `${sizesDnD}`;
  /** Процент выполнения загрузки */
  percentUpload?: number;
}

/**
 * Свойства компонента SmallText.
 * Интерфейс, описывающий свойства, принимаемые компонентом SmallText.
 */
export interface ISmallTextProps {
  /** Заголовок компонента */
  title: string | ReactNode;
  /** Показать индикатор загрузки */
  loading: boolean;
  /** Процент выполнения загрузки */
  percentUpload: number;
  /** Цвет статуса */
  statusColor: `${EDnDStatusColor}`;
  /** Отключен ли компонент */
  disabled: boolean;
  /** Функция для отмены загрузки */
  cancelUpload?: () => void;
}

/**
 * Свойства компонента DefaultDragAndDrop.
 * Интерфейс, описывающий свойства, принимаемые компонентом DefaultDragAndDrop.
 */
export interface IDefaultDnDProps {
  /** Отключен ли компонент */
  disabled: boolean;
  /** Показать индикатор загрузки */
  loading: boolean;
  /** Размер компонента */
  size: `${sizesDnD}`;
  /** Процент выполнения загрузки */
  percentUpload: number;
  /** Показывать ли иконку */
  withIcon: boolean;
  /** Пользовательская иконка */
  customIcon: JSX.Element | null;
  /** Тип загружаемых файлов */
  fileType: `${EDnDFileType}`;
  /** Заголовок для области перетаскивания */
  title: string | ReactNode;
  /** Цвет статуса */
  statusColor: `${EDnDStatusColor}`;
  /** Описание для области перетаскивания */
  description: string | ReactNode;
  /** Текст кнопки для выбора файлов */
  btnLabel: string;
  /** Внешняя функция для обработки события клика */
  onButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Свойства компонента SmallIcon.
 * Интерфейс, описывающий свойства, принимаемые компонентом SmallIcon.
 */
export interface ISmallIconProps {
  /** Показать индикатор загрузки */
  loading: boolean;
  /** Процент выполнения загрузки */
  percentUpload: number;
  /** Цвет статуса */
  statusColor: `${EDnDStatusColor}`;
  /** Пользовательская иконка */
  customIcon: JSX.Element | null;
}

/**
 * Перечисление типов файлов.
 * Описывает возможные значения типов файлов для компонента Drag and Drop.
 */
export enum EDnDFileType {
  /** Файл */
  file = 'file',
  /** Изображение */
  image = 'image',
  /** Видео */
  video = 'video'
}

/* eslint-disable @typescript-eslint/no-duplicate-enum-values --
   M/S — намеренные Figma-алиасы для l/m с тем же runtime-значением. */
export enum EDnDSizes {
  /** @deprecated Используйте `M` (соответствует Figma 'm', Big). Будет удалён в ближайших версиях. */
  l = 'l',
  /** @deprecated Используйте `S` (соответствует Figma 's', Middle). Будет удалён в ближайших версиях. */
  m = 'm',
  /** Big — основной размер (Figma 'm'). */
  M = 'l',
  /** Middle — средний размер (Figma 's'). */
  S = 'm'
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */
/**
 * Перечисление цветов статусов.
 * Описывает возможные значения цветов статусов для компонента Drag and Drop.
 */
export enum EDnDStatusColor {
  /** Стандартный */
  default = 'default',
  /** Информационный */
  info = 'info',
  /** Ошибочный */
  error = 'error',
}

/**
 * Перечисление типов иконок.
 * Описывает возможные значения типов иконок для компонента Drag and Drop.
 */
export enum EDnDIconType {
  /** Иконка файла */
  file = 'IconUploadFile32',
  /** Иконка изображения */
  image = 'IconUploadImage32',
  /** Иконка видео */
  video = 'IconUploadVideo32'
}

/* eslint-disable @typescript-eslint/no-duplicate-enum-values --
   M/S — намеренные Figma-алиасы для l/m в helper-enum'ах. */
/**
 * Перечисление размеров заголовков.
 * Описывает возможные значения размеров заголовков для компонента Drag and Drop.
 */
export enum EDnDTitleSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в 3.0.0. */
  l = 'Heading3',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Heading4',
  M = 'Heading3',
  S = 'Heading4'
}

/**
 * Перечисление размеров описаний.
 * Описывает возможные значения размеров описаний для компонента Drag and Drop.
 */
export enum EDnDDescriptionSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = 'Body1-Medium',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Body2-Medium',
  M = 'Body1-Medium',
  S = 'Body2-Medium'
}

/**
 * Перечисление размеров спиннеров.
 * Описывает возможные значения размеров спиннеров для компонента Drag and Drop.
 */
export enum EDnDSpinnerSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = '2xl',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'xl',
  M = '2xl',
  S = 'xl'
}

/**
 * Перечисление размеров процентов.
 * Описывает возможные значения размеров процентов для компонента Drag and Drop.
 */
export enum EDnDPercentageSizeHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = 'Heading3',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = 'Body1-Medium',
  M = 'Heading3',
  S = 'Body1-Medium'
}

/**
 * Перечисление ширины спиннеров.
 * Описывает возможные значения ширины спиннеров для компонента Drag and Drop.
 */
export enum EDnDSpinnerWidthHelper {
  /** @deprecated Используйте `M`. Будет удалён в ближайших версиях. */
  l = '96px',
  /** @deprecated Используйте `S`. Будет удалён в ближайших версиях. */
  m = '56px',
  M = '96px',
  S = '56px'
}
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */
