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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=594-273525';
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ComboBox';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="ComboBox"
        description="Компонент ComboBox предоставляет расширенный функционал для создания выпадающего списка с поддержкой поиска, группировки, перетаскивания и изменения размера."
        isStable
        codeLink={CODE_LINK}
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={activeTab === 0} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={activeTab === 1} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {activeTab === 0 && (
        <>
          <Editor
            description="Базовый пример использования ComboBox с простым списком опций."
            code={`import { ComboBox, ComboList } from '@nlmk/ds-2.0';

export default App = () => (
  <ComboBox label="Выберите опцию">
    <ComboList
      items={[
        { id: '1', label: 'Опция 1' },
        { id: '2', label: 'Опция 2' },
        { id: '3', label: 'Опция 3' }
      ]}
      onChange={(selected) => console.log(selected)}
      isMultiple={false}
    />
  </ComboBox>
);`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab === 2 && <Tests componentName="ComboBox" />}
    </div>
  );
};

export default Stories;
