import React, { ChangeEvent, DragEvent, FC, useId, useRef, useState } from 'react';

import { clsx } from 'clsx';

import { IDragAndDropProps } from './types';

import styles from './DragAndDrop.module.scss';

import {
  cancelUploadLabel,
  dragNDropBtnLabel,
  dragNDropDescription,
  dragNDropTitle,
  dragNDropTitleError,
  fileTypes
} from './constants';
import { EDnDFileType, EDnDSizes, EDnDStatusColor } from './enums';
import DefaultDragAndDrop from './subcomponents/DefaultDragAndDrop';
import SmallIcon from './subcomponents/SmallIcon';
import SmallText from './subcomponents/SmallText';

/**
 * Компонент Drag and Drop предоставляет функциональность перетаскивания и загрузки файлов с возможностью настройки и отмены.
 *
 * @param {object} props - Свойства компонента Drag and Drop.
 * @param {React.ReactNode} [props.children=null] - Кастомный контент внутри области перетаскивания.
 * @param {string} [props.className] - Дополнительный CSS-класс.
 * @param {string | React.ReactNode} [props.title=dragNDropTitle] - Заголовок для области перетаскивания.
 * @param {string | React.ReactNode} [props.description=dragNDropDescription] - Описание для области перетаскивания.
 * @param {string} [props.btnLabel=dragNDropBtnLabel] - Текст кнопки для выбора файлов.
 * @param {`${EDnDFileType}`} [props.fileType=EDnDFileType.image] - Тип загружаемых файлов.
 * @param {`${EDnDStatusColor}`} [props.statusColor=EDnDStatusColor.default] - Цвет статуса.
 * @param {sizesMapping} [props.size=sizesMapping.l] - Размер области перетаскивания.
 * @param {boolean} [props.withIcon=true] - Показывать ли иконку в области перетаскивания.
 * @param {JSX.Element} [props.customIcon=null] - Пользовательская иконка.
 * @param {boolean} [props.multiple=true] - Разрешить множество файлов.
 * @param {boolean} [props.loading=false] - Показать индикатор загрузки.
 * @param {number} [props.percentUpload=0] - Процент выполнения загрузки.
 * @param {boolean} [props.smallText=false] - Использовать маленький текст.
 * @param {boolean} [props.smallIcon=false] - Использовать маленькую иконку.
 * @param {boolean} [props.disabled=false] - Отключить область перетаскивания.
 * @param {string} [props.accept] - Допустимые MIME-типы файлов.
 * @param {(files: FileList) => void} props.onUpload - Функция для обработки загруженных файлов.
 * @param {() => void} [props.cancelUpload] - Функция для отмены загрузки.
 * @returns {JSX.Element} - Компонент Drag and Drop.
 */
const DragAndDrop: FC<IDragAndDropProps> = ({
  children = null,
  className,
  statusColor = EDnDStatusColor.default,
  title = statusColor === EDnDStatusColor.error ? dragNDropTitleError : dragNDropTitle,
  description = dragNDropDescription,
  btnLabel = dragNDropBtnLabel,
  fileType = EDnDFileType.image,
  size = EDnDSizes.M,
  withIcon = true,
  customIcon = null,
  multiple = true,
  loading = false,
  percentUpload = 0,
  smallText = false,
  smallIcon = false,
  disabled = false,
  accept = undefined,
  onUpload,
  cancelUpload = null
}) => {
  let actualBtnLabel = btnLabel;
  if (loading) {
    actualBtnLabel = cancelUploadLabel;
  }
  const inputId = useId();
  const acceptedTypes = accept || fileTypes[fileType];
  const [rejection, setRejection] = useState('');
  const unavailable = disabled || loading;

  const upload = (files: FileList | null) => {
    if (unavailable || !files?.length) return;
    if (!multiple && files.length > 1) {
      setRejection('Выберите один файл.');
      return;
    }
    const patterns = acceptedTypes
      .toLowerCase()
      .split(',')
      .map(value => value.trim())
      .filter(Boolean);
    const rejected = Array.from(files).find(
      file =>
        !patterns.some(pattern => {
          if (pattern === '*' || pattern === '*/*') return true;
          if (pattern.startsWith('.')) return file.name.toLowerCase().endsWith(pattern);
          if (pattern.endsWith('/*')) return file.type.toLowerCase().startsWith(pattern.slice(0, -1));
          return file.type.toLowerCase() === pattern;
        })
    );
    if (rejected) {
      setRejection(`Файл «${rejected.name}» имеет неподходящий формат. Допустимые форматы: ${acceptedTypes}.`);
      return;
    }
    setRejection('');
    onUpload(files);
  };
  // drag state
  const [dragActive, setDragActive] = useState<boolean>(false);
  // ref
  const inputRef = useRef<HTMLInputElement>(null);
  // handle drag events
  const handleDrag = (e: DragEvent<HTMLDivElement> | DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (unavailable) return;
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    upload(e.dataTransfer.files);
  };

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    upload(e.target.files);
    e.target.value = '';
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (disabled) return;
    if (loading) cancelUpload?.();
    else inputRef.current?.click();
  };

  return (
    <form
      onDrop={handleDrop}
      onDragOver={handleDrag}
      className={clsx(styles['form-file-upload'], disabled && styles.disabled, className)}
      onDragEnter={handleDrag}
      onSubmit={e => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        id={`input-file-upload-${inputId}`}
        className={styles['input-file-upload']}
        multiple={multiple}
        accept={acceptedTypes}
        disabled={unavailable}
        onChange={handleChange}
      />
      <label
        className={clsx(
          styles['label-file-upload'],
          loading ? styles['label-loading'] : styles[`label-${statusColor}`],
          smallIcon && statusColor === EDnDStatusColor.default && styles['label-s-default'],
          dragActive && styles[`label-${EDnDStatusColor.info}`],
          smallText ? styles[`label-file-upload-s`] : styles[`label-file-upload-${size}`],
          smallIcon && styles['label-file-upload-small-icon']
        )}
        htmlFor={`input-file-upload-${inputId}`}
      >
        {children !== null && children}
        {children === null && smallText && !smallIcon && (
          <SmallText
            loading={loading}
            percentUpload={percentUpload}
            statusColor={statusColor}
            title={title}
            disabled={disabled}
            cancelUpload={cancelUpload || undefined}
          />
        )}
        {children === null && smallIcon && !smallText && (
          <SmallIcon
            loading={loading}
            percentUpload={percentUpload}
            statusColor={statusColor}
            customIcon={customIcon}
          />
        )}
        {children === null && !smallText && !smallIcon && (
          <DefaultDragAndDrop
            disabled={disabled}
            loading={loading}
            size={size}
            percentUpload={percentUpload}
            withIcon={withIcon}
            customIcon={customIcon}
            fileType={fileType}
            title={title}
            statusColor={statusColor}
            description={description}
            btnLabel={actualBtnLabel}
            onButtonClick={onButtonClick}
            data-ui-dnd-default
          />
        )}
      </label>
      {rejection && <div role="alert">{rejection}</div>}
      {dragActive && !unavailable && (
        <div
          className={styles['drag-file-element']}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          data-ui-dnd-drag-file-element
        />
      )}
    </form>
  );
};

export default DragAndDrop;
