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

export default App = () => {
  const [checked, setChecked] = useState('yes');

  const handleChange = event => {
    setChecked(event.target.value);
  };

  return (
    <>
      <Radio checked={checked === 'yes'} onChange={handleChange} value="yes" label="Да" />
      <Radio checked={checked === 'no'} onChange={handleChange} value="no" label="Нет" />
    </>
  );
}
`;

  const radioColorCode = `import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default App = () => {
  const [checked, setChecked] = useState('brand');

  const handleChange = event => {
    setChecked(event.target.value);
  };

  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Radio checked={checked === 'brand'} onChange={handleChange} value="brand" label="Основной" color="brand" />
      <Radio checked={checked === 'error'} onChange={handleChange} value="error" label="Ошибка" color="error" />
      <Radio checked={checked === 'success'} onChange={handleChange} value="success" label="Успех" color="success" />
    </div>
  );
}
`;

  const radioDisabledCode = `import { useState } from 'react';
import { Radio } from '@nlmk/ds-2.0';

export default App = () => {
  const [checked, setChecked] = useState('enabled');

  const handleChange = event => {
    setChecked(event.target.value);
  };

  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <Radio checked={checked === 'enabled'} onChange={handleChange} value="enabled" label="Доступный вариант" />
      <Radio checked={checked === 'disabled'} onChange={handleChange} value="disabled" label="Недоступный вариант" disabled />
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
            description="Базовый выбор одного значения в группе."
            code={radioDefaultCode}
          />

          <Editor
            description="Цветовые состояния radio-кнопки через prop color."
            code={radioColorCode}
          />
          <Editor
            description="Недоступный вариант в группе через disabled."
            code={radioDisabledCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) == 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) == 2 && <Tests componentName="Radio" />}
    </div>
  );
};

export default Stories;
