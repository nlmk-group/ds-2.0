import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

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
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer</Button>
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
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть Drawer слева</Button>
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

  const drawerVerticalCode = `import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setTopOpen(true)}>Открыть Drawer сверху</Button>
        <Button type="button" variant="secondary" onClick={() => setBottomOpen(true)}>Открыть Drawer снизу</Button>

        <Drawer
            isOpen={topOpen}
            position="top"
            height="260px"
            onClose={() => setTopOpen(false)}
        >
            <Typography color="primary">Drawer, открывающийся сверху</Typography>
        </Drawer>

        <Drawer
            isOpen={bottomOpen}
            position="bottom"
            height="220px"
            onClose={() => setBottomOpen(false)}
        >
            <Typography color="primary">Drawer, открывающийся снизу</Typography>
        </Drawer>
      </>
  );
};
`;

  const drawerBehaviorCode = `import { Button, Drawer, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Поведение Drawer</Button>
        <Drawer
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            width="520px"
            overlay={false}
            disableBackdropClick
            isViewCloseButton={false}
            clickAwayEventType="mousedown"
        >
            <Typography color="primary">Drawer без оверлея и без кнопки закрытия.</Typography>
            <Typography color="primary">Закрытие по backdrop отключено.</Typography>
        </Drawer>
      </>
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Drawer"
        description="Drawer отображает выдвижную панель поверх интерфейса для вспомогательных действий и контента. Компонент поддерживает позиционирование, управление размерами и гибкую настройку сценариев закрытия."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Drawer"
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
          <Editor minHeight={350} description="Базовый Drawer с открытием справа." code={drawerDefaultCode} />

          <Editor minHeight={350} description="Drawer с открытием слева." code={drawerLeftCode} />
          <Editor
            minHeight={400}
            description="Drawer с вертикальным открытием: top и bottom."
            code={drawerVerticalCode}
          />
          <Editor
            minHeight={380}
            description="Настройка поведения через overlay, disableBackdropClick и isViewCloseButton, с закрытием по Esc."
            code={drawerBehaviorCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&p=f" />
      )}
      {Number(activeTab) === 2 && <Tests componentName="Drawer" />}
    </div>
  );
};

export default DrawerStories;
