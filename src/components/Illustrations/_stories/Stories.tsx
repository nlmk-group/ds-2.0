import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=527-204395';

const illustrationDefaultCode = `import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Illustration name="error404" size="extra-large" />
  )
};

export default App;
`;

const sizeVariantsCode = `import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      <Illustration name="picture-default" size="small" />
      <Illustration name="calendar" size="medium" />
      <Illustration name="search" size="wide" />
    </div>
  )
};

export default App;
`;

const customStyleCode = `import { Illustration } from '@nlmk/ds-2.0';

const App = () => {
  return (
    <Illustration
      name="no-image"
      size="standard"
      className="custom-illustration"
      style={{
        padding: '12px',
        borderRadius: '12px',
        background: 'var(--steel-10)'
      }}
    />
  )
};

export default App;
`;

const IllustrationStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Illustration"
        description="Illustration отображает графические сценарии для пустых состояний, ошибок и подсказок. Компонент поддерживает выбор изображения по имени, размер и кастомизацию контейнера. Часть иллюстраций доступна только в определенных размерах, а не во всех вариантах."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Illustrations"
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
          <Editor height={400} description="Базовое отображение иллюстрации." code={illustrationDefaultCode} />
          <Editor height={650} description="Использование разных размеров иллюстраций." code={sizeVariantsCode} />
          <Editor height={420} description="Кастомизация контейнера через style и className." code={customStyleCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Illustration" />}
    </div>
  );
};

export default IllustrationStories;
