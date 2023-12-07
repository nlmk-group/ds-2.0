import React, {useState} from 'react';

import {argsTypes} from './argsTypes';
import {Tab, Tabs, Typography} from '@components/index';
import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const ProgressBarStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const progressBarDefaultCode = `
import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{ width: '400px', marginTop: '50px' }}>
      <ProgressBar percentage={60} />
    </div>
  </>
);
`;

  const progressBarWithLabelCode = `
import { ProgressBar } from '@nlmk/ds-2.0';

export default  App = () => (
  <>
    <div style={{ width: '400px', marginTop: '50px' }}>
      <ProgressBar percentage={50} label="Прогресс" />
    </div>
  </>
);
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="ProgressBar"
        description="ProgressBar представляет собой компонент, показывающий прогресс выполнения задачи или процесса. Он предоставляет наглядное представление о проценте выполнения."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/ProgressBar"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25757&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            description="Компонент ProgressBar имеет только одно обязательное свойство percentage, которое задается числом."
            code={progressBarDefaultCode}
          />

          <Editor
            description="Компоненту ProgressBar можно добавить label который будет располагаться под шкалой процента."
            code={progressBarWithLabelCode}
          />
          <Properties argsTypes={argsTypes}/>
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed
          url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A25757&mode=design&t=awyt3Fzj1XS6th7v-1"/>
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="ProgressBar"/>
        </Typography>
      )}
    </div>
  );
};

export default ProgressBarStories;
