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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=450-136040&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="DragAndDrop"
        description="Компонент DragAndDrop представляет собой компонент ..."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DragAndDrop"
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
            height={400}
            description="Компонент DragAndDrop разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <DragAndDrop
    onUpload={() => {}}
    percentUpload={0}
  />
)`}
          />

          <Editor
            height={340}
            description="Статусы компонента: default, info, error."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <DragAndDrop onUpload={() => {}} statusColor="default" />
    <DragAndDrop onUpload={() => {}} statusColor="info" />
    <DragAndDrop onUpload={() => {}} statusColor="error" />
  </div>
)`}
          />

          <Editor
            height={340}
            description="Размеры и типы загружаемых файлов."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
    <DragAndDrop onUpload={() => {}} size="l" fileType="image" />
    <DragAndDrop onUpload={() => {}} size="m" fileType="file" />
    <DragAndDrop onUpload={() => {}} size="m" fileType="video" />
  </div>
)`}
          />

          <Editor
            height={320}
            description="Состояние загрузки и возможность отмены загрузки."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <DragAndDrop
    onUpload={() => {}}
    loading
    percentUpload={67}
    statusColor="info"
    title="Загрузка файла..."
    description="report.pdf, 5.4 MB"
    cancelUpload={() => {}}
  />
)`}
          />

          <Editor
            height={260}
            description="Компактные режимы отображения: smallText и smallIcon."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <DragAndDrop onUpload={() => {}} smallText title="Быстрая загрузка" />
    <DragAndDrop onUpload={() => {}} smallIcon statusColor="info" />
  </div>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && <Tests componentName="DragAndDrop" />}
    </div>
  );
};

export default Stories;
