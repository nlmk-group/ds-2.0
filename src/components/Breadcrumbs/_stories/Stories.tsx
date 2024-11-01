import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { TabIds } from '@components/declaration';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';
import { breadcrumbsLinks, targetLinks } from './constants';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title="Breadcrumbs"
        description="Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Дизайнеру" active={isActive(TabIds.design)} onClick={() => setActiveTab(TabIds.design)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab === 0 && (
        <>
          <Editor
            description="Обычное использование компонента."
            code={`import { Breadcrumbs } from '@nlmk/ds-2.0';
import { Link, MemoryRouter } from 'react-router-dom';

export default App = () => (
<MemoryRouter>
  <Breadcrumbs>
    ${breadcrumbsLinks
          .map(
            link => `
    <Breadcrumbs.Crumb>
      <Link to="${link.href}">${link.label}</Link>
    </Breadcrumbs.Crumb>`
          )
          .join('')}
  </Breadcrumbs>
  </MemoryRouter>
);
            `}
          />

          <Editor
            description="Компонент может содержать ссылки с разными target."
            code={`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default App = () => (
  <Breadcrumbs>
    ${targetLinks
          .map(
            link => `
    <Breadcrumbs.Crumb>
      <a href="${link.href}" target="${link.target}">${link.label}</a>
    </Breadcrumbs.Crumb>`
          )
          .join('')}
  </Breadcrumbs>
);`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab === 2 && <Tests componentName="Breadcrumbs" />}
    </div>
  );
};

export default Stories;
