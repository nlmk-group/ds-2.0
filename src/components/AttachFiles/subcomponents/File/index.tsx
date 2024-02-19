import React, { FC } from 'react';

import {
  Button,
  Checkbox,
  IconCloseOutlined24,
  IconCommentChatBubbleFullOutlined24,
  IconDownloadOutlined24,
  IconInsertDriveFileOutlined24,
  IconTaskOutlined24
} from '@components/index';
import { clsx } from 'clsx';

import { IFile } from './types';

import styles from './File.module.scss';

const File: FC<IFile> = ({
  label,
  longTitle = false,
  description,
  checked,
  checkedValue,
  onCheckedChange,
  tick,
  empty,
  removed,
  removedOnClick,
  commented,
  commentedOnClick,
  saved,
  savedOnClick,
  addFile,
  addFileOnClick,
  indeterminate
}) => {
  const TickIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper']} data-testid="TICK_ICON">
      <IconTaskOutlined24 htmlColor={'var(--primary-blue-600)'} />
    </div>
  );

  const CheckedIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper-checked']} data-testid="CHECKED_ICON">
      <Checkbox checked={checkedValue} onChange={onCheckedChange} multiple={indeterminate} />
    </div>
  );

  const DefaultIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper']} data-testid="DEFAULT_ICON">
      <IconInsertDriveFileOutlined24 htmlColor={'var(--primary-blue-600)'} />
    </div>
  );

  const IconHelper = (): JSX.Element => {
    if (empty) return <div className={styles['icon-wrapper-checked']} data-testid="EMPTY_ICON" />;
    if (checked) return <CheckedIcon />;
    if (tick) return <TickIcon />;
    else return <DefaultIcon />;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles['container-info']}>
        <IconHelper />
        <div className={clsx(styles.title, longTitle && styles['long-title'])} data-testid="FILE_TITLE">
          {label}
        </div>
        <div className={styles['controllers-wrapper']}>
          {!addFile && commented && (
            <div data-testid="COMMENTED_CONTROL" className={styles['control-btn']}>
              <Button
                variant="text"
                onClick={commentedOnClick}
                iconButton={
                  <IconCommentChatBubbleFullOutlined24 htmlColor="var(--assigned-colors-button-outline-grey-text)" />
                }
              />
            </div>
          )}
          {!addFile && saved && (
            <div data-testid="SAVED_CONTROL" className={styles['control-btn']}>
              <Button
                variant="text"
                onClick={savedOnClick}
                iconButton={<IconDownloadOutlined24 htmlColor="var(--primary-blue-600)" />}
              />
            </div>
          )}
          {!addFile && removed && (
            <div data-testid="REMOVED_CONTROL" className={styles['control-btn']}>
              <Button
                variant="text"
                onClick={removedOnClick}
                iconButton={<IconCloseOutlined24 htmlColor="var(--assigned-colors-button-solid-grey-text)" />}
              />
            </div>
          )}
          {addFile && (
            <div data-testid="ADD_FILE_CONTROL" className={styles['add-file-btn']}>
              <Button variant="secondary" onClick={addFileOnClick}>
                Добавить файл
              </Button>
            </div>
          )}
        </div>
      </div>
      {!!description && !!description.length && (
        <div
          data-testid="FILE_DESCRIPTION"
          className={clsx(styles.description, !empty && styles['description-space-helper'])}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default File;
