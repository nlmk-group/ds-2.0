import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { breadcrumbsSimple, breadcrumbsTarget, breadcrumbsThreeOptions } from './constants';
import argsTypes from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=315-37818&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

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
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Обычное использование компонента."
            code={`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(breadcrumbsSimple, null, 4)}} />
  </>
)
            `}
          />

          <Editor
            description="Компоненту можно задать значение ширины в процентах. Процент будет считываться отширины родителя."
            code={`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(breadcrumbsThreeOptions, null, 4)}} />
    <Breadcrumbs width="50" crumbs={${JSON.stringify(breadcrumbsThreeOptions, null, 4)}} />
  </>
)
            `}
          />

          <Editor
            description="Компонент может содержать ссылки с разными target."
            code={`import { Breadcrumbs } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Breadcrumbs crumbs={${JSON.stringify(breadcrumbsTarget, null, 4)}} />
  </>
)
            `}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && <Tests componentName="Breadcrumbs" />}
    </div>
  );
};

export default Stories;
