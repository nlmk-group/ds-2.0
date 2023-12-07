import React, { useState } from 'react';

import argsTypes from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import {
  DEFAULT_HEADER,
  HEADER_BACK,
  HEADER_DATE,
  HEADER_FAVORITE,
  HEADER_NOTIFICATION,
  HEADERS_DIFFERENT_SPACING,
  HEADER_BACKGROUND,
  HEADER_BREADCRUMBS
} from './text';
import styles from '@components/_storybook/Stories/Stories.module.scss';

import '@components/_storybook/Stories/styles.css';

enum TabIds {
  dev, design, tests
}

const COMPONENT_NAME = 'Header'

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab
  }

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Header - это функциональный компонент в React, который отображает настраиваемый верхний колонтитул (шапку)
        веб-страницы или приложения."
        isBeta
        codeLink={`https://github.com/nlmk-group/ds-2.0/src/components/${COMPONENT_NAME}`}        
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />          
          <Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor
            description={DEFAULT_HEADER}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${DEFAULT_HEADER}" />
)
              `}
          />
          <Editor
            description={HEADER_BACK}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_BACK}" back={() => {}} />
)
              `}
          />
          <Editor
            description={HEADER_DATE}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_DATE}" date />
)
              `}
          />
          <Editor
            description={HEADER_FAVORITE}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_FAVORITE}" favorite={() => {}}/>
)
              `}
          />
          <Editor
            description={HEADER_NOTIFICATION}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_NOTIFICATION}" notification={() => {}} notificationAmount={9} />
)
              `}
          />
          <Editor
            description={HEADER_BACKGROUND}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_BACKGROUND}" bg />
)
              `}
          />
          <Editor
            description={HEADERS_DIFFERENT_SPACING}
            code={`
import { Header } from '@nlmk/ds-2.0';
export default  App = () => (
  <>
    <Header title="${HEADERS_DIFFERENT_SPACING}" type="default" />
    <Header title="${HEADERS_DIFFERENT_SPACING}" type="compact" />
  </>
)
              `}
          />
          <Editor
            description={HEADER_BREADCRUMBS}
            code={`
import { Header, Breadcrumbs } from '@nlmk/ds-2.0';
export default  App = () => (
  <Header title="${HEADER_BREADCRUMBS}" breadcrumbs={(<Breadcrumbs crumbs={[
      {
        href: 'https://developer.mozilla.org/en-US/',
        label: 'MDN'
      },
      {
        href: 'https://www.lipsum.com/',
        label: 'Lorem Ipsum'
      },
      {
        href: 'https://www.w3schools.com/',
        label: 'W3 Schools'
      },
      {
        href: 'https://css-tricks.com/',
        label: 'CSS Tricks'
      },
      {
        href: 'https://www.geeksforgeeks.org/',
        label: 'Geeks For Geeks',
        active: true
      }
    ]} />)} />
)
              `}
          />
          <Properties argsTypes={argsTypes} />
        </>
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
