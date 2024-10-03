import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { sizesMapping } from '@components/declaration';
import { DragAndDrop, Icon } from '@components/index';
import { action } from '@storybook/addon-actions';

import customStyle from '../DragAndDrop.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { cancelUploadLabel, smallTextUploadText } from '../constants';
import { EDnDFileType, EDnDStatusColor } from '../enums';
import { IDragAndDropProps } from '../types';
import argsTypes from './argsTypes';
import {
  DEFAULT_DND,
  DND_CUSTOM,
  DND_CUSTOM_ACCEPT,
  DND_CUSTOM_ICON,
  DND_FILE_TYPES,
  DND_SIZES,
  DND_SMALL_ICON,
  DND_STATUSES
} from './text';

const withWrapper = (Story: any) => <div className={styles['wrapper-fit-content']}>{Story()}</div>;

export default {
  title: 'Components/DragAndDrop/Stories',
  component: DragAndDrop,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const dndDefault = (argTypes: IDragAndDropProps): ReactNode => {
  const [files, setFiles] = useState<FileList[0] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadingFile, setUploadingFile] = useState<string>('');
  const [percent, setPercent] = useState<number>(0);
  const intervalID = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleOnUpload = async (a: FileList) => {
    setLoading(true);
    setUploadingFile(`${a[0].name}, ${a[0].size}`);
    await new Promise(() =>
      setTimeout(() => {
        setLoading(false);
        setFiles(a[0]);
      }, 2000)
    );
  };

  useEffect(() => {
    if (loading && percent < 100) {
      intervalID.current = setInterval(() => {
        setPercent(percent => percent + 1);
      }, 20);
    } else {
      setPercent(0);
    }

    return () => {
      clearInterval(intervalID.current as ReturnType<typeof setInterval>);
    };
  }, [loading, percent]);

  return (
    <DragAndDrop
      loading={loading}
      percentUpload={percent}
      description={loading ? uploadingFile : undefined}
      {...argTypes}
      onUpload={handleOnUpload}
    />
  );
};

dndDefault.storyName = DEFAULT_DND;

export const dndSizes = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(sizesMapping).map((size: sizesMapping) => {
        if (size !== sizesMapping.s) return <DragAndDrop key={size} size={size} {...argTypes} />;
      })}
    </div>
  );
};

dndSizes.storyName = DND_SIZES;
dndSizes.args = {
  onUpload: action('OnUpload')
};

export const dndFileTypes = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDFileType).map((fileType: EDnDFileType) => (
        <DragAndDrop key={fileType} fileType={fileType} {...argTypes} />
      ))}
    </div>
  );
};

dndFileTypes.storyName = DND_FILE_TYPES;
dndFileTypes.args = {
  onUpload: action('OnUpload')
};

export const dndCustomAccept = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      <DragAndDrop {...argTypes} />
    </div>
  );
};

dndCustomAccept.storyName = DND_CUSTOM_ACCEPT;
dndCustomAccept.args = {
  onUpload: action('OnUpload'),
  accept: '.pdf',
  description: 'По умолчанию только файлы формата PDF',
  fileType: EDnDFileType.file,
  title: 'PDF Drag&Drop'
};

export const dndStatuses = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor)
        .slice(0, 3)
        .map((status: EDnDStatusColor) => (
          <DragAndDrop key={status} statusColor={status} {...argTypes} />
        ))}
    </div>
  );
};

dndStatuses.storyName = DND_STATUSES;
dndStatuses.args = {
  onUpload: action('OnUpload'),
  cancelUpload: action('onCancelUpload')
};

export const dndStatuses2 = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor)
        .slice(3)
        .map((status: EDnDStatusColor) => (
          <DragAndDrop key={status} statusColor={status} {...argTypes} />
        ))}
      <DragAndDrop
        loading={true}
        percentUpload={75}
        title={smallTextUploadText}
        btnLabel={cancelUploadLabel}
        {...argTypes}
      />
    </div>
  );
};

dndStatuses2.storyName = DND_STATUSES;
dndStatuses2.args = {
  onUpload: action('OnUpload'),
  cancelUpload: action('onCancelUpload')
};

export const dndSmallIcon = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => (
        <DragAndDrop key={status} statusColor={status} {...argTypes} />
      ))}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
    </div>
  );
};

dndSmallIcon.storyName = DND_SMALL_ICON;
dndSmallIcon.args = {
  onUpload: action('OnUpload'),
  smallIcon: true
};

export const dndCustomIcon = (argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
};

dndCustomIcon.storyName = DND_CUSTOM_ICON;

export const dndCustom = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{ color: 'var(--steel-90)' }}>Just throw something here!</div>
      </div>
    </DragAndDrop>
  );
};

dndCustom.storyName = DND_CUSTOM;
