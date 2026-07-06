import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=6041-110931';
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/TimePicker';

enum TabIds {
  dev,
  design,
  tests
}

const TimePickerStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.dev);

  const timepickerDefaultCode = `import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      value={time}
      onChange={setTime}
      reset={true}
      onReset={() => setTime(undefined)}
    />
  );
};

export default App;
`;

  const timepickerWithLabelCode = `import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      label="Время"
      value={time}
      onChange={setTime}
    />
  );
};

export default App;
`;
  const timepickerPeriodCode = `import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [valueFrom, setValueFrom] = useState<Date | undefined>(new Date());
  const [valueTo, setValueTo] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      type="period"
      valueFrom={valueFrom}
      valueTo={valueTo}
      onPeriodChange={(nextFrom, nextTo) => {
        setValueFrom(nextFrom);
        setValueTo(nextTo);
      }}
      label="Период"
    />
  );
};

export default App;
`;

  const timepickerDisabledCode = `import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <TimePicker
      disabled
      value={time}
      onChange={setTime}
    />
  );
};

export default App;
`;

  const timepickerWithPortalCode = `import { TimePicker } from '@nlmk/ds-2.0';
import { useState } from 'react';

const App = () => {
  const [time, setTime] = useState<Date | undefined>(new Date());

  return (
    <div style={{ overflow: 'hidden', height: '200px', paddingTop: '8px' }}>
      {/* withPortal предотвращает обрезку выпадающей панели */}
      <TimePicker
        value={time}
        onChange={setTime}
        withPortal={true}
        label="Время (с порталом)"
      />
    </div>
  );
};

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="TimePicker"
        description="TimePicker используется для выбора времени и периодов времени. Поддерживает single и period режимы, валидацию ввода и рендер панели через портал."
        isStable
        codeLink={CODE_LINK}
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={activeTab === TabIds.dev} onClick={() => setActiveTab(TabIds.dev)} />
          <Tabs.Tab
            label="Дизайнеру"
            active={activeTab === TabIds.design}
            onClick={() => setActiveTab(TabIds.design)}
          />
          <Tabs.Tab
            label="Тестирование"
            active={activeTab === TabIds.tests}
            onClick={() => setActiveTab(TabIds.tests)}
          />
        </Tabs>
      </div>

      {activeTab === TabIds.dev && (
        <>
          <Editor
            minHeight={500}
            description="Базовый controlled-сценарий с кнопкой сброса (`reset` + `onReset`)."
            code={timepickerDefaultCode}
          />
          <Editor minHeight={500} description="Одиночный выбор времени с лейблом." code={timepickerWithLabelCode} />
          <Editor
            minHeight={500}
            description="Режим периода через `type=period` и обработчик `onPeriodChange`."
            code={timepickerPeriodCode}
          />
          <Editor minHeight={300} description="Отключенное состояние (`disabled`)." code={timepickerDisabledCode} />
          <Editor
            minHeight={500}
            description="Рендер выпадающей панели через портал (`withPortal`) для контейнеров с `overflow: hidden`."
            code={timepickerWithPortalCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab === TabIds.design && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab === TabIds.tests && <Tests componentName="TimePicker" />}
    </div>
  );
};

export default TimePickerStories;
