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
import { CARD_ORIENTATION, DEFAULT_CARD } from './text';


const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-46302&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Card"
        description="Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card"
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
            height={350}
            description={DEFAULT_CARD}
            code={`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{
      backgroundColor: 'var(--unique-background)',
      width: 'fit-content',
      padding: '20px'
  }}>
    <Card>
      <div
        style={{
          height: '200px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography variant='Heading3'>
          Заголовок
        </Typography>

        <Select
          label="Выберите язык программирования"
          options={[
            {
              label: 'C++',
              value: 'C++'
            },
            {
              label: 'C#',
              value: 'C#'
            }]}
        />

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>
  </div>
</>
)
`}
          />

          <Editor
            height={400}
            description={CARD_ORIENTATION}
            code={`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style={{
    backgroundColor: 'var(--unique-background)',
    width: 'fit-content',
    padding: '20px',
    display: 'flex',
    gap: '20px'
  }}>
    <Card>
    <div
        style={{
          height: '200px',
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}
      >
        <Typography variant='Heading3'>
          Заголовок
        </Typography>

        <Select
          label="Выберите язык программирования"
          options={[
            {
              label: 'C++',
              value: 'C++'
            },
            {
              label: 'C#',
              value: 'C#'
            }]}
        />

        <div style={{ display: 'flex', gap: '8px', marginTop: 'auto' }}>
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>

    <Card orientation="horizontal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px'}}>
        <Typography variant='Heading3'>
          Заголовок
        </Typography>

        <Select
          label="Выберите язык программирования"
          options={[
            {
              label: 'C++',
              value: 'C++'
            },
            {
              label: 'C#',
              value: 'C#'
            }]}
        />

        <div style={{ display: 'flex', gap: '8px' }}>
          <Button type="button">
            Button
          </Button>
          <Button type="button" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </Card>
  </div>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) == 2 && <Tests componentName="Card" />}
    </div>
  );
};

export default Stories;
