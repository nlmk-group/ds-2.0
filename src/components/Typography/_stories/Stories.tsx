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

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Typography';
const FIGMA_LINK =
  'https://www.figma.com/design/7GI4zrw0ZKhFKb6oMWvAK9/NLMK-Typo?node-id=5635-99311&t=GnmwsdqmCXZcM99O-1';

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
            description="Типография по умолчанию (Body1)"
            code={`import { Typography } from '@nlmk/ds-2.0';

const App = () => (
  <Typography color="var(--steel-90)">
    Компонент Typography с вариантом по умолчанию
  </Typography>
);

export default App;`}
          />
          <Editor
            height={850}
            description="Все варианты типографии, сгруппированные по категориям. Варианты различаются размером (font-size), межстрочным интервалом (line-height) и насыщенностью шрифта (font-weight)."
            code={`import { Box, Card, Typography } from '@nlmk/ds-2.0';

const SECTIONS = [
  { title: 'Заголовки (Headings)', variants: ['Heading1', 'Heading2', 'Heading3', 'Heading4'] },
  {
    title: 'Подзаголовки (Subheadings)',
    variants: ['Subheading1', 'Subheading2', 'Subheading2-Medium', 'Subheading3', 'Subheading3-Medium']
  },
  { title: 'Основной текст 18px (Body)', variants: ['Body', 'Body-Medium', 'Body-Bold'] },
  {
    title: 'Текст 16px (Body1)',
    variants: ['Body1', 'Body1-Medium', 'Body1Table-Medium', 'Body1Mono-Medium', 'Body1Mono-Bold', 'Body1-Bold']
  },
  {
    title: 'Текст 14px (Body2)',
    variants: ['Body2', 'Body2-Medium', 'Body2Mono-Medium', 'Body2Mono-Bold', 'Body2-Bold']
  },
  {
    title: 'Подписи 12px (Caption)',
    variants: ['Caption', 'Caption-Medium', 'Caption-Bold', 'CaptionMono', 'CaptionMono-Medium', 'CaptionMono-Bold']
  },
  { title: 'Дополнительный (Additional)', variants: ['Additional-Bold'] }
];

const sectionStyle = { marginBottom: 32, paddingBottom: 24, borderBottom: '1px solid var(--steel-70)' };
const sectionTitleStyle = { fontSize: 14, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--steel-60)', marginBottom: 16 };
const labelStyle = { fontSize: 14, color: 'var(--steel-60)', fontFamily: 'monospace', minWidth: 180 };

const App = () => (
  <Box flexDirection="column" gap={0} style={{ padding: 20, background: 'var(--steel-10)', borderRadius: 10 }}>
    {SECTIONS.map((section) => (
      <div key={section.title} style={sectionStyle}>
        <div style={sectionTitleStyle}>{section.title}</div>
        <Box flexDirection="column" gap={12}>
          {section.variants.map((variant) => (
            <Card key={variant} orientation="horizontal" indicatorStatus="info" indicatorSize="m">
              <Box display="flex" alignItems="center" gap={24} st={{ width: '100%' }}>
                <span style={labelStyle}>{variant}</span>
                <Typography variant={variant} color="var(--steel-90)">
                  Пример текста для {variant}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </div>
    ))}
  </Box>
);

export default App;`}
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
