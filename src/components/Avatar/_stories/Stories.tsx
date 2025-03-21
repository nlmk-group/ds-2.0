import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { getAvatarImageSrc } from '../utils';
import { argsTypes } from './argsTypes';

enum TabIds {
  dev,
  design,
  tests
}

const COMPONENT_NAME = 'Avatar';
const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=410-50529&t=HhCDuaOuzHu5rgyf-1';
const AVATAR_MOCK_SRC = getAvatarImageSrc();

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const isActive = (tab: TabIds) => {
    return activeTab === tab;
  };

  return (
    <div className={styles.wrapper}>
      <Header
        title={COMPONENT_NAME}
        description={`Компонент Avatar представляет собой пользовательский компонент, который отображает аватар пользователя. Этот аватар может быть изображением, инициалами пользователя, иконкой профиля, а также может включать индикаторы онлайн-статуса, числовой индикатор или иконку в виде значка (badge). Компонент также поддерживает различные размеры и формы для кастомизации внешнего вида аватара.`}
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
            height={220}
            description="Дефолтный аватар"
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
            description="Аватары различных размеров"
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar src="${AVATAR_MOCK_SRC}" size="xxl" />
    <Avatar src="${AVATAR_MOCK_SRC}" size="xl" />
    <Avatar src="${AVATAR_MOCK_SRC}" size="l" />
    <Avatar src="${AVATAR_MOCK_SRC}" size="m" />
    <Avatar src="${AVATAR_MOCK_SRC}" size="s" />
  </>
)
              `}
          />
          <Editor
            description="Типы аватаров: иконка, изображение, инициалы"
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar src="${AVATAR_MOCK_SRC}" />
    <Avatar userName='Антон' userSurname='Валуев' />
  </>
)
              `}
          />
          <Editor
            description="Формы аватаров: круг, скругленный квадрат"
            code={`import { Avatar } from '@nlmk/ds-2.0';

export default App = () => (
  <>
    <Avatar />
    <Avatar shape="square" />
  </>
)
              `}
          />
          <Editor
            description="Индикаторы аватаров: онлайн, оффлайн, количество"
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
            description="Бейджи аватаров: иконка, специальный бейдж (День Рождения)"
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
