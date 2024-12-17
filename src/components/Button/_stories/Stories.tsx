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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=117-712';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Button"
        description="Компонент Button представляет собой кнопку, которую можно настроить с помощью различных параметров, таких как размер, иконки, знаки и стили."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Button"
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
          <Editor
            description="Базовый компонент кнопки в трёх размерах: обычный (m) - является размером по умолчанию, высота кнопки 40px, компактный (s) - высота 32px и экстра компактный (xs) - высота 28px."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button>
      Button
    </Button>
    <Button size="s">
      Button
    </Button>
    <Button size="xs">
      Button
    </Button>
  </>
)`}
          />

          <Editor
            description="Кнопка поддерживает различные цветовые схемы и варианты отображения. Каждый цвет может быть отображен в primary или secondary варианте."
            code={`import { Button } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Button color="brand">
      Brand Primary
    </Button>
    <Button color="brand" variant="secondary">
      Brand Secondary
    </Button>

    <Button color="grey">
      Grey Primary
    </Button>
    <Button color="grey" variant="secondary">
      Grey Secondary
    </Button>

    <Button color="ghost">
      Ghost Primary
    </Button>
    <Button color="ghost" variant="secondary">
      Ghost Secondary
    </Button>

    <Button color="error">
      Error Primary
    </Button>
    <Button color="error" variant="secondary">
      Error Secondary
    </Button>

    <Button color="warning">
      Warning Primary
    </Button>
    <Button color="warning" variant="secondary">
      Warning Secondary
    </Button>

    <Button color="success">
      Success Primary
    </Button>
    <Button color="success" variant="secondary">
      Success Secondary
    </Button>
  </>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Button" />}
    </div>
  );
};

export default Stories;
