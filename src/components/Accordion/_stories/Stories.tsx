import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { EIconsAccordion, ESizesAccordion, EVariantsAccordion } from '../enums';
import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Accordion';
const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=451-9601&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description={`Компонент "аккордеон" предоставляет большие объемы контента в ограниченном пространстве с помощью пошагового раскрытия. Заголовок обеспечивает пользователю общий обзор содержимого, позволяя решить, какие разделы читать.

        Аккордеоны могут сделать обработку информации и поиск более эффективными. Однако они скрывают контент от пользователей, и важно учесть, что пользователь может не заметить или не прочитать весь включенный контент. Если пользователь, вероятно, должен прочесть весь контент, не используйте аккордеон, так как это добавляет дополнительный клик; вместо этого используйте полноценную прокручиваемую страницу с обычными заголовками.`}
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
            description="Аккордеон по умолчанию"
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
    {
      id: 1,
      title: 'First accordion item',
      content: 'Lorem ipsum',
      initiallyExpanded: true
    },
    {
      id: 2,
      title: '2nd accordion item',
      content: 'Lorem ipsum'
    },
    {
      id: 3,
      title: 'Last accordion item',
      content: 'Lorem ipsum'
    }
  ]

export default App = () => (
  <Accordion items={items} />
)
              `}
          />

          <Editor
            description={`Варианты размеров аккордеона: ${Object.values(ESizesAccordion).join(' | ')}`}
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion size="m" items={items} />
  <Accordion size="s" items={items} />
  <Accordion size="xs" items={items} />
  </>
)
              `}
          />
          <Editor
            description={`Варианты иконок аккордеона: ${Object.values(EIconsAccordion).join(' | ')}`}
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion startIcon="arrow" items={items} />
  <Accordion startIcon="plus" items={items} />
  <Accordion startIcon={null} endIcon="arrow" items={items} />
  <Accordion startIcon={null} endIcon="plus" items={items} />
  </>
)
              `}
          />

          <Editor
            description={`Цветовые варианты аккордеона: ${Object.values(EVariantsAccordion).join(' | ')}`}
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'First accordion item',
    content: 'Lorem ipsum',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: '2nd accordion item',
    content: 'Lorem ipsum'
  },
  {
    id: 3,
    title: 'Last accordion item',
    content: 'Lorem ipsum'
  }
]

export default App = () => (
  <>
  <Accordion variant="default" items={items} />
  <Accordion variant="paper" items={items} />
  <Accordion variant="default" items={items} disabled />
  <Accordion variant="paper" items={items} disabled />
  </>
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
