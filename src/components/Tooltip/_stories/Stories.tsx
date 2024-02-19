import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const style = `{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px'
}}`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Tooltip"
        description="Компонент-подсказка, появляющийся при определенном взаимодействии с дочерним элементом компонента (по умолчанию: при наведении курсора). Tooltip рассчитан не только на работу с простой информацией (текст) с единой стилизацией, но и на визуализацию подсказок, содержащих нестандартную информацию (списки, картинки, таблицы)."
        isBeta
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            description="Тултип по умолчанию c описанием."
            code={`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}
          />

          <Editor
            description="Тултип с разными вариантами расположения."
            code={`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Tooltip placement="top" description="Tooltip on top">
      <Button variant="secondary">Наведи, тултип будет сверху!</Button>
    </Tooltip>
    <Tooltip placement="bottom" description="Tooltip on bottom">
      <Button variant="secondary">Наведи, тултип будет снизу!</Button>
    </Tooltip>
    <Tooltip placement="left" description="Tooltip on left">
      <Button variant="secondary">Наведи, тултип будет слева!</Button>
    </Tooltip>
    <Tooltip placement="right" description="Tooltip on right">
      <Button variant="secondary">Наведи, тултип будет справа!</Button>
    </Tooltip>
  </div>
)
`}
          />

          <Editor
            description="Тултип с вариантами поведения на отображение."
            code={`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Tooltip
      placement="top"
      behavior="hover"
      description="Tooltip on hover"
    >
      <Button variant="secondary">Тултип появится при наведении!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="click"
      description="Tooltip on click"
    >
      <Button variant="secondary">Тултип появится при клике!</Button>
    </Tooltip>
    <Tooltip
      placement="top"
      behavior="focus"
      description="Tooltip on focus"
    >
      <Button variant="secondary">Тултип появится при фокусе!</Button>
    </Tooltip>
  </div>
)
`}
          />

          <Editor
            description="Тултип с отображением заголовка, описания и списка."
            code={`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Tooltip
      title="Заголовок текста подсказки"
      description="Сюда вы можете добавить текст/подсказу для компонента"
      list={[
        'Здесь, вы можете',
        'добавить нужную вам',
        'информацию по пунктам'
      ]}
    >
      <Button variant="secondary">Наведи на меня курсор!</Button>
    </Tooltip>
  </div>
)
`}
          />

          <Editor
            description="По умолчанию Тултип не открывается вокруг disabled элементов. Для того чтобы Тултип открывался корректно в этом случае, нужно оборачиваемый элемент обернуть простым элементом-оберткой, например span."
            code={`import { Tooltip, Button } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Tooltip description="Сюда вы можете добавить текст/подсказу для компонента">
      <span>
        <Button variant="secondary" disabled>
          Наведи на меня курсор!
        </Button>
      </span>
    </Tooltip>
  </div>
)
`}
          />

          <Editor
            description="Тултип с кастомной JSX разметкой внутри"
            code={`import { Tooltip, Button, Typography, Icon } from '@nlmk/ds-2.0';

const RenderCustom = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Первый пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Второй пункт</Typography>
      </div>
      <div style={{ display: 'flex', gap: '8px'}}>
        <Icon name="IconDoneCheckOutlined24" color="success"/>
        <Typography variant="Caption-Medium">Третий пункт</Typography>
      </div>
    </div>
  );
};

export default  App = () =>(
  <div style=${style}>
    <Tooltip
      behavior="click"
      title="Заголовок тултипа с кастомным элементом"
      description="за добавление кастомного элемента отвечает prop - render"
      list={['Внутри вы можете добавить', 'Нужную вам разметку']}
      render={<RenderCustom/>}
    >
      <Button variant="secondary">
        Нажми на меня для появления тултипа!
      </Button>
    </Tooltip>
  </div>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43759&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Tooltip" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
