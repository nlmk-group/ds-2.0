import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tab, Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const ModalStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const modalDefaultCode = `import { Button, Modal, Typography }  from '@nlmk/ds-2.0';
import { useState } from 'react';
export default  App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
      <>
        <div>
            <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
            <Modal
                isOpen={isOpen}
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Typography color="primary">Содержимое модального окна</Typography>
            </Modal>
        </div>
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
        <div>
            <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
            <Modal
                isOpen={isOpen}
                isDraggable
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Typography color="primary">Содержимое модального окна</Typography>
            </Modal>
        </div>
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
        <div>
            <Button onClick={() => setIsOpen(true)}>Открыть модальное окно</Button>
            <Modal
                isOpen={isOpen}
                isResizable
                onClose={() => {
                    setIsOpen(false);
                }}
            >
                <Typography color="primary">Содержимое модального окна</Typography>
            </Modal>
        </div>
      </>
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Modal"
        description="Компонент Modal обеспечивает отображение модальных окон с возможностями перетаскивания, изменения размера и обработки закрытия."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/src/components/Modal"
        figmaLink="https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor height={350} description="Пример базового использования модального окна." code={modalDefaultCode} />

          <Editor height={350} description="Пример модального окна с возможностью перетаскивания." code={modalDraggableCode} />

          <Editor height={350} description="Пример модального окна с возможностью изменения размера." code={modalResizableCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/BU6Pd9uO1AIVa1yDqhr0hw/Drawer%2FModal-window?type=design&node-id=1-17&mode=dev" />
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Modal" />
        </Typography>
      )}
    </div>
  );
};

export default ModalStories;
