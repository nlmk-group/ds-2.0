import React, { useState } from 'react';

import { argsTypes } from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const TimePickerStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const timepickerDefaultCode = `
import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker value={new Date()} onChange={(newTime) => console.log(newTime)} />
);
export default App;
`;

  const timepickerWithLabelCode = `
import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker label="Время" value={new Date()} onChange={(newTime) => console.log(newTime)} />
);
export default App;
`;

  const timepickerDisabledCode = `
import { TimePicker } from '@nlmk/ds-2.0';

const App = () => (
  <TimePicker disabled value={new Date()} onChange={(newTime) => console.log(newTime)} />
);
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="TimePicker"
        description="TimePicker позволяет пользователям выбирать время или период времени. Поддерживает различные форматы и диапазоны времени."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1"
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
          <Editor
            description="Основной TimePicker. Позволяет выбирать время."
            code={timepickerDefaultCode}
          />

          <Editor
            description="TimePicker с лейблом."
            code={timepickerWithLabelCode}
          />

          <Editor
            description="Отключенный TimePicker. Не доступен для взаимодействия."
            code={timepickerDisabledCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20847&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Select"/>
        </Typography>
      )}
    </div>
  );
};

export default TimePickerStories;
