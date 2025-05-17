import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=EnvIMGos3m33avAX-1';
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker';

const TimePickerStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const timepickerDefaultCode = `import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`;

  const timepickerWithLabelCode = `import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    label="Время"
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`;

  const timepickerDisabledCode = `import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker
    disabled
    value={new Date()}
    onChange={(newTime) => console.log(newTime)}
  />
);

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="TimePicker"
        description="TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени."
        isStable
        codeLink={CODE_LINK}
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
          <Editor
            height={250}
            description="Основной TimePicker. Позволяет выбирать время."
            code={timepickerDefaultCode}
          />
          <Editor height={250} description="TimePicker с лейблом." code={timepickerWithLabelCode} />
          <Editor
            height={250}
            description="Отключенный TimePicker. Не доступен для взаимодействия."
            code={timepickerDisabledCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
    </div>
  );
};

export default TimePickerStories;
