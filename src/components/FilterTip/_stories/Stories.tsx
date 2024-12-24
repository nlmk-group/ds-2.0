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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=408-44964';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const defaultFilterTipComponent = `import { FilterTip } from '@nlmk/ds-2.0';

    const App = () => {
      return <FilterTip isActive text="ГК Партии" />
    }
    export default App;
  `;

  const editableFilterTipComponent = `import { useState } from 'react'
    import { FilterTip } from '@nlmk/ds-2.0';

    const App = () => {
      const [isActive, setIsActive] = useState(false);

      const onChange = () => {
        setIsActive((prev) => !prev);
      }

      return (
        <FilterTip isActive={isActive} text="ГК Партии" onClick={onChange} />
      );
    }
    export default App;
  `;

  return (
    <div className={styles.wrapper}>
      <Header
        title="FilterTip"
        description="Компонент FilterTip используется для отображения текущих фильтров и их состояние"
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/FilterTip"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>
      {Number(activeTab) === 0 && (
        <>
          <Editor height={200} description="Компонент FilterTip по умолчанию." code={defaultFilterTipComponent} />
          <Editor height={250} description="Переключаемый FilterTip." code={editableFilterTipComponent} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="FilterTip" />}
    </div>
  );
};

export default Stories;
