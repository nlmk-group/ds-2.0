import React, { ChangeEvent, Fragment, useState } from 'react';

import { AttachFiles, File } from '@components/index';
import { action } from 'storybook/actions';
import { clsx } from 'clsx';

import style from '../AttachFiles.module.scss';
import styles from '@components/_storybook/styles.module.scss';

import { IFileProps } from '../subcomponents/File/types';
import argsTypes from './argsTypes';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story/>}</div>;

export default {
  title: 'Components/AttachFiles/Stories',
  component: AttachFiles,
  decorators: [withPadding],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argsTypes
};

const FileCollection: JSX.Element[] = [
  <File label="Название файла.pdf" />,
  <File label="Название файла.pdf" checked />,
  <File label="Название файла.pdf" tick />,
  <File label="Название файла.pdf" empty />
];

export const AttachFilesDefault = (argTypes: IFileProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>
  );
};

AttachFilesDefault.storyName = 'File по умолчанию';
AttachFilesDefault.args = {
  label: 'Название файла.pdf'
};

export const AttachFilesDescription = (argTypes: IFileProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>
  );
};

AttachFilesDescription.storyName = 'File с описанием';
AttachFilesDescription.args = {
  description: 'File с описанием',
  label: 'Название файла.pdf'
};

export const AttachFilesLeftIcon = (): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) => (
        <Fragment key={index}>{FileItem}</Fragment>
      ))}
    </div>
  );
};

AttachFilesLeftIcon.storyName = 'File вариации левой иконки';

export const AttachFilesControl = (argTypes: IFileProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      <File
        label="Название файла.pdf"
        removed
        removedOnClick={argTypes.removedOnClick}
      />
      <File label="Название файла.pdf" commented commentedOnClick={argTypes.commentedOnClick} />
      <File label="Название файла.pdf" saved savedOnClick={argTypes.savedOnClick} />
      <File
        label="Название файла.pdf"
        commented
        commentedOnClick={argTypes.commentedOnClick}
        removed
        removedOnClick={argTypes.removedOnClick}
      />
      <File
        label="Название файла.pdf"
        commented
        commentedOnClick={argTypes.commentedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label="Название файла.pdf"
        removed
        removedOnClick={argTypes.removedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label="Название файла.pdf"
        commented
        commentedOnClick={argTypes.commentedOnClick}
        removed
        removedOnClick={argTypes.removedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File label="Название файла.pdf" addFile addFileOnClick={argTypes.addFileOnClick} />
    </div>
  );
};

AttachFilesControl.storyName = 'File с контролами';
AttachFilesControl.args = {
  removedOnClick: action('removedOnClick'),
  commentedOnClick: action('commentedOnClick'),
  savedOnClick: action('savedOnClick'),
  addFileOnClick: action('addFileOnClick')
};

export const AttachFilesWithoutTitle = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4)
          .fill(0)
          .map((index: number) => (
            <File label="Название файла.pdf" removed key={index} />
          ))}
      </AttachFiles>
    </div>
  );
};

AttachFilesWithoutTitle.storyName = 'AttachFiles без заголовка';

export const AttachFilesWithTitle = (): JSX.Element => {
  return (
    <div
      className={styles.wrapper}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}
    >
      <AttachFiles title={<File label="Название файла.pdf" checked />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => (
          <Fragment key={index}>{FileItem}</Fragment>
        ))}
      </AttachFiles>
      <AttachFiles title={<File label="Название файла.pdf" empty />}>
        {FileCollection.map((FileItem: JSX.Element, index: number) => (
          <Fragment key={index}>{FileItem}</Fragment>
        ))}
      </AttachFiles>
    </div>
  );
};

AttachFilesWithTitle.storyName = 'AttachFiles с заголовком';

export const AttachFilesList = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) => (
          <Fragment key={index}>{FileItem}</Fragment>
        ))}
      </AttachFiles>
    </div>
  );
};

AttachFilesList.storyName = 'AttachFiles со списком';

export const AttachFilesAddFileButton = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles title={<File label="Название файла.pdf" checked addFile addFileOnClick={action('addFileOnClick')} />}>
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>
  );
};

AttachFilesAddFileButton.storyName = 'AttachFiles с кнопкой добавления файла';

export const AttachFilesWithCheckboxes = (): JSX.Element => {
  const [checked, setChecked] = useState([true, false]);

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <div className={styles.wrapper}>
      <AttachFiles
        title={
          <File
            label="Название файла.pdf"
            checked
            checkedValue={checked.some(ch => ch)}
            indeterminate={checked.some(ch => !ch)}
            onCheckedChange={handleChange1}
            addFile
            addFileOnClick={() => console.log('Добавить файл!')}
          />
        }
      >
        <File label="Название файла.pdf" checked checkedValue={checked[0]} onCheckedChange={handleChange2} removed />
        <File label="Название файла.pdf" checked checkedValue={checked[1]} onCheckedChange={handleChange3} removed />
      </AttachFiles>
    </div>
  );
};

AttachFilesWithCheckboxes.storyName = 'AttachFiles с чекбоксами';
