import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-11112&t=HhCDuaOuzHu5rgyf-1';

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
        description="Dropdown позволяет пользователям выбирать одно действие из выпадающего меню"
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
          <Editor description="Компонент Dropdown с одиночным выбором" code={DropdownDefaultCode} />
          <Editor description="Dropdown в состоянии disabled" code={DropdownDisabledCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url={FIGMA_LINK} />
      )}
      {Number(activeTab) === 2 && <Tests componentName="Dropdown" />}
    </div>
  );
};
export default DropdownStories;
