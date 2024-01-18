import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { colorMapping } from '../enums';
import argsTypes from './argsTypes';
import {
  DEFAULT_SNACKBAR,
  SNACKBAR_ACTION,
  SNACKBAR_CLOSE,
  SNACKBAR_COLOR,
  SNACKBAR_CUSTOM_ICON,
  SNACKBAR_ICON,
  SNACKBAR_OPACITY
} from './constants';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Snackbar';
const FIGMA_URL =
  'https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29074&mode=design&t=awyt3Fzj1XS6th7v-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Snackbar - это компонент, который предоставляет краткое уведомление или сообщение о событии."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
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
            description={DEFAULT_SNACKBAR}
            height={150}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar> ${DEFAULT_SNACKBAR} </Snackbar>
)
              `}
          />
          <Editor
            height={150}
            description={SNACKBAR_CLOSE}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar close={() => {}}> ${SNACKBAR_CLOSE} </Snackbar>
)
              `}
          />
          <Editor
            height={200}
            description={SNACKBAR_ACTION}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar actionButton={() => {}}> ${SNACKBAR_ACTION} </Snackbar>
)
              `}
          />
          <Editor
            description={SNACKBAR_COLOR}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(colorMapping)
          .map(c => `"${c}"`)
          .join(', ')}]
export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color}> ${SNACKBAR_COLOR} </Snackbar>
    })}
  </>
)
              `}
          />
          <Editor
            description={SNACKBAR_ICON}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

const colors = [${Object.values(colorMapping)
          .map(c => `"${c}"`)
          .join(', ')}];

export default App = () => (
  <>
    {colors.map(color => {
      return <Snackbar key={color} color={color} withIcon> ${SNACKBAR_ICON} </Snackbar>
    })}
  </>
)
              `}
          />
          <Editor
            description={SNACKBAR_CUSTOM_ICON}
            code={`import { Snackbar, Icon } from '@nlmk/ds-2.0';

export default App = () => (
  <Snackbar
    withIcon
    color="dark"
    customIcon={(
      <Icon
        name='IconEducation24'
        containerSize={24}
        htmlColor="red"
      />
    )}
  > ${SNACKBAR_CUSTOM_ICON} </Snackbar>
)
              `}
          />
          <Editor
            description={SNACKBAR_OPACITY}
            code={`import { Snackbar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <Snackbar
    bgOpacity={100}
  >
    ${SNACKBAR_OPACITY}
  </Snackbar>
  <Snackbar
    bgOpacity={70}
    >
    ${SNACKBAR_OPACITY}
  </Snackbar>
  <Snackbar
    bgOpacity={50}
  >
    ${SNACKBAR_OPACITY}
  </Snackbar>
  <Snackbar
    bgOpacity={20}
  >
    ${SNACKBAR_OPACITY}
  </Snackbar>
</>
)
              `}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_URL} />}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
