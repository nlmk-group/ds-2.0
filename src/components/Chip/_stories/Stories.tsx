import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Chip"
        description="Компонент Chip обычно используется для отображения небольших интерактивных элементов пользовательского интерфейса, таких как теги, метки, категории или выборы в фильтрах, а также для представления небольших блоков информации."
        isDeprecated
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Chip"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Тестирование" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            minHeight={150}
            description="Компонент Chip по умолчанию."
            code={`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <Chip>1234</Chip>
)`}
          />

          <Editor
            description="Компонент Chip может использовать разные стили: primary (отображается по умолчанию), error, warning, success."
            code={`import { Chip } from '@nlmk/ds-2.0';

export default  App = () =>(
  <>
    <Chip>1234</Chip>
    <Chip color="error">1234</Chip>
    <Chip color="success">1234</Chip>
    <Chip color="warning">1234</Chip>
  </>
)`}
          />

          <Editor
            description="Компонент доступен в двух типах заливки: solid - полностью закрашенный, outline - закрашенна только граница."
            code={`import { Chip } from '@nlmk/ds-2.0';;

export default  App = () =>(
  <>
    <Chip variant="outline">1234</Chip>
    <Chip color="error" variant="outline">1234</Chip>
    <Chip color="success" variant="outline">1234</Chip>
    <Chip color="warning" variant="outline">1234</Chip>
  </>
)`}
          />

          <Editor
            minHeight={230}
            description="Компонент доступен в двух размерах: s - маленький чип с высотой 16px, m - средний чип, его высота 24px."
            code={`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip size="s">1234</Chip>
    <Chip size="m">1234</Chip>
  </>
)`}
          />
          <Editor
            description="Чип может содержать суффикс."
            code={`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip suffix="кг">1234</Chip>
    <Chip color="error" suffix="кг">1234</Chip>
    <Chip color="success" suffix="кг">1234</Chip>
    <Chip color="warning" suffix="кг">1234</Chip>
  </>
)`}
          />
          <Editor
            description="Чип может содержать суффикс."
            code={`import { Chip } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <Chip label="Цифры">1234</Chip>
    <Chip color="error" label="Цифры">1234</Chip>
    <Chip color="success" label="Цифры">1234</Chip>
    <Chip color="warning" label="Цифры">1234</Chip>
  </>
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <Tests componentName="Chip" />}
    </div>
  );
};

export default Stories;
