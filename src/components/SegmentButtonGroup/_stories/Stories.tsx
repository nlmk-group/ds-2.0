import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';
import {
  DEFAULT_SEGMENT_BUTTON,
  SEGMENT_BUTTON_COLOR_OPTIONS,
  SEGMENT_BUTTON_COLOR_OPTIONS_VARIABLE,
  SEGMENT_BUTTON_COMPACT
} from './constants';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'SegmentButtonGroup';
const FIGMA_URL =
  'https://www.figma.com/design/2bgeOS0URFNqFO1m1bnyvg/Button-DS-3.0?node-id=1386-40366&t=tKstDPBno2uq1Mh5-0';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Компонент SegmentButtonGroup - это набор кнопок, из которых пользователь может выбрать только одну."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          {/* <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} /> */}
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor
            height={400}
            description={DEFAULT_SEGMENT_BUTTON}
            code={`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      <Button onClick={action('onClick')}>
        Печенье
      </Button>
      <Button onClick={action('onClick')}>
        Торты
      </Button>
      <Button onClick={action('onClick')}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={SEGMENT_BUTTON_COMPACT}
            code={`import { SegmentButtonGroup } from '@nlmk/ds-2.0';

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup compact>
      <Button onClick={action('onClick')}>
        Печенье
      </Button>
      <Button onClick={action('onClick')}>
        Торты
      </Button>
      <Button onClick={action('onClick')}>
        Конфеты
      </Button>
    </SegmentButtonGroup>
  )
}
`}
          />

          <Editor
            height={400}
            description={SEGMENT_BUTTON_COLOR_OPTIONS}
            code={`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { buttonColor } from '../enums'
const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <SegmentButtonGroup color={color} key={index}>
          <Button onClick={action('onClick')}>
            Печенье
          </Button>
          <Button onClick={action('onClick')}>
            Торты
          </Button>
          <Button onClick={action('onClick')}>
            Конфеты
          </Button>
        </SegmentButtonGroup>
      ))}
    </div>
  )
}
`}
          />

          <Editor
            height={400}
            description={SEGMENT_BUTTON_COLOR_OPTIONS_VARIABLE}
            code={`import { SegmentButtonGroup } from '@nlmk/ds-2.0';
import { useState } from 'react';
import { buttonColor } from '../enums'

const { Button } = SegmentButtonGroup;

export default App = () => {
  return (
    <SegmentButtonGroup>
      {Object.values(buttonColor).map((color: buttonColor, index: number) => (
        <Button color={color} key={index} onClick={action('onClick')}>
          { index }
        </Button>
      ))}
    </SegmentButtonGroup>
  )
}
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_URL} />}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
