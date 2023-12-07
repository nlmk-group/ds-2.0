import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';
import '@components/_storybook/Stories/styles.css';
import argsTypes from './argsTypes';
import {
  DASHED_DIVIDER,
  DEFAULT_DIVIDER,
  DIVIDER_ORIENTATION,
  DIVIDER_ORIENTATION_CUSTOM_SPACE,
  DIVIDER_TYPE,
  VERTICAL_DIVIDER
} from './text'

const style = '{{ width: 900, padding: 30 }}';

const styleVariations = `{{  
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
}}`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Divider"
        description="Компонент Divider - это визуальный элемент, используемый для разделения содержимого на разных частях пользовательского интерфейса, таких как списки, сетки или разделы на странице."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/src/components/Divider"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            description={DEFAULT_DIVIDER}
            code={`import { Divider } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <div style=${style}>
    <Divider>
      <span>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description={DASHED_DIVIDER}
            code={`import { Divider } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <div style=${style}>
    <Divider dashed>
      <span>
        Divider по умолчанию
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description={DIVIDER_ORIENTATION}
            code={`import { Divider } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <div style=${style}>
    <Divider orientation="left">
      <span>
        Вариант ориентации Divider влево
      </span>
    </Divider>
    <br/>
    <Divider orientation="right">
      <span>
        Вариант ориентации Divider вправо
      </span>
    </Divider>
    <br/>
    <Divider orientation="center">
      <span>
        Вариант ориентации Divider по середине
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description={DIVIDER_ORIENTATION_CUSTOM_SPACE}
            code={`import { Divider } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <div style=${style}>
    <Divider
      orientation="left"
      orientationSpace={68}
    >
      <span>
        Кастомизация размера пространства
      </span>
    </Divider>
    <br/>
    <Divider
      orientation="right"
      orientationSpace={72}
    >
      <span>
        Кастомизация размера пространства
      </span>
    </Divider>
  </div>
)
`}
          />

          <Editor
            description={VERTICAL_DIVIDER}
            code={`import { Divider } from '@nlmk/ds-2.0';              

export default  App = () => ( 
  <div style=${style}>
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74">
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74">
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74">
        Текст №3
      </span>
    </div>
  </div>
)
`}
          />

          <Editor
            description={DIVIDER_TYPE}
            code={`import { Divider, Button, Icon } from '@nlmk/ds-2.0';

export default  App = () =>( 
  <div style=${styleVariations}>
    <Divider dashed />
    <div
      style={{
        display: 'flex'
      }}
    >
      <span className="_divider-content_12xmv_74">
        Текст №1
      </span>
      <Divider type="vertical" />
      <span className="_divider-content_12xmv_74">
        Текст №2
      </span>
      <Divider
        dashed
        type="vertical"
      />
      <span className="_divider-content_12xmv_74">
        Текст №3
      </span>
    </div>
    <Divider dashed>
      <Button>
        <span>
          Нажать
        </span>
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
        <span className="_divider-content_12xmv_74">
          Текст №1
        </span>
      </div>
      <Divider type="vertical" />
      <Button variant="secondary">
        <span>
          Нажать
        </span>
      </Button>
      <Divider
        dashed
        type="vertical"
      />
      <Button variant="text">
        <Icon
          containerSize={24}
          htmlColor="var(--primary-blue-600)"
          name="IconChemical24"
        />
      </Button>
    </div>
    <Divider orientation="left">
      <div
        style={{
          alignItems: 'center',
          display: 'flex'
        }}
      >
        <span className="_divider-content_12xmv_74">
          Экспертиза
        </span>
        <Button variant="text">
          <Icon
            containerSize={24}
            htmlColor="var(--primary-blue-600)"
            name="IconChemical24"
          />
        </Button>
      </div>
    </Divider>
  </div>
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20848&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Divider" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
