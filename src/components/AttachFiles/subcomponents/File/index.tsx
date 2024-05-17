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
import { Typography } from '@components/index';
import { IFile } from './types';
import styles from './File.module.scss';

const File: FC<IFile> = ({
  label,
  description = '',
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
  indeterminate,
  className
}) => {
  const TickIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper']} data-testid="TICK_ICON">
      <IconTaskOutlined24 htmlColor={'var(--ac-icon-blue)'} />
    </div>
  );

  const CheckedIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper-checked']} data-testid="CHECKED_ICON">
      <Checkbox
        checked={checkedValue}
        onChange={onCheckedChange}
        multiple={indeterminate}
      />
    </div>
  );

  const DefaultIcon = (): JSX.Element => (
    <div className={styles['icon-wrapper']} data-testid="DEFAULT_ICON">
      <IconInsertDriveFileOutlined24 htmlColor={'var(--ac-icon-blue)'} />
    </div>
  );

  const IconHelper = (): JSX.Element => {
    if (empty) return <></>;
    if (checked) return <CheckedIcon />;
    if (tick) return <TickIcon />;
    else return <DefaultIcon />;
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles['container-info']}>
        <IconHelper />
        <div
          className={clsx(
            styles.title,
            styles['long-title-wrapper']
          )}
          data-testid='FILE_TITLE'
        >
          <Typography variant='Body1-Medium' className={styles['long-title']}>
            {label}
          </Typography>
        </div>
        <div className={styles['controllers-wrapper']}>
          {!addFile && commented && (
            <div
              data-testid='COMMENTED_CONTROL'
              className={styles['control-btn']}
            >
              <Button
                variant="grey"
                fill="clear"
                onClick={commentedOnClick}
                iconButton={
                  <IconCommentChatBubbleFullOutlined24 />
                }
              />
            </div>
          )}
          {!addFile && saved && (
            <div
              data-testid='SAVED_CONTROL'
              className={styles['control-btn']}
            >
              <Button
                variant="primary"
                fill="clear"
                onClick={savedOnClick}
                iconButton={
                  <IconDownloadOutlined24 />
                }
              />
            </div>
          )}
          {!addFile && removed && (
            <div
              data-testid='REMOVED_CONTROL'
              className={styles['control-btn']}
            >
              <Button
                variant="grey"
                fill="clear"
                onClick={removedOnClick}
                iconButton={
                  <IconCloseOutlined24 />
                }
              />
            </div>
          )}
          {addFile && (
            <div
              className={styles['add-file-btn']}
              data-testid='ADD_FILE_CONTROL'
            >
              <Button
                variant='secondary'
                onClick={addFileOnClick}
              >
                Добавить файл
              </Button>
            </div>
          )}
        </div>
      </div>
      {description.length !== 0 && (
        <div
          data-testid='FILE_DESCRIPTION'
          className={clsx(
            styles.description,
            !empty && styles['description-space-helper']
          )}
        >
          <Typography variant='Body2-Medium'>
            {description}
          </Typography>
        </div>
      )}
    </div>
  );
};

export default File;
