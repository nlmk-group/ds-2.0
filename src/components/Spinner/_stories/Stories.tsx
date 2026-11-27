import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { loadingButtonExample } from '@components/Button/_stories/loadingButtonExample';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=5-16';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const spinnerPercentCode = `import { Spinner } from '@nlmk/ds-2.0';

export default () => (
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
            description="Компактный спиннер 16 px рядом с текстом."
            code={`import { Box, Spinner, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Box role="status" alignItems="center" gap={8}>
    <Spinner size="s" />
    <Typography>Загрузка данных…</Typography>
  </Box>
);`}
          />

          <Editor
            minHeight={200}
            description="Компактная кнопка с индикатором 16 px. Нажмите «Сохранить», чтобы увидеть состояние загрузки."
            code={loadingButtonExample}
          />
          <Editor
            minHeight={250}
            description="Сравнение размеров спиннера."
            code={`import { Spinner } from '@nlmk/ds-2.0';

export default () => (
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
            description="Подготовка сменного отчёта. Свойство color задаёт цвет вращающейся дуги, bgColor — цвет дорожки."
            code={`import { Box, Spinner, Typography } from '@nlmk/ds-2.0';

export default () => (
  <Box role="status" width="100%" py={20}
    flexDirection="column" alignItems="center" gap={16}>
    <Spinner size="xl" progressPercentage={0.35}
      color="var(--brand-sapphire-60)"
      bgColor="var(--brand-sapphire-20)" />
    <Typography variant="Body1-Medium">Готовим сменный отчёт…</Typography>
  </Box>
);`}
          />
          <Editor
            minHeight={240}
            description="Отображение процента загрузки в центре спиннера."
            code={spinnerPercentCode}
          />

          <Editor
            description="Использование иконки как children спиннера."
            code={`import { Spinner, IconAutoRenewReloadOutlined24 } from '@nlmk/ds-2.0';

export default () => (
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
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Spinner" />}
    </div>
  );
};

export default Stories;
