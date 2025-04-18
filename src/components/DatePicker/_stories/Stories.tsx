import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK =
  'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=407-30495&t=HhCDuaOuzHu5rgyf-1';

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
  const today = new Date();

  return (
    <DatePicker value={value} onChange={setValue} enabledFrom={new Date(today.getFullYear(), 0, 1)} enabledTo={new Date(today.getFullYear(), 11, 31)} />
  );
};
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="DatePicker"
        description="Компонент для выбора даты и времени, с возможностью ограничения времени, выбором периода времени и опциональным сдвигом."
        isBeta
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/DatePicker"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor description="Выбор даты по умолчанию" code={datepickerDefaultCode} />

          <Editor
            description="В DatePicker с типом time пользователь может выбрать дату и время"
            code={datepickerTimeCode}
          />

          <Editor description="С типом period пользователь может выбрать период времени" code={datepickerPeriodCode} />

          <Editor
            description="Возможно установить ограничение выбора дат в определенном диапазоне с помощью пропсов с приставкой enabled"
            code={datepickerWithEnabledDateCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="DatePicker" />}
    </div>
  );
};

export default DatePickerStories;
