import React, { useState } from 'react';

import { Tabs } from '@components/index';
import { argsTypes } from '@components/Radio/_stories/argsTypes';

import Editor from './components/Editor';
import FigmaEmbed from './components/FigmaEmbed';
import Header from './components/Header';
import Properties from './components/Properties';
import Tests from './components/Tests';

import styles from './Stories.module.scss';

import './styles.css';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Radio"
        description="Компонент Radio обычно используется для выбора одного из нескольких взаимоисключающих вариантов в рамках определённой группы."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio"
        figmaLink="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=455%3A4248&mode=design&t=vcIQVvM3NLAsUO7s-1"
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
            description="Компонент radio по умолчанию."
            code={`import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default  App = () => {
  const [checked, setChecked] = useState('yes');
  const handleChange = (event) => {
    setChecked(event.target.value);
  };
  return (
    <>
      <Radio
        checked={checked === 'yes'}
        onChange={handleChange}
        value="yes"
      />
      <Radio
        checked={checked === 'no'}
        onChange={handleChange}
        value="no"
      />
    </>
  )
}`}
          />

          <Editor
            description="Компонент может быть неактивным для пользователя (disabled)."
            code={`import { Radio, Typography } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Radio disabled />
    <Typography variant="Body1-Bold" color="disabled">Я Радиокнопка</Typography>
  </>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/2bgeOS0URFNqFO1m1bnyvg/DS2.0-Buttons?type=design&node-id=455%3A4248&mode=design&t=vcIQVvM3NLAsUO7s-1" />
      )}
      {Number(activeTab) == 2 && <Tests componentName="Radio" />}
    </div>
  );
};

export default Stories;
