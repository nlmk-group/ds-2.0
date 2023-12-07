import React, { useState } from 'react';

import {argsTypes} from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import styles from '@components/_storybook/Stories/Stories.module.scss';
import {
  DEFAULT_TOGGLE_BUTTON,
  TOGGLE_BUTTON_ICON,
  TOGGLE_BUTTON_BADGE,
  TOGGLE_BUTTON_SIZES,
  TOGGLE_BUTTON_COLOR_OPTIONS,
  TOGGLE_BUTTON_OPTIONS
} from './constants';

import '@components/_storybook/Stories/styles.css';

enum TabIds {
  dev, design, tests
}

const COMPONENT_NAME = 'ToggleButtonGroup'
const FIGMA_URL = 'https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43758&mode=design&t=awyt3Fzj1XS6th7v-1'

const DEFAULT_BTN_GROUP = `[
  {
    label: 'Печенье',
    action: () => {},
  },
  {
    label: 'Торты',
    action: () => {}
  },
  {
    label: 'Конфеты',
    action: () => {}
  }
]`

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну."
        isBeta
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor
            description={DEFAULT_TOGGLE_BUTTON}
            code={`
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <ToggleButtonGroup btnGroup={${DEFAULT_BTN_GROUP}} />
)
              `}
          />
          <Editor
            description={TOGGLE_BUTTON_ICON}
            code={`
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <ToggleButtonGroup btnGroup={[
    {
      label: 'Печенье',
      action: () => {},
      withIcon: true
    },
    {
      label: 'Торты',
      action: () => {},
      withIcon: true
    },
    {
      label: 'Конфеты',
      action: () => {},
      withIcon: true
    }
  ]} />
)
              `}
          />
          <Editor
            description={TOGGLE_BUTTON_BADGE}
            code={`
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <ToggleButtonGroup btnGroup={[
    {
      label: 'Печенье',
      action: () => {},
      actionNumber: "3"
    },
    {
      label: 'Торты',
      action: () => {},
      actionNumber: "4"
    },
    {
      label: 'Конфеты',
      action: () => {},
      actionNumber: "5"
    }
  ]} />
)
              `}
          />
          <Editor
            description={TOGGLE_BUTTON_SIZES}
            code={`
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <ToggleButtonGroup btnGroup={${DEFAULT_BTN_GROUP}}
  size="default"
  />
  <ToggleButtonGroup btnGroup={${DEFAULT_BTN_GROUP}}
  size="compact"
  />
  </>
)
              `}
          />
          <Editor
            description={TOGGLE_BUTTON_OPTIONS}
            code={`
import { ToggleButtonGroup, Icon } from '@nlmk/ds-2.0';

export default App = () => {
return (
<ToggleButtonGroup btnGroup={[
  {
    label: 'Печенье Oreo',
    withIcon: true,
    actionNumber: '5',
    disabled: true,
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    status: "default",
    action: () => {}
  },
  {
    label: 'Торты и Пироженные',
    withIcon: true,
    actionNumber: '8',
    status: 'success',
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: () => {}
  },
  {
    label: 'Конфеты Milka',
    withIcon: true,
    actionNumber: '6',
    status: 'warning',
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: () => {}
  },
  {
    label: 'Конфеты M&M',
    withIcon: true,
    actionNumber: '6',
    status: 'error',
    customIcon: (
      <Icon
        name='IconStarBorder24'
        containerSize={24}
        htmlColor={'var(--primary-blue-600)'}
      />
    ),
    action: () => {}
  }
  ]}
/>
  )
}
              `}
          />
          <Editor
            description={TOGGLE_BUTTON_COLOR_OPTIONS}
            code={`
import { ToggleButtonGroup } from '@nlmk/ds-2.0';

export default App = () => {
  return (
  <>
    <ToggleButtonGroup status="default" btnGroup={${DEFAULT_BTN_GROUP}} />
    <ToggleButtonGroup status="success" btnGroup={${DEFAULT_BTN_GROUP}} />
    <ToggleButtonGroup status="warning" btnGroup={${DEFAULT_BTN_GROUP}} />
    <ToggleButtonGroup status="error" btnGroup={${DEFAULT_BTN_GROUP}} />
  </>)
}
              `}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && (
        <FigmaEmbed url={FIGMA_URL} />
      )}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
