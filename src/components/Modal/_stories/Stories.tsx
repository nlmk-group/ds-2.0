import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=286-1924&t=HhCDuaOuzHu5rgyf-1';

const ModalStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const modalDefaultCode = `import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`;

  const modalDraggableCode = `import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            isDraggable
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`;

  const modalResizableCode = `import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';

export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <Button type="button" onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
        <Modal
            isOpen={isOpen}
            isResizable
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Typography color="var(--steel-90)">Содержимое модального окна</Typography>
        </Modal>
      </>
  );
};
`;

  const modalCloseBehaviorCode = `import { Button, Modal, Typography } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)}>
        Открыть модальное окно
      </Button>
      <Modal
        isOpen={isOpen}
        disableBackdropClick
        disablePageScroll
        onEscapeDown={() => console.log('Escape pressed')}
        onClose={() => setIsOpen(false)}
      >
        <Typography color="var(--steel-90)">
          Закрытие доступно по кнопке и клавише Escape.
        </Typography>
      </Modal>
    </>
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Modal"
        description="Modal используется для отображения поверх контента страницы и поддерживает гибкую настройку поведения закрытия, перетаскивание и изменение размера."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Modal"
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
          <Editor description="Базовое открытие и закрытие модального окна." code={modalDefaultCode} />

          <Editor
            description="Модальное окно с возможностью перетаскивания через isDraggable."
            code={modalDraggableCode}
          />

          <Editor
            description="Модальное окно с возможностью изменения размера через isResizable."
            code={modalResizableCode}
          />
          <Editor
            description="Настройка закрытия через disableBackdropClick, onEscapeDown и disablePageScroll."
            code={modalCloseBehaviorCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Modal" />}
    </div>
  );
};

export default ModalStories;
