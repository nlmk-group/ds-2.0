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

const style = '{{ width: 900, padding: 30 }}';

const styleVariations = `{{
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`;

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=533-6991&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Divider"
        description="Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Divider"
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
            description="Divider по умолчанию"
            code={`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Divider>
      <span style={{color: "var(--steel-90)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description="Divider с пунктирной линией"
            code={`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Divider dashed>
      <span style={{color: "var(--steel-90)"}}>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description="Варианты ориентаций Divider"
            code={`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Divider orientation="left">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider влево
      </span>
    </Divider>
    <br/>
    <Divider orientation="right">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider вправо
      </span>
    </Divider>
    <br/>
    <Divider orientation="center">
      <span style={{color: "var(--steel-90)"}}>
        Вариант ориентации Divider по середине
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description="Кастомизация размера пространства"
            code={`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <Divider
      orientation="left"
      orientationSpace={68}
    >
      <span style={{color: "var(--steel-90)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
    <br/>
    <Divider
      orientation="right"
      orientationSpace={72}
    >
      <span style={{color: "var(--steel-90)"}}>
        Кастомизация размера пространства
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description="Вертикальный Divider"
            code={`import { Divider } from '@nlmk/ds-2.0';

export default  App = () => (
  <div style=${style}>
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №3
      </span>
    </div>
  </div>
)
`}
          />

          <Editor
            height={400}
            description="Типы Divider"
            code={`import { Divider, Button, Icon, IconChemical24 } from '@nlmk/ds-2.0';

export default  App = () =>(
  <div style=${styleVariations}>
    <Divider dashed />
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
        Текст №3
      </span>
    </div>
    <Divider dashed>
      <Button type="button">
          Нажать
      </Button>
    </Divider>
    <div
      style={{
        display: 'flex'
      }}
    >
      <div
        style={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
          Текст №1
        </span>
      </div>
      <Divider type="vertical" />
      <Button type="button" variant="secondary">
        <span>
          Нажать
        </span>
      </Button>
      <Divider
        dashed
        type="vertical"
      />
      <Button type="button" color="ghost" variant="secondary">
        <IconChemical24 />
      </Button>
    </div>
    <Divider orientation="left">
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          gap: '8px'
        }}
      >
        <span className="_divider-content_12xmv_74" style={{color: "var(--steel-90)"}}>
          Экспертиза
        </span>
        <Button type="button" color="ghost" variant="secondary">
          <IconChemical24 />
        </Button>
      </div>
    </Divider>
    <Divider dashed />
  </div>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Divider" />}
    </div>
  );
};

export default Stories;
