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
import { CARD_ORIENTATION, DEFAULT_CARD } from './text';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Card"
        description="Компонент Card является функциональным компонентом, который предназначен для отображения карточки с различными элементами интерфейса, такими как изображение, заголовок, описание, значки, селектор и группа кнопок."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Card"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            height={300}
            description={DEFAULT_CARD}
            code={`import { Button, Card, Typography, Select } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <>
    <div style={{
      backgroundColor: 'var(--background-default)',
      width: 'fit-content',
      padding: '20px'
  }}>
    <Card>
      <Typography variant='Heading3'>
        Заголовок
      </Typography>

      <Select
        label="Выбеите язык прогромирования"
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
        <Button>
          Button
        </Button>
        <Button variant="secondary">
          Button
        </Button>
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
    backgroundColor: 'var(--background-default)',
    width: 'fit-content',
    padding: '20px',
    display: 'flex',
    gap: '20px'
  }}>
    <Card>
      <Typography
        variant='Heading3'
      >
        Заголовок
      </Typography>

      <Select
        label="Выбеите язык прогромирования"
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
        <Button>
          Button
        </Button>
        <Button variant="secondary">
          Button
        </Button>
      </div>
    </Card>

    <Card orientation="horizontal">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '300px'}}>
        <Typography
          variant='Heading3'
        >
          Заголовок
        </Typography>

        <Select
          label="Выбеите язык прогромирования"
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
          <Button>
            Button
          </Button>
          <Button variant="secondary">
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
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20845&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Card" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
