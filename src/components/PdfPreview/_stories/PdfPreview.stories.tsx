import React, { ChangeEvent, useRef, useState } from 'react';

import { AttachFiles, File } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import PdfPreview from '..';
import { TPdfPreviewProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: () => any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/PdfPreview/Stories',
  component: PdfPreview,
  decorators: [withWrapper],
  argTypes: argsTypes
};

export const PdfPreviewWithAttachFiles = (args: TPdfPreviewProps): JSX.Element => {
  const [pdfData, setPdfData] = useState<Blob | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddFileClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const file = evt.target.files?.[0];
    if (!file) return;

    if (file.type === 'application/pdf') {
      setLoading(true);
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = e => {
        const arrayBuffer = e?.target?.result;
        if (arrayBuffer) {
          const blob = new Blob([arrayBuffer], { type: 'application/pdf' });
          setPdfData(blob);
        }
        setLoading(false);
      };
      reader.onerror = () => {
        setError('Ошибка при чтении файла');
        setLoading(false);
      };

      reader.readAsArrayBuffer(file);
    } else {
      setPdfData(null);
      setError('Пожалуйста, выберите PDF-файл');
    }
  };

  const handleRemoveFile = () => {
    setPdfData(null);
    setFileName('');
    setError('');
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <AttachFiles>
        <File
          label={fileName || 'Нажмите, чтобы выбрать PDF'}
          description={fileName ? 'Файл успешно выбран' : error ? error : 'Файл ещё не выбран'}
          addFile={!pdfData}
          addFileOnClick={handleAddFileClick}
          removed={Boolean(pdfData)}
          removedOnClick={handleRemoveFile}
        />
      </AttachFiles>

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />

      <div style={{ marginTop: 24 }}>
        <PdfPreview {...args} data={pdfData} loading={loading} errorMessage={error || args.errorMessage} />
      </div>
    </>
  );
};

PdfPreviewWithAttachFiles.storyName = 'Отображение PDF';
PdfPreviewWithAttachFiles.args = {
  errorMessage: 'Ошибка предпросмотра PDF'
};
