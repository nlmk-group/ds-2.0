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
            description="Header по умолчанию"
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title="Header по умолчанию" />
)
              `}
          />
          <Editor
            height={200}
            description="Header с кнопкой возвращения слева"
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с кнопкой возвращения слева' back={() => {}} />
)
              `}
          />
          <Editor
            height={180}
            description="Header с датой и временем"
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с датой и временем' date />
)
              `}
          />
          <Editor
            height={180}
            description="Header с кнопкой добавления в избранное"
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с кнопкой добавления в избранное' favorite={() => {}}/>
)
              `}
          />
          <Editor
            height={180}
            description="Header с кнопкой уведомления"
            code={`import { Header } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с кнопкой уведомления' notification={() => {}} notificationAmount={9} />
)
              `}
          />

          <Editor
            description="Header с хлебными крошками"
            code={`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с хлебными крошками' breadcrumbs={(<Breadcrumbs crumbs={[
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
            description="Header с дочерней кнопкой и хлебными крошками"
            code={`import { Header, Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <Header title='Header с дочерней кнопкой и хлебными крошками' >
          <Button type="button" style={{ marginRight: '25px' }} color="grey" variant="secondary" startIcon={<IconSettingsAltOutlined24 />}>
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
