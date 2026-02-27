import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { ESnackbarColors } from '../enums';
import argsTypes from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Snackbar';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=280-8187';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  const snackbarActionCode = `import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    color="light-sky"
    startIcon
    actionButton={() => console.log('Action clicked')}
    actionText="Открыть"
    onClose={() => console.log('Close clicked')}
  >
    Уведомление с действием и кнопкой закрытия.
  </Snackbar>
)`;

  const snackbarCountdownCode = `import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    color="red"
    type="fill"
    showCountdown
    autoHideDuration={10000}
    onClose={() => console.log('Snackbar hidden')}
  >
    Автоматическое скрытие с таймером.
  </Snackbar>
)`;

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Snackbar отображает краткие уведомления о событиях и поддерживает цветовые варианты, действия пользователя, таймер и автоскрытие."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor
            description="Базовое отображение уведомления."
            code={`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar>Snackbar по умолчанию</Snackbar>
)
              `}
          />

          <Editor
            height={600}
            description="Цветовые варианты уведомления."
            code={`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(ESnackbarColors)
              .map(c => `"${c}"`)
              .join(', ')}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}>Варианты цвета Snackbar</Snackbar>
    })}
  </>
)
              `}
          />
          <Editor description="Уведомление с иконкой, действием и кнопкой закрытия." code={snackbarActionCode} />
          <Editor description="Автоматическое скрытие с таймером обратного отсчета." code={snackbarCountdownCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
