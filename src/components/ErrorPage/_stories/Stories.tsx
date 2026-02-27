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
const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=287-80936';

const forbiddenCodeExample = `import { ErrorPage } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ minHeight: '560px' }}>
    <ErrorPage
      errorCode={403}
      description="Нет доступа к разделу"
      hint="Обратитесь к администратору для получения прав."
    />
  </div>
)
`;

const notFoundCodeExample = `import { ErrorPage } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ minHeight: '560px' }}>
    <ErrorPage
      errorCode={404}
      description="Страница не найдена"
      hint="Проверьте адрес или перейдите в нужный раздел через меню."
    />
  </div>
)
`;

const customTextExample = `import { ErrorPage } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ minHeight: '560px' }}>
    <ErrorPage
      errorCode={500}
      description="Временная ошибка сервиса"
      hint="Обновите страницу позже или повторите запрос."
    />
  </div>
)
`;

const defaultValuesExample = `import { ErrorPage } from '@nlmk/ds-2.0';

export default App = () => (
  <div style={{ minHeight: '560px' }}>
    <ErrorPage />
  </div>
)
`;

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Error page"
        description="ErrorPage отображает код ошибки, описание и подсказку для пользователя. Компонент поддерживает преднастроенные состояния для кодов 403 и 404, а также кастомные тексты."
        isStable
        codeLink={`https://github.com/nlmk-group/ds-2.0/tree/main/src/components/${COMPONENT_NAME}`}
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
          <Editor height={700} description="Состояние ошибки доступа с кодом 403." code={forbiddenCodeExample} />
          <Editor
            height={700}
            description="Состояние ошибки отсутствующей страницы с кодом 404."
            code={notFoundCodeExample}
          />
          <Editor
            height={700}
            description="Кастомизация текста ошибки и подсказки для произвольного кода."
            code={customTextExample}
          />
          <Editor
            height={700}
            description="Отображение значений по умолчанию без передачи пропсов."
            code={defaultValuesExample}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="ErrorPage" />}
    </div>
  );
};

export default Stories;
