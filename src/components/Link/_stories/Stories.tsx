import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=302-6485&t=HhCDuaOuzHu5rgyf-1';

const LinkStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const linkDefaultCode = `import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/">Ссылка</Link>
);

export default App;
`;

  const linkDisabledCode = `import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    disabled
  >
    Заблокированная ссылка
  </Link>
);

export default App;
`;

  const linkWithIconCode = `import { Link, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/"
    leftIcon={<Icon name='IconBunkerOutlined16' />}
    rightIcon={<Icon name='IconBunkerOutlined16' />}
  >
    Ссылка с иконками
  </Link>
);

export default App;
`;

  const linkWithTargetCode = `import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/" target="blank">
    Открыть в новой вкладке
  </Link>
);

export default App;
`;

  const linkPreventRedirectCode = `import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link
    href="https://www.w3schools.com/"
    preventRedirect
    onClick={() => console.log('Ссылка нажата без перехода')}
  >
    Ссылка без перехода
  </Link>
);

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Link"
        description="Link используется для навигации по URL и поддерживает размеры, target, иконки и состояния disabled/preventRedirect."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Link"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            minHeight={200}
            description="Базовая текстовая ссылка."
            code={linkDefaultCode}
          />
          <Editor
            minHeight={220}
            description="Заблокированная ссылка через disabled."
            code={linkDisabledCode}
          />
          <Editor description="Ссылка с иконками слева и справа от текста." code={linkWithIconCode} />
          <Editor description="Открытие ссылки в новой вкладке через target." code={linkWithTargetCode} />
          <Editor description="Перехват клика без перехода через preventRedirect." code={linkPreventRedirectCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Link" />}
    </div>
  );
};

export default LinkStories;
