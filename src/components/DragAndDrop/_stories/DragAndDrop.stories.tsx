import React, { ReactNode, useEffect, useRef, useState } from 'react';

import { DragAndDrop, Icon } from '@components/index';
import { action } from 'storybook/actions';

import customStyle from '../DragAndDrop.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { cancelUploadLabel, dragNDropTitle, smallTextUploadText } from '../constants';
import { EDnDFileType, EDnDSizes, EDnDStatusColor } from '../enums';
import { IDragAndDropProps } from '../types';
import argsTypes from './argsTypes';

const withWrapper = (Story: any) => <div className={styles['wrapper-fit-content']}>{<Story />}</div>;

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
dndDefault.storyName = 'DragNDrop по умолчанию';

export const dndSizes = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDSizes).map((size: EDnDSizes) => {
        return <DragAndDrop key={size} size={size} {...argTypes} />;
      })}
    </div>
  );
};
dndSizes.storyName = 'Размеры DragNDrop';
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
dndFileTypes.storyName = 'DragNDrop с различными типами файлов';
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
dndCustomAccept.storyName = 'DragNDrop, принимающий определенный тип файлов';
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
dndStatuses.storyName = 'DragNDrop различные статусы';
dndStatuses.args = {
  onUpload: action('OnUpload'),
  cancelUpload: action('onCancelUpload')
};

export const dndLoading = (argTypes: IDragAndDropProps): ReactNode => {
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
        title={dragNDropTitle}
        btnLabel={cancelUploadLabel}
        {...argTypes}
      />
    </div>
  );
};
dndLoading.storyName = 'DragNDrop в состоянии Loading';
dndLoading.args = {
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
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>
  );
};
dndSmallIcon.storyName = 'DragNDrop в состоянии SmallIcon';
dndSmallIcon.args = {
  onUpload: action('OnUpload'),
  smallIcon: true
};

export const dndSmallText = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <div className={styles['wrapper-row']}>
      {Object.values(EDnDStatusColor).map((status: EDnDStatusColor) => (
        <DragAndDrop key={status} statusColor={status} {...argTypes} />
      ))}
      <DragAndDrop title={smallTextUploadText} loading percentUpload={99} {...argTypes} />
      <DragAndDrop title={dragNDropTitle} disabled {...argTypes} />
    </div>
  );
};
dndSmallText.storyName = 'DragNDrop в состоянии SmallText';
dndSmallText.args = {
  onUpload: action('OnUpload'),
  smallText: true
};

export const dndCustomIcon = (argTypes: IDragAndDropProps): ReactNode => {
  return <DragAndDrop customIcon={<Icon name="IconUploadOutlined24" />} {...argTypes} />;
};
dndCustomIcon.storyName = 'DragNDrop с кастомной иконкой';

export const dndCustom = (argTypes: IDragAndDropProps): ReactNode => {
  return (
    <DragAndDrop {...argTypes}>
      <div className={customStyle['custom-component-style']}>
        <Icon name="IconUploadOutlined24" />
        <div style={{ color: 'var(--steel-90)' }}>Перетащите сюда что-нибудь!</div>
      </div>
    </DragAndDrop>
  );
};
dndCustom.storyName = 'DragNDrop кастомный';
