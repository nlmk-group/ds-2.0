import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { getStorybookImageSrc } from '@components/_storybook/utils';
import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Avatar';
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1';
const AVATAR_MOCK_SRC = getStorybookImageSrc('/img/avatar_mock.png');

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description="Avatar отображает профиль пользователя в виде изображения, инициалов или стандартной иконки. Компонент поддерживает размеры, индикатор статуса, числовой индикатор и бейдж."
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
            minHeight={220}
            description="Базовый Avatar с иконкой пользователя."
            code={`import { Avatar } from '@nlmk/ds-2.0';

const App = () => (
  <>
    <Avatar />
  </>
)
export default App
              `}
          />
          <Editor
            description="Размеры Avatar"
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" size="2xl" />
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" size="xl" />
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" size="l" />
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" size="m" />
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" size="s" />
  </>
)
              `}
          />
          <Editor
            description="Варианты контента: иконка, изображение и инициалы."
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar imageSrc="${AVATAR_MOCK_SRC}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}
          />
          <Editor
            description="Fallback при ошибке загрузки imageSrc: переход к иконке."
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar imageSrc="https://invalid-image-url.png" />
    <Avatar imageSrc="https://invalid-image-url.png" userName="Антон" userSurname="Валуев" />
  </>
)
              `}
          />
          <Editor
            description="Индикаторы состояния: online/offline и numberIndicator."
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar online />
    <Avatar online={false} />
    <Avatar numberIndicator={8} />
  </>
)
              `}
          />
          <Editor
            description="Бейдж Avatar: стандартный и специальный через badgeSpecialIcon."
            code={`import { Avatar, IconDoneCheckFilled16, IconBirthday16 } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar badgeIconName={<IconDoneCheckFilled16 htmlColor="white" />} />
    <Avatar badgeIconName={<IconBirthday16 htmlColor="white" />} badgeSpecialIcon />
  </>
)
              `}
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
