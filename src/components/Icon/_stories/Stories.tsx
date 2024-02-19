import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';
import { AllIcons } from './Icon.stories';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Icon';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Компонент иконок, который можно использовать как самостоятельно, так и внутри других компонентов"
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
      />
      <div className={styles['header-wrapper']}>
        <Typography variant="Heading2" color="primary">
          Свойства
        </Typography>
        <ul>
          <li>
            <b>name: string</b> - название иконки
          </li>
          <li>
            <b>color: action | disabled | error | primary | secondary | inherit | success | warning</b> - свойство цвета
            иконки
          </li>
          <li>
            <b>htmlColor: string</b> - свойство пользовательского цвета иконки
          </li>
          <li>
            <b>containerSize: 16 | 24 | 32</b> - контейнер иконки, по умолчанию равен размеру иконки. Пропс доступен
            только для компонента Icon
          </li>
          <li>
            <b>size: 16 | 24 | 32</b> - размер иконки.
          </li>
        </ul>

        <Typography variant="Heading2" color="primary">
          Иконки
        </Typography>
        <p>Существует 2 разных способа добавить иконку в проект:</p>

        <ol>
          <li>Использовать компонент Icon</li>
          <li>Использовать каждую кастомизированную иконку, как отдельный компонент</li>
        </ol>

        <Typography variant="Heading2" color="primary">
          Примеры
        </Typography>
        <p>
          Компонент Icon - каждая иконка данного компонента имеет контейнер (размер контейнера по умолчанию равен
          размеру иконки). Важно: загрузка иконки осуществляется по её имени в соответствии с макетом figma.
          <br />
          Для кастомизированных иконок доступны свойства:
        </p>

        <ul>
          <li>name - название иконки, соответствующее макету Figma;</li>
          <li>color - цвет иконки, согласно макету;</li>
          <li>htmlColor - цвет иконки, задаваемый пользователем;</li>
          <li>containerSize - размер контейнера иконки (по умолчанию равен размеру иконки)</li>
        </ul>
      </div>

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor
            description="Компонент Icon по умолчанию"
            code={`import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name={'IconTackleCrane24'}
    color="primary"
    containerSize={32}
  />
)

export default App;
`}
          />
          <br />
          <Typography color="primary" variant="Heading3">
            Все доступные иконки
          </Typography>
          <br />
          <AllIcons />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.tests && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName={COMPONENT_NAME} />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
