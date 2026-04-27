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

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=502-2809&t=HhCDuaOuzHu5rgyf-1';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const basicInputRangeCode = `import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default App = () => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div style={{ width: '500px', padding: '30px 12px' }}>
      <InputRange
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleValuesChange}
      />
    </div>
  );
};
`;

  const thumbValuePositionCode = `import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default App = () => {
  const [valueTop, setValueTop] = useState({ min: 15, max: 65 });
  const [valueBottom, setValueBottom] = useState({ min: 25, max: 90 });
  const [valueNone, setValueNone] = useState({ min: 10, max: 40 });

  return (
    <div style={{ width: '500px', padding: '30px 12px', display: 'grid', gap: '44px' }}>
      <div style={{ paddingTop: '8px' }}>
        <InputRange min={0} max={100} value={valueTop} onChange={setValueTop} thumbValuePosition="top" />
      </div>
      <div style={{ paddingTop: '8px' }}>
        <InputRange min={0} max={100} value={valueBottom} onChange={setValueBottom} thumbValuePosition="bottom" />
      </div>
      <div style={{ paddingTop: '8px' }}>
        <InputRange min={0} max={100} value={valueNone} onChange={setValueNone} thumbValuePosition="none" />
      </div>
    </div>
  );
};
`;

  const stepInputRangeCode = `import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default App = () => {
  const [value, setInputRangeValue] = useState({ min: 100, max: 700 });

  return (
    <div style={{ width: '500px', padding: '30px 12px' }}>
      <InputRange
        min={0}
        max={1000}
        step={50}
        value={value}
        onChange={setInputRangeValue}
      />
    </div>
  );
};
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="InputRange"
        description="InputRange позволяет выбрать диапазон значений с помощью двух ползунков. Компонент поддерживает шаг изменения, состояние disabled и настройку отображения значений у ползунков."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputRange"
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
          <Editor description="Базовый выбор диапазона значений." code={basicInputRangeCode} />
          <Editor description="Позиция значений у ползунка через thumbValuePosition." code={thumbValuePositionCode} />
          <Editor description="Диапазон с крупным шагом изменения через step." code={stepInputRangeCode} />

          <Editor
            description="Заблокированное состояние компонента."
            code={`import { InputRange } from '@nlmk/ds-2.0';
import { useState } from 'react';

export default App = () => {
  const [value, setInputRangeValue] = useState({ min: 20, max: 80 });

  const handleValuesChange = (newValues: { min: number; max: number }) => {
    setInputRangeValue(newValues);
  };

  return (
    <div style={{ width: '500px', padding: '30px 12px' }}>
      <InputRange
        min={0}
        max={100}
        step={1}
        value={value}
        disabled
        onChange={handleValuesChange}
      />
    </div>
  );
};
`}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="InputRange" />}
    </div>
  );
};

export default Stories;
