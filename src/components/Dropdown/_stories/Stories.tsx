import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112';

const DropdownStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const positionsExample = `const positions = [
  { value: 'Сталь'},
  { value: 'Железо'},
  { value: 'Чугун', disabled: true},
  { value: 'Медь'},
  { value: 'Цинк'},
  { value: 'Титан'},
  { value: 'Хром'}
];`;

  const DropdownDefaultCode = `
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${positionsExample}

const App = () => {
  return (
    <Dropdown buttonChildren='Dropdown'>
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  const DropdownButtonFeaturesCode = `
import { Dropdown, DropdownMenuItem, IconSearchOutlined24, Typography } from '@nlmk/ds-2.0';

${positionsExample}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Фильтры"
      variant="primary"
      color="brand"
      startIcon={<IconSearchOutlined24 />}
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  const DropdownBadgesCode = `
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${positionsExample}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Уведомления"
      startBadge={3}
      endBadge={12}
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  const DropdownIconButtonCode = `
import { Dropdown, DropdownMenuItem, IconSearchOutlined24, Typography } from '@nlmk/ds-2.0';

${positionsExample}

const App = () => {
  return (
    <Dropdown
      iconButton={<IconSearchOutlined24 />}
      variant="secondary"
      color="ghost"
      size="s"
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  const DropdownPortalAndStylesCode = `
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';

${positionsExample}

const App = () => {
  return (
    <Dropdown
      buttonChildren="Dropdown в портале"
      withPortal
      portalContainerId="root"
      buttonStyle={{ minWidth: 220 }}
      menuStyle={{ maxHeight: 260, overflowY: 'auto' }}
      className="custom-dropdown"
    >
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  const DropdownDisabledCode = `
import { Dropdown, DropdownMenuItem, Typography } from '@nlmk/ds-2.0';
import { useState } from 'react';

${positionsExample}

const App = () => {
  return (
    <Dropdown disabled buttonChildren='Dropdown'>
      {positions.map(({value, disabled}) => (
        <DropdownMenuItem value={value} disabled={disabled}>
          <Typography variant="Body1-Medium">{value}</Typography>
        </DropdownMenuItem>
      ))}
    </Dropdown>
  );
};
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Dropdown"
        description="Dropdown отображает выпадающее меню действий, связанное с кнопкой-триггером. Компонент поддерживает наследование настроек Button, кастомный контент пунктов и рендер меню через портал."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Dropdown"
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
          <Editor minHeight={400} description="Базовый Dropdown со списком пунктов." code={DropdownDefaultCode} />
          <Editor minHeight={400} description="Dropdown в состоянии disabled." code={DropdownDisabledCode} />
          <Editor
            minHeight={400}
            description="Настройка кнопки через color, variant и startIcon."
            code={DropdownButtonFeaturesCode}
          />
          <Editor minHeight={400} description="Бейджи кнопки через startBadge и endBadge." code={DropdownBadgesCode} />
          <Editor minHeight={400} description="Иконка-кнопка через iconButton." code={DropdownIconButtonCode} />
          <Editor
            minHeight={400}
            description="Рендер меню в портале и кастомные стили кнопки/меню."
            code={DropdownPortalAndStylesCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Dropdown" />}
    </div>
  );
};
export default DropdownStories;
