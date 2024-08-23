import React, { ChangeEvent, DragEvent, FC, useId, useRef, useState } from 'react';

import { sizesMapping } from '@components/declaration';
import { clsx } from 'clsx';

import { IDragAndDrop } from './types';

import styles from './DragAndDrop.module.scss';

import { dragNDropBtnLabel, dragNDropDescription, dragNDropTitle, fileTypes } from './constants';
import DefaultDragAndDrop from './DefaultDragAndDrop';
import { fileTypeMapping, statusColorMapping } from './enums';
import SmallIcon from './SmallIcon';
import SmallText from './SmallText';

const DragAndDrop: FC<IDragAndDrop> = ({
  children = null,
  className,
  title = dragNDropTitle,
  description = dragNDropDescription,
  btnLabel = dragNDropBtnLabel,
  fileType = fileTypeMapping.image,
  statusColor = statusColorMapping.default,
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
  const inputId = useId();
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
  const onButtonClick = () => {
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
      onClick={onButtonClick}
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
          smallIcon && statusColorMapping.default && styles['label-s-default'],
          dragActive && styles[`label-${statusColorMapping.info}`],
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
            btnLabel={btnLabel}
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
