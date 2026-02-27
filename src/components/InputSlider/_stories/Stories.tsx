import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=496-18891&t=HhCDuaOuzHu5rgyf-1';

const InputSliderStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const sliderDefaultCode = `import { useState } from 'react';
import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(20);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={0}
                max={100}
                step={1}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
  };

export default App;
`;

  const sliderValuePositionCode = `import { useState } from 'react';
import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
  const [valueTop, setValueTop] = useState(35);
  const [valueRight, setValueRight] = useState(70);

  return (
    <div style={{ width: '400px', marginTop: '50px', display: 'grid', gap: '52px' }}>
      <div style={{ paddingRight: '48px' }}>
        <InputSlider
          label="Позиция значения сверху"
          min={0}
          max={100}
          value={valueTop}
          onChange={setValueTop}
          showValue
          valuePosition="top"
        />
      </div>
      <div style={{ paddingRight: '48px' }}>
        <InputSlider
          label="Позиция значения справа"
          min={0}
          max={100}
          value={valueRight}
          onChange={setValueRight}
          showValue
          valuePosition="right"
        />
      </div>
    </div>
  );
};

export default App;
`;

  const sliderCustomSuffixCode = `import { useState } from 'react';
import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
  const [value, setValue] = useState(450);

  return (
    <div style={{ width: '400px', marginTop: '50px' }}>
      <InputSlider
        label="Бюджет"
        min={0}
        max={1000}
        step={50}
        value={value}
        onChange={setValue}
        valueSuffix=" ₽"
      />
    </div>
  );
};

export default App;
`;

  const sliderDisabledCode = `import { useState } from 'react';

import { InputSlider } from '@nlmk/ds-2.0';

const App = () => {
    const [value, setValue] = useState(500);

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    return (
        <div style={{width: '400px', marginTop: '50px'}}>
            <InputSlider
                min={100}
                max={1000}
                step={10}
                value={value}
                onChange={handleChange}
                disabled
            />
        </div>
    );
  };

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="InputSlider"
        description="InputSlider используется для выбора одного числового значения в заданном диапазоне. Компонент поддерживает метку, отображение значения, позицию и суффикс значения."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/InputSlider"
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
            height={350}
            description="Базовый выбор значения в диапазоне."
            code={sliderDefaultCode}
          />
          <Editor
            height={420}
            description="Позиция отображения значения через valuePosition."
            code={sliderValuePositionCode}
          />
          <Editor
            height={350}
            description="Кастомный суффикс значения через valueSuffix."
            code={sliderCustomSuffixCode}
          />
          <Editor
            height={350}
            description="Заблокированное состояние компонента."
            code={sliderDisabledCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="InputSlider" />}
    </div>
  );
};

export default InputSliderStories;
