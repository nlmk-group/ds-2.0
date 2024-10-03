import React, { ChangeEvent, DragEvent, FC, useRef, useState } from 'react';

import { generateUUID, sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { IDragAndDropProps } from './types';

import styles from './DragAndDrop.module.scss';

import { cancelUploadLabel, dragNDropBtnLabel, dragNDropDescription, dragNDropTitle, fileTypes } from './constants';
import { EDnDFileType, EDnDStatusColor } from './enums';
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
  title = dragNDropTitle,
  description = dragNDropDescription,
  btnLabel = dragNDropBtnLabel,
  fileType = EDnDFileType.image,
  statusColor = EDnDStatusColor.default,
  size = sizesMapping.l,
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
  const inputId = generateUUID();
  // drag state
  const [dragActive, setDragActive] = useState<boolean>(false);
  // ref
  const inputRef = useRef<HTMLInputElement>(null);
  // handle drag events
  const handleDrag = (e: DragEvent<HTMLDivElement> | DragEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: DragEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onUpload(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onUpload(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (loading && cancelUpload !== null) {
      cancelUpload();
    } else {
      if (inputRef.current !== null) inputRef.current.click();
    }
  };

  return (
    <form
      style={{ pointerEvents: loading ? 'none' : 'all' }}
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
        accept={accept || fileTypes[fileType]}
        onChange={handleChange}
      />
      <label
        className={clsx(
          styles['label-file-upload'],
          loading ? styles['label-loading'] : styles[`label-${statusColor}`],
          smallIcon && EDnDStatusColor.default && styles['label-s-default'],
          dragActive && styles[`label-${EDnDStatusColor.info}`],
          smallText ? styles[`label-file-upload-${sizesMapping.s}`] : styles[`label-file-upload-${size}`],
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
          />
        )}
      </label>
      {dragActive && (
        <div
          className={styles['drag-file-element']}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        />
      )}
    </form>
  );
};

export default DragAndDrop;
