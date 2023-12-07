import React, { useState, ChangeEvent, Fragment } from 'react';

import { AttachFiles, File } from '@components/index';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';
import styles from '@components/_storybook/styles.module.scss';
import argsTypes from './argsTypes';
import { clsx } from 'clsx';
import style from '../AttachFiles.module.scss'

import {
  FILES_DEFAULT,
  FILES_LONG_LABEL,
  FILES_DESCRIPTION,
  FILES_LEFT_ICON,
  FILES_CONTROL,
  FILES_WITHOUT_TITLE,
  FILES_WITH_TITLE,
  FILES_LIST,
  FILES_ADD_FILE_BUTTON,
  FILES_WITH_CHECKBOXES,
  FILE_NAME,
  LONG_LABEL,
} from './text'
import { IFile } from '../subcomponents/File/types';

const withPadding = (Story: () => any) => (
  <div style={{ minHeight: 80 }}>{Story()}</div>
);

export default {
  title: 'Components/AttachFiles/Stories',
  component: AttachFiles,
  decorators: [withDesign, withPadding],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: argsTypes
};

const FileCollection: JSX.Element[] = [
  <File label={FILE_NAME} />,
  <File label={FILE_NAME} checked />,
  <File label={FILE_NAME} tick />,
  <File label={FILE_NAME} empty />,
];

export const AttachFilesDefault = (argTypes: IFile): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>
  );
};

AttachFilesDefault.storyName = FILES_DEFAULT;
AttachFilesDefault.args = {
  label: FILE_NAME
};

export const AttachFilesLongLabel = (argTypes: IFile): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>
  );
};

AttachFilesLongLabel.storyName = FILES_LONG_LABEL;
AttachFilesLongLabel.args = {
  longTitle: true,
  label: LONG_LABEL
};

export const AttachFilesDescription = (argTypes: IFile): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <File {...argTypes} />
    </div>
  );
};

AttachFilesDescription.storyName = FILES_DESCRIPTION;
AttachFilesDescription.args = {
  description: FILES_DESCRIPTION,
  label: FILE_NAME
};

export const AttachFilesLeftIcon = (): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      {FileCollection.map((FileItem: JSX.Element, index: number) =>
        <Fragment key={index}>
          {FileItem}
        </Fragment>
      )}
    </div>
  );
};

AttachFilesLeftIcon.storyName = FILES_LEFT_ICON;

export const AttachFilesControl = (argTypes: IFile): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, style['vertical-wrapper'])}>
      <File
        label={FILE_NAME}
        removed
        removedOnClick={argTypes.removedOnClick}
      // {...handlers}
      />
      <File
        label={FILE_NAME}
        commented
        commentedOnClick={argTypes.commentedOnClick}
      />
      <File
        label={FILE_NAME}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label={FILE_NAME}
        commented
        commentedOnClick={argTypes.commentedOnClick}
        removed
        removedOnClick={argTypes.removedOnClick}
      />
      <File
        label={FILE_NAME}
        commented
        commentedOnClick={argTypes.commentedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label={FILE_NAME}
        removed
        removedOnClick={argTypes.removedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label={FILE_NAME}
        commented
        commentedOnClick={argTypes.commentedOnClick}
        removed
        removedOnClick={argTypes.removedOnClick}
        saved
        savedOnClick={argTypes.savedOnClick}
      />
      <File
        label={FILE_NAME}
        addFile
        addFileOnClick={argTypes.addFileOnClick}
      />
    </div>
  );
};

AttachFilesControl.storyName = FILES_CONTROL;
AttachFilesControl.args = {
  removedOnClick: action('removedOnClick'),
  commentedOnClick: action('commentedOnClick'),
  savedOnClick: action('savedOnClick'),
  addFileOnClick: action('addFileOnClick'),
};

export const AttachFilesWithoutTitle = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles>
        {Array(4).fill(0).map((index: number) => <File label={FILE_NAME} removed key={index} />)}
      </AttachFiles>
    </div>
  );
};

AttachFilesWithoutTitle.storyName = FILES_WITHOUT_TITLE;

export const AttachFilesWithTitle = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles
        title={<File label={FILE_NAME} checked />}
      >
        {FileCollection.map((FileItem: JSX.Element, index: number) =>
          <Fragment key={index}>
            {FileItem}
          </Fragment>
        )}
      </AttachFiles>
    </div>
  );
};

AttachFilesWithTitle.storyName = FILES_WITH_TITLE;

export const AttachFilesList = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles>
        {FileCollection.map((FileItem: JSX.Element, index: number) =>
          <Fragment key={index}>
            {FileItem}
          </Fragment>
        )}
      </AttachFiles>
    </div>
  );
};

AttachFilesList.storyName = FILES_LIST;

export const AttachFilesAddFileButton = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <AttachFiles
        title={
          <File
            label={FILE_NAME}
            checked
            addFile
            addFileOnClick={action('addFileOnClick')}
          />
        }
      >
        {FileCollection.map((FileItem: JSX.Element) => FileItem)}
      </AttachFiles>
    </div>
  );
};

AttachFilesAddFileButton.storyName = FILES_ADD_FILE_BUTTON;

export const AttachFilesWithCheckboxes = (): JSX.Element => {
  const [checked, setChecked] = useState([true, false])

  const handleChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked])
  }

  const handleChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]])
  }

  const handleChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked])
  }

  return (
    <div className={styles.wrapper}>
      <AttachFiles
        title={
          <File
            label={FILE_NAME}
            checked
            checkedValue={checked[0] && checked[1]}
            indeterminate={true}
            onCheckedChange={handleChange1}
            addFile
            addFileOnClick={() => console.log('Добавить файл!')}
          />
        }
      >
        <File
          label={FILE_NAME}
          checked
          checkedValue={checked[0]}
          onCheckedChange={handleChange2}
          removed
        />
        <File
          label={FILE_NAME}
          checked
          checkedValue={checked[1]}
          onCheckedChange={handleChange3}
          removed
        />
      </AttachFiles>
    </div>
  );
};

AttachFilesWithCheckboxes.storyName = FILES_WITH_CHECKBOXES;
