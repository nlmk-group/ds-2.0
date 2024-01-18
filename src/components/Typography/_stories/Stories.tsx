import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Typography';
const FIGMA_URL =
  'https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1027%3A18324&mode=design&t=awyt3Fzj1XS6th7v-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description={`Компонент для стандартизации текста и относящимся к нему свойствам стилизации.`}
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
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
            height={200}
            description="Типография по умолчанию"
            code={`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <Typography>
    Default Typography Component
  </Typography>
)
              `}
          />
          <Editor
            height={400}
            description="Элементы типографии представляют собой текст с обязательно примененными
            стилями: размером шрифта (font-size), величиной пространства между строками
            (line-height) и жирностью шрифта (font-weight). Также в таблице представлены
            пояснения для целевого использования объектов типографии."
            code={`import { Typography } from '@nlmk/ds-2.0';

const rows = [
  {
    title: 'Heading1',
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading1',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading2',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading2',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Subheading2-Medium',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 500,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading3',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Subheading3',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 400,
    description: 'Подзаголовок'
  },
  {
    title: 'Subheading3-Medium',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 500,
    description: 'Подзаголовок'
  },
  {
    title: 'Heading4',
    fontSize: 20,
    lineHeight: 28,
    fontWeight: 700,
    description: 'Заголовок'
  },
  {
    title: 'Body1',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  },
  {
    title: 'Body1-Medium',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  },
  {
    title: 'Body1-Bold',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  },
  {
    title: 'Body2',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400,
    description: 'Текст контента тонкий'
  },
  {
    title: 'Body2-Medium',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 500,
    description: 'Текст инпутов, ячеек таблиц, контента'
  },
  {
    title: 'Body2-Bold',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 700,
    description: 'Текст в кнопках, жирный текст у активных элементов'
  },
  {
    title: 'Caption',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 400,
    description: 'Текст мелких подписей, шкал графиков'
  },
  {
    title: 'Caption-Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500,
    description: 'Текст мелких подписей, шкал графиков'
  },
  {
    title: 'Caption-Bold',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 700,
    description: 'Текст мелких подписей, шкал графиков'
  }
];

export default App = () => (
  <>
  {rows.map(variant => (
    <div key={variant.title}>
      <Typography variant={variant.title} color="primary">
        {variant.title}
      </Typography>
      <Typography color="primary">
        {variant.fontSize} - {variant.lineHeight}
      </Typography>
      <Typography color="primary">{variant.fontWeight}</Typography>
      <Typography color="primary">{variant.description}</Typography>
    </div>
  ))}
  </>
)
              `}
          />
          <Editor
            height={400}
            description="Для типографии доступны следующие цвета: inherit (по умолчанию), primary,
            secondary, hint, disabled, error, success, warning, info, textSecondary,
            textPrimary."
            code={`import { Typography } from '@nlmk/ds-2.0';

export default App = () => (
  <>
  <Typography variant="Heading1" color="primary">
    variant: Heading1, color: primary
  </Typography>
  <Typography variant="Subheading2-Medium" color="secondary">
    variant: Subheading2-Medium, color: secondary
  </Typography>
  <Typography variant="Caption" color="hint">
    variant: Caption, color: hint
  </Typography>
  <Typography variant="Caption-Bold" color="disabled">
    variant: Caption-Bold, color: disabled
  </Typography>
  <Typography variant="Caption" color="error">
    variant: Caption, color: error
  </Typography>
  <Typography variant="Caption" color="success">
    variant: Caption, color: success
  </Typography>
  <Typography variant="Caption" color="warning">
    variant: Caption, color: warning
  </Typography>
  <Typography variant="Caption" color="info">
    variant: Caption, color: info
  </Typography>
  <Typography variant="Caption" color="textPrimary">
    variant: Caption, color: textPrimary
  </Typography>
  <Typography variant="Caption" color="textSecondary">
    variant: Caption, color: textSecondary
  </Typography>
  </>
)
              `}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.design && <FigmaEmbed url={FIGMA_URL} />}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
