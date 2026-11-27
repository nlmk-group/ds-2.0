import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import '@components/_storybook/Stories/styles.css';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=248-27165';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const radioDefaultCode = `import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default function ShiftSelector() {
  const [shift, setShift] = useState('day');
  const selectShift = (event: React.ChangeEvent<HTMLInputElement>) => setShift(event.target.value);

  return (
    <fieldset style={{
      display: 'grid', gap: 8, margin: 0, padding: '8px 16px 16px',
      border: '1px solid var(--unique-divider)', borderRadius: 4
    }}>
      <legend style={{ paddingInline: 4 }}>Рабочая смена</legend>
      <Radio name="shift" value="day" label="Дневная" checked={shift === 'day'} onChange={selectShift} />
      <Radio name="shift" value="night" label="Ночная" checked={shift === 'night'} onChange={selectShift} />
    </fieldset>
  );
}`;

  const radioColorCode = `import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default () => {
  const [checked, setChecked] = useState('brand');

  const handleChange = event => {
    setChecked(event.target.value);
  };

  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Radio name="status" checked={checked === 'brand'} onChange={handleChange} value="brand" label="Основной" color="brand" />
      <Radio name="status" checked={checked === 'error'} onChange={handleChange} value="error" label="Ошибка" color="error" />
      <Radio name="status" checked={checked === 'success'} onChange={handleChange} value="success" label="Успех" color="success" />
    </div>
  );
}
`;

  const radioDisabledCode = `import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default () => {
  const [checked, setChecked] = useState('enabled');

  const handleChange = event => {
    setChecked(event.target.value);
  };

  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Radio name="availability" checked={checked === 'enabled'} onChange={handleChange} value="enabled" label="Доступный вариант" />
      <Radio name="availability" checked={checked === 'disabled'} onChange={handleChange} value="disabled" label="Недоступный вариант" disabled />
    </div>
  );
}
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Radio"
        description="Radio используется для выбора одного значения из взаимоисключающих вариантов. Компонент поддерживает подпись, цветовые состояния и режим disabled."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Radio"
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
            description="Выбор рабочей смены. Оба варианта используют одно значение в состоянии формы."
            code={radioDefaultCode}
          />

          <Editor description="Цветовые состояния radio-кнопки через prop color." code={radioColorCode} />
          <Editor description="Недоступный вариант в группе через disabled." code={radioDisabledCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Radio" />}
    </div>
  );
};

export default Stories;
