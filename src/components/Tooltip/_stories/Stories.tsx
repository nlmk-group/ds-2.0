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

const style = `{{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '12px',
  padding: '30px',
  margin: '0 auto',
  height: '180px',
  color: 'var(--steel-90)'
}}`;

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=560-4267';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const defaultTooltipCode = `import { Tooltip, Button } from '@nlmk/ds-2.0';

const App = () => (
  <div style=${style}>
    <Tooltip description="Сюда вы можете добавить текст подсказки для компонента">
      <Button variant="secondary">Наведи на меня курсор</Button>
    </Tooltip>
  </div>
);

export default App;
`;
  const placementsCode = `import { Tooltip, Button } from '@nlmk/ds-2.0';

const App = () => (
  <div style=${style}>
    <Tooltip placement="top" description="Tooltip on top">
      <Button variant="secondary">Сверху</Button>
    </Tooltip>
    <Tooltip placement="bottom" description="Tooltip on bottom">
      <Button variant="secondary">Снизу</Button>
    </Tooltip>
    <Tooltip placement="left" description="Tooltip on left">
      <Button variant="secondary">Слева</Button>
    </Tooltip>
    <Tooltip placement="right" description="Tooltip on right">
      <Button variant="secondary">Справа</Button>
    </Tooltip>
  </div>
);

export default App;
`;
  const behaviorCode = `import { Tooltip, Button } from '@nlmk/ds-2.0';

const App = () => (
  <div style=${style}>
    <Tooltip behavior="hover" description="Tooltip on hover">
      <Button variant="secondary">Открытие по hover</Button>
    </Tooltip>
    <Tooltip behavior="click" description="Tooltip on click">
      <Button variant="secondary">Открытие по click</Button>
    </Tooltip>
    <Tooltip behavior="focus" description="Tooltip on focus">
      <Button variant="secondary">Открытие по focus</Button>
    </Tooltip>
  </div>
);

export default App;
`;
  const disabledTargetCode = `import { Tooltip, Button } from '@nlmk/ds-2.0';

const App = () => (
  <div style=${style}>
    <Tooltip description="Для disabled-элементов добавьте обертку">
      <span>
        <Button variant="secondary" disabled>
          Disabled button
        </Button>
      </span>
    </Tooltip>
  </div>
);

export default App;
`;
  const controlledCode = `import { Tooltip, Button } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style=${style}>
      <Button variant="secondary" onClick={() => setIsOpen((prev) => !prev)}>
        Переключить тултип
      </Button>
      <Tooltip
        isOpen={isOpen}
        behavior="click"
        clickable={true}
        description="Управляемое состояние через isOpen"
      >
        <Button variant="primary">Целевой элемент</Button>
      </Tooltip>
    </div>
  );
};

export default App;
`;
  const customRenderCode = `import { Tooltip, Button, Typography, Icon, Box } from '@nlmk/ds-2.0';

const RenderCustom = () => (
  <div>
    <Box color="var(--unique-white)" gap="8px" alignItems="center" paddingSpace="xs">
      <Icon name="IconDoneCheckOutlined16" color="success" />
      <Typography variant="Caption-Medium">Первый пункт</Typography>
    </Box>
    <Box color="var(--unique-white)" gap="8px" alignItems="center" paddingSpace="xs">
      <Icon name="IconDoneCheckOutlined16" color="success" />
      <Typography variant="Caption-Medium">Второй пункт</Typography>
    </Box>
  </div>
);

const App = () => (
  <div style=${style}>
    <Tooltip
      behavior="click"
      title="Тултип с кастомным контентом"
      description="За кастомный контент отвечает проп render"
      render={<RenderCustom />}
    >
      <Button variant="secondary">Нажми для открытия</Button>
    </Tooltip>
  </div>
);

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Tooltip"
        description="Tooltip отображает дополнительную информацию относительно целевого элемента. Поддерживает разные сценарии открытия, позиции, управляемое состояние и кастомный контент."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Tooltip"
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
          <Editor description="Базовое использование тултипа с текстовым описанием." code={defaultTooltipCode} />

          <Editor description="Варианты позиционирования через `placement`." code={placementsCode} />

          <Editor description="Сценарии открытия через `behavior`: `hover`, `click`, `focus`." code={behaviorCode} />

          <Editor description="Использование с disabled-элементом через wrapper (`span`)." code={disabledTargetCode} />
          <Editor
            description="Управляемое отображение через `isOpen` и интерактивность контента через `clickable`."
            code={controlledCode}
          />
          <Editor description="Тултип с кастомной JSX-разметкой через `render`." code={customRenderCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Tooltip" />}
    </div>
  );
};

export default Stories;
