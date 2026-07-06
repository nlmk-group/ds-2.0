import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FILE_NAME = 'Название файла.pdf';
const FILES_DEFAULT = 'Файл по умолчанию';
const FILES_DESCRIPTION = 'Файл с дополнительным описанием';
const FILES_WITH_TITLE = 'Группа вложений';
const FILES_WITH_CHECKBOXES = 'Выбор файлов';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="AttachFiles"
        description="AttachFiles отображает группу прикреплённых файлов в едином контейнере. Компонент поддерживает заголовок секции и используется совместно с элементами File."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/AttachFiles"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Базовый элемент File с названием файла."
            code={`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${FILES_DEFAULT}" />
  </>
)
            `}
          />

          <Editor
            description="File с дополнительным описанием через свойство description."
            code={`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File
      description="${FILES_DESCRIPTION}"
      label="${FILE_NAME}"
    />
  </>
)
            `}
          />

          <Editor
            description="Варианты левого индикатора: по умолчанию, checked, tick и empty."
            code={`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${FILE_NAME}" />
    <File label="${FILE_NAME}" checked />
    <File label="${FILE_NAME}" tick />
    <File label="${FILE_NAME}" empty />
  </>
)
            `}
          />

          <Editor
            minHeight={500}
            description="Варианты управляющих действий: removed, saved, commented и addFile."
            code={`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <File
      label="${FILE_NAME}"
      removed
    />
    <File
      commented
      label="${FILE_NAME}"
    />
    <File
      label="${FILE_NAME}"
      saved
    />
    <File
      commented
      label="${FILE_NAME}"
      removed
    />
    <File
      commented
      label="${FILE_NAME}"
      saved
    />
    <File
      label="${FILE_NAME}"
      removed
      saved
    />
    <File
      commented
      label="${FILE_NAME}"
      removed
      saved
    />
    <File
      addFile
      label="${FILE_NAME}"
    />
  </div>
)
            `}
          />

          <Editor
            description="AttachFiles без заголовка для отображения списка вложений."
            code={`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles>
      <File
        commented
        label="${FILE_NAME}"
        removed
        saved
      />
      <File
        addFile
        label="${FILE_NAME}"
      />
    </AttachFiles>
  </div>
)
            `}
          />

          <Editor
            minHeight={500}
            description="AttachFiles с заголовком через свойство title."
            code={`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <AttachFiles title={<File label="${FILES_WITH_TITLE}" checked />}>
      <File label="${FILE_NAME}" />
      <File label="${FILE_NAME}" checked />
      <File label="${FILE_NAME}" tick />
      <File label="${FILE_NAME}" empty />
    </AttachFiles>
  </>
)
            `}
          />

          <Editor
            minHeight={500}
            description="AttachFiles с кнопкой добавления файла в заголовке."
            code={`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles title={<File label="${FILE_NAME}" addFile />}>
      <File label="${FILE_NAME}" />
      <File label="${FILE_NAME}" checked />
      <File label="${FILE_NAME}" tick />
      <File label="${FILE_NAME}" empty />
    </AttachFiles>
  </div>
)
            `}
          />

          <Editor
            minHeight={400}
            description="AttachFiles с групповым выбором: checked и indeterminate."
            code={`import { AttachFiles, File } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '600px' }}>
    <AttachFiles
      title={
        <File
          label="${FILES_WITH_CHECKBOXES}"
          checked
          indeterminate={true}
        />
      }
    >
      <File
        label="${FILE_NAME}"
        checked
        removed
      />
      <File
        label="${FILE_NAME}"
        checked
        removed
      />
    </AttachFiles>
  </div>
)
            `}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="AttachFiles" />}
    </div>
  );
};

export default Stories;
