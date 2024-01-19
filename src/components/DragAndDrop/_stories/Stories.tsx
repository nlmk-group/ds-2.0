import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs, Typography } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="DragAndDrop"
        description="Компонент DragAndDrop представляет собой компонент ..."
        isBeta
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DragAndDrop"
        figmaLink="https://www.figma.com/file/6TeplhuWEqaYbru1WEvbcA/Treelist?node-id=228%3A38735&mode=dev"
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
          <Editor
            height={400}
            description="Компонент DragAndDrop разработан в разных вариантах: успешным, с ошибкой, с предупреждением и в качестве информационного оповещения. Для собственных вариантов используйте className."
            code={`import { DragAndDrop } from '@nlmk/ds-2.0'

export default  App = () => (
  <DragAndDrop
    onUpload={() => {}}
    percentUpload={0}
  />
)`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/6TeplhuWEqaYbru1WEvbcA/Treelist?type=design&node-id=228-38735&mode=design&t=PWYYXZVAWIcENpPX-0" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="DragAndDrop" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
