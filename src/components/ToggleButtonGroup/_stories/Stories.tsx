import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { EToggleButtonGroupSizeMapping } from '../enums';
import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'ToggleButtonGroup';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27629&t=EnvIMGos3m33avAX-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Компонент ToggleButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну."
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
            height={400}
            description={'Toggle Button по умолчанию'}
            code={`import { ToggleButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)

  return (
    <ToggleButtonGroup>
      <ToggleButton onClick={() => setCount(count+1)}>
        <ToggleButton.Label>
          Plus {count}
        </ToggleButton.Label>
      </ToggleButton>
      <ToggleButton onClick={() => alert('Count is '+ count)}>
        <ToggleButton.Label>
          Check result
        </ToggleButton.Label>
      </ToggleButton>
      <ToggleButton onClick={() => setCount(count-1)}>
        <ToggleButton.Label>
          Minus {count}
        </ToggleButton.Label>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={'Toggle Button с тултипами'}
            code={`import { ToggleButtonGroup } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  return (
    <ToggleButtonGroup>
      <ToggleButton>
        <ToggleButton.Tooltip description='Add one to count' placement='bottom'>
          <ToggleButton.Label>
            Plus
          </ToggleButton.Label>
        </ToggleButton.Tooltip>
      </ToggleButton>

      <ToggleButton>
        <ToggleButton.Tooltip description='Check count value' placement='bottom'>
          <ToggleButton.Label>
            Check result
          </ToggleButton.Label>
        </ToggleButton.Tooltip>
      </ToggleButton>

      <ToggleButton>
        <ToggleButton.Tooltip description='Subtract one from count' placement='bottom'>
          <ToggleButton.Label>
            Minus
          </ToggleButton.Label>
        </ToggleButton.Tooltip>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={'Toggle Button с разными размерами'}
            code={`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <ToggleButtonGroup size="${EToggleButtonGroupSizeMapping.m}">
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup size="${EToggleButtonGroupSizeMapping.s}">
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
`}
          />

          <Editor
            height={400}
            description={'Toggle Button с иконками'}
            code={`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <ToggleButton onClick={() => setCount(count+1)}>
        <ToggleButton.Icon>
          <IconAddPlusCircleOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>
          Plus {count}
        </ToggleButton.Label>
      </ToggleButton>
      <ToggleButton onClick={() => alert('Count is '+ count)}>
        <ToggleButton.Icon/>
        <ToggleButton.Label>
          Check result
        </ToggleButton.Label>
      </ToggleButton>
      <ToggleButton onClick={() => setCount(count-1)}>
        <ToggleButton.Icon>
          <IconDeleteMinusOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>
          Minus {count}
        </ToggleButton.Label>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={'Toggle Button с бейджами'}
            code={`import { ToggleButtonGroup, IconAddPlusCircleOutlined24, IconDeleteMinusOutlined24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  const [count, setCount] = useState(0)
  return (
    <ToggleButtonGroup>
      <ToggleButton onClick={() => setCount(count+1)}>
        <ToggleButton.Icon>
          <IconAddPlusCircleOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>
          Plus
        </ToggleButton.Label>
        <ToggleButton.Badge>
          {count}
        </ToggleButton.Badge>
      </ToggleButton>
      <ToggleButton onClick={() => alert('Count is '+ count)}>
        <ToggleButton.Icon/>
        <ToggleButton.Label>
          Check result
        </ToggleButton.Label>
        <ToggleButton.Badge>
          {count}
        </ToggleButton.Badge>
      </ToggleButton>
      <ToggleButton onClick={() => setCount(count-1)}>
        <ToggleButton.Icon>
          <IconDeleteMinusOutlined24 />
        </ToggleButton.Icon>
        <ToggleButton.Label>
          Minus
        </ToggleButton.Label>
        <ToggleButton.Badge>
          {count}
        </ToggleButton.Badge>
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={'Toggle Button с разными кнопками и иконками'}
            code={`import { ToggleButtonGroup, Divider } from '@nlmk/ds-2.0';

const { Button: ToggleButton } = ToggleButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      <ToggleButtonGroup>
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup>
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup>
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>

      <Divider dashed />

      <ToggleButtonGroup>
        <ToggleButton onClick={() => alert('First option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
        <ToggleButton onClick={() => alert('Second option')}>
          <ToggleButton.Icon/>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
