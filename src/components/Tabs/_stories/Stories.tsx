import React, { useState } from 'react';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';
import '@components/_storybook/Stories/styles.css';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Tabs"
        description="Компонент Tabs, который объединил в себя Tab элементы."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/src/components/Tabs"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43757&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {Number(activeTab) == 0 && (
        <>
          <Editor
            description="Обычное использование компонента."
            code={`import { Tabs, Tab, Tooltip, Icon, Typography } from '@nlmk/ds-2.0';             
import { useState } from 'react';
              
export default  App = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return ( 
    <>
      <Tabs>
        <Tab
          label="Входящие"
          active={0 === Number(activeTab)}
          onClick={() => setActiveTab(0)}
        />
        <Tab
          label="Мои папки"
          active={1 === Number(activeTab)}
          onClick={() => setActiveTab(1)}
        />
        <Tab
          label="Спам"
          active={2 === Number(activeTab)}
          onClick={() => setActiveTab(2)}
          badgeNumber="91"
        >
          <Tooltip description="Сюда вы можете добавить текстподсказу для компонента">
            <Icon
              name="IconInfo16"
              containerSize={16}
              htmlColor="var(--text-grey-500)"
            />
          </Tooltip>
        </Tab>
        <Tab
          label="Черновики"
          active={3 === Number(activeTab)}
          onClick={() => setActiveTab(3)}
          badgeNumber="2"
        />
      </Tabs>

      {Number(activeTab) == 0 && (
        <Typography variant="Heading4" color="primary">
          Входящие
        </Typography>
      )}
      {Number(activeTab) == 1 && (
        <Typography variant="Heading4" color="primary">
          Мои папки
        </Typography>
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          Папка с спамом
        </Typography>
      )}
      {Number(activeTab) == 3 && (
        <Typography variant="Heading4" color="primary">
          Черновики
        </Typography>
      )}
    </>
  )
}
`}
          />

        </>
      )}
      {Number(activeTab) == 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A43757&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) == 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Tabs" />
        </Typography>
      )}
    </div>
  );
};

export default Stories;
