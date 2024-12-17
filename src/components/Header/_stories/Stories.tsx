import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';
import {
  DEFAULT_HEADER,
  HEADER_BACK,
  HEADER_BACKGROUND,
  HEADER_BREADCRUMBS,
  HEADER_CHILDREN,
  HEADER_DATE,
  HEADER_FAVORITE,
  HEADER_NOTIFICATION,
  HEADERS_DIFFERENT_SPACING
} from './text';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Header';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-23434&t=HhCDuaOuzHu5rgyf-1';


const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Header - это компонент, который отображает настраиваемый верхний колонтитул (шапку) веб-страницы или приложения."
        isBeta
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
            height={180}
            description={DEFAULT_HEADER}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${DEFAULT_HEADER}" />
)
              `}
          />
          <Editor
            height={200}
            description={HEADER_BACK}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_BACK}" back={() => {}} />
)
              `}
          />
          <Editor
            height={180}
            description={HEADER_DATE}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_DATE}" date />
)
              `}
          />
          <Editor
            height={180}
            description={HEADER_FAVORITE}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_FAVORITE}" favorite={() => {}}/>
)
              `}
          />
          <Editor
            height={180}
            description={HEADER_NOTIFICATION}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_NOTIFICATION}" notification={() => {}} notificationAmount={9} />
)
              `}
          />
          <Editor
            height={180}
            description={HEADER_BACKGROUND}
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_BACKGROUND}" bg />
)
              `}
          />
          <Editor
            description={HEADERS_DIFFERENT_SPACING}
            code={`import { Header } from '@nlmk/ds-2.0';

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
            code={`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

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
          <Editor
            description={HEADER_CHILDREN}
            code={`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="${HEADER_CHILDREN}"} >
          <Button style={{ marginRight: '25px' }} color="grey" variant="secondary" startIcon={<IconSettingsAltOutlined24 />}>
          Настройки
        </Button>
  </Header>
)
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
