import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const DrawerStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const drawerDefaultCode = `import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
        <Drawer
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Содержимое Drawer</Typography>
        </Drawer>
      </>
  );
};
`;

  const drawerLeftCode = `import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
        <Drawer
            isOpen={isOpen}
            position="left"
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="primary">Drawer, открывающийся слева</Typography>
        </Drawer>
      </>
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Drawer"
        description="Компонент Drawer обеспечивает отображение выдвижной панели с возможностью настройки позиции и обработки закрытия."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"
        figmaLink="https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220&mode=dev"
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
          <Editor height={350} description="Пример базового использования Drawer." code={drawerDefaultCode} />

          <Editor
            height={350}
            description="Пример Drawer, открывающегося слева."
            code={drawerLeftCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/0BGHYt5CjO71I4KhygQJD5/DS2.0-Filtering-%26-Sorting?node-id=534-67220" />
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Drawer" />
        </Typography>
      )}
    </div>
  );
};

export default DrawerStories;
