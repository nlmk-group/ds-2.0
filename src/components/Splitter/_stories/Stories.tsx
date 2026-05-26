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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-17862';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const verticalSplitterCode = `import React from 'react';
import { Splitter, Box, Typography } from '@nlmk/ds-2.0';

const SplitterExample = () => {
  const leftPanel = (
    <Box alignItems="flex-start" gap="12px" style={{ height: '100%', padding: '16px', background: 'var(--unique-background)' }}>
      <Typography variant="Heading4" color="var(--steel-90)">Левая панель</Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">Контент для левой части вертикального разделителя.</Typography>
    </Box>
  );

  const rightPanel = (
    <Box alignItems="flex-start" gap="12px" style={{ height: '100%', padding: '16px', background: 'var(--unique-background)' }}>
      <Typography variant="Heading4" color="var(--steel-90)">Правая панель</Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">Контент для правой части вертикального разделителя.</Typography>
    </Box>
  );

  return (
    <div style={{ height: '360px' }}>
      <Splitter
        orientation="vertical"
        topComponent={leftPanel}
        bottomComponent={rightPanel}
      />
    </div>
  );
};

export default SplitterExample;`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Splitter"
        description="Splitter разделяет область на две панели и позволяет пользователю интерактивно менять их размеры. Поддерживаются горизонтальная и вертикальная ориентации."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Splitter"
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
            minHeight={550}
            description="Базовое использование Splitter в горизонтальной ориентации."
            code={`import React from 'react';
import { Splitter, Box, Typography, ImagePicture } from '@nlmk/ds-2.0';

const SplitterExample = () => {
  const topComponent = (
    <Box
      alignItems="flex-start"
      gap="16px"
      style={{
        height: '100%',
        padding: '16px',
        background: 'var(--unique-background)'
      }}
    >
      <Typography variant="Heading4" color="var(--steel-90)">
        Информация
      </Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        Верхняя панель со скроллом при необходимости.
        Разделитель можно перетаскивать для изменения размеров панелей.
      </Typography>
    </Box>
  );

  const bottomComponent = (
    <Box
      alignItems="flex-start"
      gap="16px"
      style={{
        height: '100%',
        padding: '16px',
        background: 'var(--unique-background)'
      }}
    >
      <Typography variant="Heading4" color="var(--steel-90)">
        Информация
      </Typography>
      <Typography variant="Body1-Medium" color="var(--steel-90)">
        Нижняя панель со скроллом при необходимости.
        Разделитель можно перетаскивать для изменения размеров панелей.
      </Typography>
    </Box>
  );

  return (
    <>
      <div style={{ height: '450px' }}>
        <Splitter
          topComponent={topComponent}
          bottomComponent={bottomComponent}
        />
      </div>
    </>
  );
};

export default SplitterExample;`}
          />
          <Editor
            minHeight={470}
            description="Вертикальная ориентация разделителя через orientation='vertical'."
            code={verticalSplitterCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}

      {Number(activeTab) === 2 && <Tests componentName="Splitter" />}
    </div>
  );
};

export default Stories;
