import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import localStyles from './Icon.module.scss';
import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';
import { AllIcons } from './Icon.stories';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Icon';

const defaultIconCode = `import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name="IconTackleCrane24"
    color="primary"
    containerSize={32}
  />
)

export default App;
`;

const inheritColorCode = `import { Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name="IconSearchOutlined24"
    color="inherit"
    htmlColor="#0B74DE"
  />
)

export default App;
`;

const badgeIconCode = `import { Badge, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Icon
    name="IconAddPlusCircleFilled32"
    badge={<Badge size="s" color="error">9</Badge>}
  />
)

export default App;
`;

const standaloneIconCode = `import { IconSearchOutlined24 } from '@nlmk/ds-2.0';

const App = () => <IconSearchOutlined24 htmlColor="#1B7F5F" />;

export default App;
`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Icon отображает иконки по имени из библиотеки и поддерживает цвет, контейнер и бейдж. Также иконки можно использовать как отдельные React-компоненты."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
      />
      <div className={styles['header-wrapper']}>
        <Typography variant="Heading2" color="var(--steel-90)">
          Иконки
        </Typography>
        <p>Существует два способа добавить иконку в проект:</p>

        <ol>
          <li>Использовать компонент Icon.</li>
          <li>Использовать отдельный компонент конкретной иконки.</li>
        </ol>

        <Typography variant="Heading2" color="var(--steel-90)">
          Примеры
        </Typography>
        <p>
          Компонент Icon рендерит иконку в контейнере, размер которого по умолчанию совпадает с размером иконки.
          Название иконки должно соответствовать имени в макете Figma.
        </p>
      </div>

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={isActive(TabIds.dev)} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab label="Тестирование" active={isActive(TabIds.tests)} onClick={() => setActiveTab(TabIds.tests)} />
        </Tabs>
      </div>

      {activeTab == TabIds.dev && (
        <>
          <Editor description="Базовое отображение иконки через компонент Icon." code={defaultIconCode} />
          <Editor description="Пользовательский цвет через color=inherit и htmlColor." code={inheritColorCode} />
          <Editor description="Отображение бейджа поверх иконки через prop badge." code={badgeIconCode} />
          <Editor description="Использование иконки как отдельного React-компонента." code={standaloneIconCode} />
          <br />
          <Typography color="var(--steel-90)" variant="Heading3">
            Все доступные иконки
          </Typography>
          <br />
          <div className={localStyles['wrapper-info']}>
            <AllIcons />
          </div>

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab == TabIds.tests && <Tests componentName={COMPONENT_NAME} />}
    </div>
  );
};

export default Stories;
