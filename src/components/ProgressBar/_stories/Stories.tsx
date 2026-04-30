import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=548-102967';

const ProgressBarStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const progressBarDefaultCode = `import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '400px', marginTop: '50px' }}>
    <ProgressBar percentage={60} />
  </div>
);
`;

  const progressBarWithLabelCode = `import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{ width: '400px', marginTop: '50px' }}>
    <ProgressBar percentage={50} label="Прогресс" />
  </div>
);
`;

  const progressBarBoundaryValuesCode = `import { ProgressBar } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ width: '400px', marginTop: '50px', display: 'grid', gap: '16px' }}>
    <ProgressBar percentage={0} label="Начало процесса" />
    <ProgressBar percentage={100} label="Процесс завершен" />
  </div>
);
`;

  const progressBarOverflowCode = `import { ProgressBar } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ width: '400px', marginTop: '50px' }}>
    <ProgressBar percentage={135} label="Значение ограничивается 100%" />
  </div>
);
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="ProgressBar"
        description="ProgressBar отображает процент выполнения процесса и текущее состояние прогресса. Компонент поддерживает подпись и автоматически ограничивает значение диапазоном от 0 до 100."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar"
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
            minHeight={200}
            description="Базовое отображение прогресса через percentage."
            code={progressBarDefaultCode}
          />

          <Editor minHeight={200} description="Прогресс с подписью через label." code={progressBarWithLabelCode} />
          <Editor
            minHeight={260}
            description="Граничные значения прогресса: начало и завершение."
            code={progressBarBoundaryValuesCode}
          />
          <Editor
            minHeight={220}
            description="Ограничение значения прогресса при превышении диапазона."
            code={progressBarOverflowCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="ProgressBar" />}
    </div>
  );
};

export default ProgressBarStories;
