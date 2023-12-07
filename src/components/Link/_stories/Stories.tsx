import React, { useState } from 'react';

import { argsTypes } from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const LinkStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const linkDefaultCode = `
import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/">Ссылка</Link>
);
export default App;
`;

  const linkDisabledCode = `
import { Link } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/" disabled>Заблокированная ссылка</Link>
);
export default App;
`;

  const linkWithIconCode = `
import { Link, Icon } from '@nlmk/ds-2.0';

const App = () => (
  <Link href="https://www.w3schools.com/" leftIcon={<Icon name='IconStorage16' />} rightIcon={<Icon name='IconStorage16' />}>
    Ссылка с иконками
  </Link>
);
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Link"
        description="Link компонент позволяет пользователям переходить по заданным ссылкам. Он поддерживает иконки, разные размеры и состояния, такие как disabled."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/src/components/Link"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)}/>
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)}/>
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)}/>
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            description="Основная ссылка. Стандартное использование компонента Link."
            code={linkDefaultCode}
          />

          <Editor
            description="Отключенная ссылка. Пользователь не может взаимодействовать с ссылкой."
            code={linkDisabledCode}
          />

          <Editor
            description="Ссылка с иконками с обеих сторон текста."
            code={linkWithIconCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25756&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Link"/>
        </Typography>
      )}
    </div>
  );
};

export default LinkStories;
