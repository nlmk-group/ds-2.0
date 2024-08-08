import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const COMPONENT_NAME = 'ErrorPage';
const FIGMA_URL =
  'https://www.figma.com/file/ocBJCN1akiFe5oQljRKNi0/DS2.0-Error?type=design&node-id=2-10&mode=design&t=RSFbkTXfvL8sjP7n-0';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Error page"
        description="Компонент ErrorPage предназначен для информирования пользователя о различных ошибках веб-приложения и предложения возможных действий для их решения с помощью настраиваемых сообщений и изображений."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
        figmaLink={FIGMA_URL}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          {/* <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} /> */}
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            height={600}
            description="Компонент ErrorPage разработан в разных вариантах"
            code={`import { ErrorPage } from '@nlmk/ds-2.0';

export default  App = () => (
  <ErrorPage errorCode="403" description="Нет доступа" hint="Воспользуйтесь боковым меню, чтобы перейти к нужной форме" />
)
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/ocBJCN1akiFe5oQljRKNi0/DS2.0-Error?type=design&node-id=2-10&mode=design&t=RSFbkTXfvL8sjP7n-0" />
      )}
      {Number(activeTab) == 2 && <Tests componentName="ErrorPage" />}
    </div>
  );
};

export default Stories;
