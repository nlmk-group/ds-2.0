import React, { useState } from 'react';

import argsTypes from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';
import {
  DEFAULT_SWITCH,
  DISABLED_SWITCH,
  SWITCH_WITH_LABEL,
  SWITCH_WITH_ICONS
} from './constants';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import styles from '@components/_storybook/Stories/Stories.module.scss';

import '@components/_storybook/Stories/styles.css';

enum TabIds {
  dev, design, tests
}

const COMPONENT_NAME = 'Switch'
const FIGMA_URL = 'https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29075&mode=design&t=awyt3Fzj1XS6th7v-1'

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Switch - это компонент, который реализует функциональность переключателя, часто используемого в пользовательских интерфейсах для настройки параметров, таких как включение/выключение определенных функций приложения."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/src/components/${COMPONENT_NAME}`}
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
            description={DEFAULT_SWITCH}
            code={`
import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(true)
  return (<>
    <Switch
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  </>)
}
              `}
          />
          <Editor
            description={DISABLED_SWITCH}
            code={`
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  return (<>
    <Switch
      checked={false}
      onChange={() => {}}
      disabled
    />
  </>)
}
              `}
          />
          <Editor
            description={SWITCH_WITH_LABEL}
            code={`
import { useState } from 'react'
import { Switch } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(true);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  return (
    <>
      <Switch
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        label={'Не активный Switch'}
      />
      <Switch
        checked={isSecondChecked}
        onChange={() => {
          setIsSecondChecked(!isSecondChecked);
        }}
        label={'Активный Switch'}
      />
      <Switch
        checked={isThirdChecked}
        onChange={() => {
          setIsThirdChecked(!isThirdChecked);
        }}
        label={'Заблокированный Switch'}
        disabled
      />
    </>
  )
}
              `}
          />
          <Editor
            description={SWITCH_WITH_ICONS}
            code={`
import { useState } from 'react'
import { Switch, Icon } from '@nlmk/ds-2.0';

export default App = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
    <Switch
      checked={isChecked}
      onChange={() => {
        setIsChecked(!isChecked);
      }}
      activeIcon={(
        <Icon
          name='IconMetallalomScrapFilled16'
          containerSize={16}
          htmlColor={'var(--text-grey-100)'}
        />
      )}
      inactiveIcon={(
        <Icon
          name='IconMetallalomScrap16'
          containerSize={16}
          htmlColor={'var(--primary-blue-600)'}
        />
      )}
    />
    </>
  )
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
