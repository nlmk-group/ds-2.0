import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1';

const DatePickerStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const datepickerDefaultCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker value={value} onChange={setValue} />
  );
};
export default App;
`;

  const datepickerTimeCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker type="time" value={value} onChange={setValue} />
  );
};
export default App;
`;

  const datepickerPeriodCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [valueFrom, setValueFrom] = useState(new Date());
  const [valueTo, setValueTo] = useState(new Date());

  return (
    <DatePicker type="period" valueFrom={valueFrom} valueTo={valueTo} onPeriodChange={(from, to) => { setValueFrom(from); setValueTo(to); }} />
  );
};
export default App;
`;

  const datepickerWithEnabledDateCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());
  const currentYear = new Date().getFullYear();
  const from = new Date(currentYear, 0, 1);
  const to = new Date(currentYear, 11, 31);

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      enabledFrom={from}
      enabledTo={to}
    />
  );
};
export default App;
`;

  const datepickerSecondsCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker type="seconds" value={value} onChange={setValue} />
  );
};
export default App;
`;

  const datepickerShiftCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const today = new Date();
  const dateTo = new Date();
  dateTo.setDate(today.getDate() + 3);

  const [valueFrom, setValueFrom] = useState(today);
  const [valueTo, setValueTo] = useState(dateTo);
  const [shiftFrom, setShiftFrom] = useState(1);
  const [shiftTo, setShiftTo] = useState(2);

  return (
    <DatePicker
      type="shift"
      valueFrom={valueFrom}
      valueTo={valueTo}
      shiftFrom={shiftFrom}
      shiftTo={shiftTo}
      shiftLength={3}
      onPeriodChange={(from, to, sFrom, sTo) => {
        setValueFrom(from || new Date());
        setValueTo(to || new Date());
        setShiftFrom(sFrom || 1);
        setShiftTo(sTo || 1);
      }}
    />
  );
};
export default App;
`;

  const datepickerErrorCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      error
      helperText="Проверьте корректность даты"
    />
  );
};
export default App;
`;

  const datepickerResetCode = `import { useState } from 'react';
import { DatePicker } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(new Date());

  return (
    <DatePicker
      value={value}
      onChange={setValue}
      reset
      onReset={() => setValue(new Date())}
    />
  );
};
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="DatePicker"
        description="DatePicker предназначен для выбора даты и времени в одном поле ввода. Компонент поддерживает режимы date/time/seconds, выбор периода и смен, ограничения диапазона и локализацию."
        isBeta
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker"
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
          <Editor height={500} description="Базовый DatePicker с выбором даты." code={datepickerDefaultCode} />

          <Editor height={500} description="Выбор даты и времени в режиме type=time." code={datepickerTimeCode} />

          <Editor height={500} description="Выбор периода через type=period." code={datepickerPeriodCode} />

          <Editor
            height={500}
            description="Выбор времени с секундами через type=seconds."
            code={datepickerSecondsCode}
          />

          <Editor height={600} description="Выбор периода со сменами через type=shift." code={datepickerShiftCode} />

          <Editor
            height={500}
            description="Ограничение доступного диапазона дат через enabledFrom и enabledTo."
            code={datepickerWithEnabledDateCode}
          />

          <Editor height={500} description="Состояние ошибки и helperText." code={datepickerErrorCode} />

          <Editor height={500} description="Сброс значения через reset и onReset." code={datepickerResetCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="DatePicker" />}
    </div>
  );
};

export default DatePickerStories;
