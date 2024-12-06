import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=527-204395';

const IllustrationStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const illustrationDefaultCode = `import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Illustration name="error404" size="medium" alt="Описание картинки" />
  )
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Illustration"
        description="Illustration отображает картинки для визуального объяснения проблемы,
информирования и улучшения общего впечатления от взаимодействия с приложением."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Illustration"
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
          <Editor height={400} description="Базовый Illustration." code={illustrationDefaultCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Illustration" />}
    </div>
  );
};

export default IllustrationStories;
