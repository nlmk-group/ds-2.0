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
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=451-9601&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Accordion группирует контент в раскрываемые секции и помогает экономить пространство интерфейса. Используйте компонент для независимых блоков информации, которые можно просматривать по требованию."
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
            description="Базовый пример Accordion с раскрытием секции при загрузке."
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'Общая информация',
    content: 'Краткое описание процесса',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: 'Требования',
    content: 'Список обязательных условий'
  },
  {
    id: 3,
    title: 'FAQ',
    content: 'Часто задаваемые вопросы'
  }
];

export default App = () => (
  <Accordion items={items} />
)
              `}
          />

          <Editor
            description={`Варианты размера Accordion: ${Object.values(ESizesAccordion).join(' | ')}.`}
            code={`import { Accordion } from '@nlmk/ds-2.0';
import { Box } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'Панель с параметрами',
    content: 'Описание настроек',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: 'Панель с логами',
    content: 'Техническая информация'
  },
  {
    id: 3,
    title: 'Панель с итогами',
    content: 'Итоговые данные'
  }
];

export default App = () => (
  <Box display="flex" flexDirection="column" gap={12} width="100%">
    <Accordion size="m" items={items} />
    <Accordion size="s" items={items} />
    <Accordion size="xs" items={items} />
  </Box>
)
              `}
          />
          <Editor
            description={`Настройка иконок Accordion (${Object.values(EIconsAccordion).join(
              ' | '
            )}) через startIcon и endIcon.`}
            code={`import { Accordion } from '@nlmk/ds-2.0';
import { Box } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'Элемент со стрелкой слева',
    content: 'Базовый вариант иконки'
  },
  {
    id: 2,
    title: 'Элемент с плюсом слева',
    content: 'Альтернативный вариант'
  }
];

const itemsForEndIcon = [
  {
    id: 11,
    title: 'Элемент со стрелкой справа',
    content: 'Иконка в конце заголовка'
  },
  {
    id: 12,
    title: 'Элемент с плюсом справа',
    content: 'Иконка в конце заголовка'
  }
];

export default App = () => (
  <Box display="flex" flexDirection="column" gap={12} width="100%">
    <Accordion startIcon="arrow" items={items} />
    <Accordion startIcon="plus" items={items} />
    <Accordion startIcon={null} endIcon="arrow" items={itemsForEndIcon} />
    <Accordion startIcon={null} endIcon="plus" items={itemsForEndIcon} />
  </Box>
)
              `}
          />

          <Editor
            description={`Варианты оформления ${Object.values(EVariantsAccordion).join(' | ')} и поведение в disabled.`}
            code={`import { Accordion } from '@nlmk/ds-2.0';
import { Box } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'Активный элемент',
    content: 'Контент доступен'
  },
  {
    id: 2,
    title: 'Локально заблокированный элемент',
    content: 'Этот пункт недоступен',
    disabled: true
  }
];

export default App = () => (
  <Box display="flex" flexDirection="column" gap={12} width="100%">
    <Accordion variant="default" items={items} />
    <Accordion variant="paper" items={items} />
    <Accordion variant="default" items={items} disabled />
    <Accordion variant="paper" items={items} disabled />
  </Box>
)
              `}
          />

          <Editor
            description="Одновременное раскрытие секций через multipleExpanded и стилизация через className."
            code={`import { Accordion } from '@nlmk/ds-2.0';

const items = [
  {
    id: 1,
    title: 'Раздел A',
    content: 'Данные раздела A',
    initiallyExpanded: true
  },
  {
    id: 2,
    title: 'Раздел B',
    content: 'Данные раздела B',
    initiallyExpanded: true
  },
  {
    id: 3,
    title: 'Раздел C',
    content: 'Данные раздела C'
  }
];

export default App = () => (
  <Accordion
    items={items}
    multipleExpanded
    className="custom-accordion"
  />
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
