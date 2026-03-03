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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=53-31464&t=EnvIMGos3m33avAX-1';
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/SkeletonLoader';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const skeletonLoaderSizeCode = `import { SkeletonLoader } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ display: 'grid', gap: '12px' }}>
    <SkeletonLoader width="100%" height="24px" />
    <SkeletonLoader width="260px" height="48px" />
    <SkeletonLoader width="140px" height="140px" />
  </div>
)
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="SkeletonLoader"
        description="SkeletonLoader отображает анимированные заглушки во время загрузки данных. Компонент поддерживает настройку размера, анимации и количества элементов."
        isStable
        codeLink={CODE_LINK}
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
            description="Базовый skeleton-loader с анимацией wave."
            code={`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" />
  </>
)
`}
          />

          <Editor
            description="Skeleton-loader с анимацией pulse."
            code={`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="350px" animation="pulse" />
  </>
)
`}
          />

          <Editor
            description="Отображение нескольких skeleton-блоков через count."
            code={`import { SkeletonLoader } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <SkeletonLoader width="115px" count={3} height="50px" />
    <SkeletonLoader width="177px" count={2} height="50px" />
  </>
)
`}
          />
          <Editor minHeight={400} description="Примеры разных размеров заглушек." code={skeletonLoaderSizeCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="SkeletonLoader" />}
    </div>
  );
};

export default Stories;
