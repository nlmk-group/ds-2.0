import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import argsTypes from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=45-1167&t=EnvIMGos3m33avAX-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const defaultTabsCode = `import { Tabs, Typography, Box } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Tabs>
        <Tabs.Tab label="Входящие" active={activeTab === 0} onClick={() => setActiveTab(0)} />
        <Tabs.Tab label="Мои папки" active={activeTab === 1} onClick={() => setActiveTab(1)} />
        <Tabs.Tab
          label="Спам"
          active={activeTab === 2}
          onClick={() => setActiveTab(2)}
          hasBadge={true}
          badgeChildren="91"
        >
          <Tabs.Tooltip
            render={<Typography variant="Caption-Medium" color="var(--steel-90)">Сюда вы можете добавить текст-подсказку для компонента</Typography>}
          >
            <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-90)" />
          </Tabs.Tooltip>
        </Tabs.Tab>
      </Tabs>

      <Box width={350}>
        {activeTab === 0 && <Typography variant="Heading4" color="var(--steel-90)">Входящие</Typography>}
        {activeTab === 1 && <Typography variant="Heading4" color="var(--steel-90)">Мои папки</Typography>}
        {activeTab === 2 && <Typography variant="Heading4" color="var(--steel-90)">Папка со спамом</Typography>}
      </Box>
    </>
  );
};

export default App;
`;
  const scrollableTabsCode = `import { Tabs } from '@nlmk/ds-2.0';
import { useState } from 'react';

const tabLabels = [
  'Профиль',
  'Уведомления',
  'История',
  'Документы',
  'Платежи',
  'Интеграции',
  'Доступы',
  'Логи'
];

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs scrollable={true}>
      {tabLabels.map((label, index) => (
        <Tabs.Tab key={label} label={label} active={activeTab === index} onClick={() => setActiveTab(index)} />
      ))}
    </Tabs>
  );
};

export default App;
`;

  const verticalTabsCode = `import { Tabs, Typography } from '@nlmk/ds-2.0';
import { ETabsOrientation, ETabsTabPosition } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Входящие', 'Мои папки', 'Спам', 'Черновики'];

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.left}>
        {tabs.map((label, index) => (
          <Tabs.Tab
            key={label}
            label={label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </Tabs>
      <div style={{ padding: '8px' }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {tabs[activeTab]}
        </Typography>
      </div>
    </div>
  );
};

export default App;
`;

  const verticalTabsRightCode = `import { Tabs, Typography } from '@nlmk/ds-2.0';
import { ETabsOrientation, ETabsTabPosition } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Входящие', 'Мои папки', 'Черновики'];

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.right}>
        {tabs.map((label, index) => (
          <Tabs.Tab
            key={label}
            label={label}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </Tabs>
      <div style={{ padding: '8px' }}>
        <Typography variant="Heading4" color="var(--steel-90)">
          {tabs[activeTab]}
        </Typography>
      </div>
    </div>
  );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Tabs"
        description="Tabs — компонент навигации по связанным разделам интерфейса. Поддерживает compound pattern, бейджи, иконки, горизонтальную прокрутку и вертикальную ориентацию."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tabs"
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
          <Editor
            description="Базовое использование: переключение активной вкладки, бейдж и подсказка с иконкой."
            code={defaultTabsCode}
          />
          <Editor
            description="Прокручиваемый режим через `scrollable` для большого количества вкладок."
            code={scrollableTabsCode}
          />
          <Editor
            description="Вертикальные табы с расположением слева от контента."
            code={verticalTabsCode}
          />
          <Editor
            description="Вертикальные табы с расположением справа от контента."
            code={verticalTabsRightCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Tabs" />}
    </div>
  );
};

export default Stories;
