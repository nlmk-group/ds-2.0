import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';
import '@components/_storybook/Stories/styles.css';
import argsTypes from './argsTypes'
import {
  breadcrumbsSimple,
  breadcrumbsTarget,
  breadcrumbsThreeOptions
} from '../constants';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Breadcrumbs"
        description="Компонент BreadCrumbs (хлебные крошки) используется в пользовательском интерфейсе для предоставления визуальной навигационной структуры, позволяющей пользователям быстро и эффективно понимать своё местоположение в иерархии контента или приложения. BreadCrumbs представляют собой последовательность ссылок или текста, а каждый элемент в ней указывает на уровень иерархии, переходя от более общего к более специфическому контенту."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Breadcrumbs"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
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
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20843&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Breadcrumbs" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
