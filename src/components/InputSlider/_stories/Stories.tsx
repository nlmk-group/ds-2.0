import React, {useState} from 'react';

import {argsTypes} from './argsTypes';
import {Tab, Tabs, Typography} from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const InputSliderStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const sliderDefaultCode = `
import { useState } from 'react';
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

  const sliderDisabledCode = `
import { useState } from 'react';
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
        description="InputSlider представляет собой слайдер для ввода числовых значений, который позволяет пользователю выбирать значение в заданном диапазоне."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/src/components/InputSlider"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)}/>
          <Tab label="Дизайнеру" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)}/>
          <Tab label="Тестирование" active={2 === Number(activeTab)} onClick={() => setActiveTab(2)}/>
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor
            description="InputSlider по умолчанию. Позволяет пользователю выбирать значение от 0 до 100."
            code={sliderDefaultCode}
          />

          <Editor
            description="Неактивный InputSlider. Слайдер установлен в состояние 'disabled', что предотвращает взаимодействие пользователя."
            code={sliderDisabledCode}
          />

          <Properties argsTypes={argsTypes}/>
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed
          url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1036%3A20852&mode=design&t=awyt3Fzj1XS6th7v-1"/>
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="InputSlider"/>
        </Typography>
      )}
    </div>
  );
};

export default InputSliderStories;
