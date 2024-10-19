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
import {
  FILE_NAME,
  FILES_ADD_FILE_BUTTON,
  FILES_DEFAULT,
  FILES_DESCRIPTION,
  FILES_WITH_CHECKBOXES,
  FILES_WITH_TITLE
} from './text';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=403-5319&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="AttachFiles"
        description="Компонент, используемый для прикрепления файла. Компонент AttachFiles
          собирается из необходимого количества компонентов File."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/master/tree/src/components/AttachFiles"
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
            description="Компонент файла, представляет собой иконку с названием файла."
            code={`import { File } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <File label="${FILES_DEFAULT}" />
  </>
)
            `}
          />

          <Editor
            description="Компонент файл может содержать дополнительное описание. Дополнительное описание передается при помощи параметра description."
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
            description="В компоненте файла слева может быть использована иконка файла (по умолчанию), чекбокс (свойство: checked), иконка IconTick24 (свойство: tick) или же не быть ничего."
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
            description="В компоненте файла справа находится блок управления: до трех кнопок (удалить, загрузить, комментировать) или одна кнопка добавления файла. Добавление кнопок осуществляется при помощи свойств: removed - кнопка удаления, saved - кнопка загрузки, commented - комментировать, addFile - добавить файлы. Для каждой кнопки существует соответствующий ей обработчик события onClick: removedOnClick, savedOnClick, commentedOnClick, addFileOnClick."
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
            description="Компонент AttachFiles может быть без заголовка: несколько файлов, объединенных в один контейнер."
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
            description="Компонент AttachFiles может быть с заголовком. Для передачи заголовка используется свойство - title. В качестве заголовка используется компонент File в любой из возможных вариаций."
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
            description={FILES_ADD_FILE_BUTTON}
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
            description={FILES_WITH_CHECKBOXES}
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
