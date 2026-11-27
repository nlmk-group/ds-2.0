import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=3932-16469';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const statusCustomIconCode = `import { Status, IconCloudDoneOutlined24 } from '@nlmk/ds-2.0';

export default () => (
  <Status icon={<IconCloudDoneOutlined24 htmlColor="var(--spectrum-green-50)" />} color="success">
    Опубликован
  </Status>
)`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Status"
        description="Status используется для отображения текущего состояния объекта и поддерживает цвет, заливку, размер и пользовательскую иконку."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Status"
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
            minHeight={150}
            description="Базовое отображение статуса."
            code={`import { Status } from '@nlmk/ds-2.0';

export default () => (
  <Status icon="IconCloudDoneOutlined24">Опубликован</Status>
)`}
          />

          <Editor
            description="Цветовые состояния статуса через prop color."
            code={`import { Status } from '@nlmk/ds-2.0';

export default () =>(
  <>
    <Status icon="IconCloudDoneOutlined24">Опубликован</Status>
    <Status icon="IconBlockCloseOutlined24" color="error">Отменён</Status>
    <Status icon="IconAllDoneDoubleCheckOutlined24" color="success">Закреплён</Status>
    <Status icon="IconPeopleCheckDoneOutlined24" color="warning">В работе</Status>
    <Status icon="IconEditPenOutlined24" color="grey">Черновик</Status>
  </>
)`}
          />

          <Editor
            description="Варианты заливки фона через prop fill."
            code={`import { Status } from '@nlmk/ds-2.0';

export default () =>(
  <>
    <Status icon="IconCloudDoneOutlined24" fill="solid">Опубликован</Status>
    <Status icon="IconCloudDoneOutlined24" fill="clear">Опубликован</Status>
  </>
)`}
          />

          <Editor
            minHeight={230}
            description="Сравнение размеров статуса."
            code={`import { Status } from '@nlmk/ds-2.0';

export default () => (
  <>
    <Status icon="IconCloudDoneOutlined16" size="s">Опубликован</Status>
    <Status icon="IconCloudDoneOutlined24" size="m">Опубликован</Status>
    <Status icon="IconCloudDoneOutlined24" size="l">Опубликован</Status>
  </>
)`}
          />
          <Editor
            minHeight={170}
            description="Передача пользовательской иконки как JSX-элемента."
            code={statusCustomIconCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Status" />}
    </div>
  );
};

export default Stories;
