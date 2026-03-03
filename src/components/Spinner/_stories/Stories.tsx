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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16&t=EnvIMGos3m33avAX-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const spinnerPercentCode = `import { Spinner } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Spinner size="xl" percent={42} />
    <Spinner size="xl" percent={88} progressPercentage={0.88} />
  </div>
)
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Spinner"
        description="Spinner используется как индикатор загрузки и поддерживает размеры, цвета, процент выполнения и кастомную иконку внутри."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Spinner"
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
            minHeight={200}
            description="Базовое состояние индикатора загрузки."
            code={`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner />
  </>
)
`}
          />

          <Editor
            minHeight={250}
            description="Сравнение размеров спиннера."
            code={`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner size="m" />
    <div/>
    <Spinner size="l" />
  </>
)
`}
          />

          <Editor
            minHeight={200}
            description="Кастомизация цветов через color и bgColor."
            code={`import { Spinner } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner bgColor="#ff6e40" color="#1e3d59" />
  </>
)
`}
          />
          <Editor
            minHeight={240}
            description="Отображение процента загрузки в центре спиннера."
            code={spinnerPercentCode}
          />

          <Editor
            description="Использование иконки как children спиннера."
            code={`import { Spinner, IconAutoRenewReloadOutlined24 } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Spinner>
      <IconAutoRenewReloadOutlined24 />
    </Spinner>
  </>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && <Tests componentName="Spinner" />}
    </div>
  );
};

export default Stories;
