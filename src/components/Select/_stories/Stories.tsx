import React, { useState } from 'react';

import { argsTypes } from './argsTypes';
import { Tab, Tabs, Typography } from '@components/index';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';

import styles from '@components/_storybook/Stories/Stories.module.scss';

const SelectStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);
  const optionsExample = `const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry', disabled: true },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
    { value: 'fig', label: 'Fig' },
    { value: 'grape', label: 'Grape' }
  ];`;

  const selectDefaultCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default  App = () => (
  <>
    <Select options={options} label="Одиночный выбор" multiple={false} />
  </>
);
`;

  const selectMultipleCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default  App = () => (
  <>
    <Select options={options} label="Множественный выбор" multiple />
  </>
);
`;

  const selectSearchableCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default App = () => (
  <>
    <Select options={options} label="Выбор с поиском" isSearchable />
  </>
);
`;

  const selectDisabledCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`;

  const selectExtraCompactCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default App = () => (
  <>
    <Select options={options} label="Размер xs" size="xs" />
  </>
);
`;

  const selectScrollingItemsCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default App = () => (
  <>
    <Select options={options} label="Скролл" scrollingItems={2} />
  </>
);
`;

  const selectSuccessCode = `import { Select } from '@nlmk/ds-2.0';
${optionsExample}
export default App = () => (
  <>
    <Select options={options} label="Цвет success" color="success" />
  </>
);
`;

  const selectEmptyCode = `import { Select } from '@nlmk/ds-2.0';
export default App = () => (
  <>
    <Select options={[]} label="Пустой select" />
  </>
);
`;


  return (
    <div className={styles.wrapper}>
      <Header
        title="Select"
        description="Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции."
        isBeta
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"
        figmaLink="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1"
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
            description="Компонент Select с одиночным выбором"
            code={selectDefaultCode}
          />

          <Editor
            description="Компонент Select с возможностью множественного выбора"
            code={selectMultipleCode}
          />

          <Editor
            description="Компонент Select с возможностью поиска нужного элемента"
            code={selectSearchableCode}
          />

          <Editor
            description="Select в состоянии disabled"
            code={selectDisabledCode}
          />

          <Editor
            description="Экстра компактный Select"
            code={selectExtraCompactCode}
          />

          <Editor
            description="Select с установленным скроллом"
            code={selectScrollingItemsCode}
          />

          <Editor
            description="Select с цветом success"
            code={selectSuccessCode}
          />

          <Editor
            description="Пустой Select"
            code={selectEmptyCode}
          />

          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && (
        <FigmaEmbed url="https://www.figma.com/file/MSMqfqJrQNaqbLe4Ctkq7n/Design-System-2.0-NLMK-(beta)-(Community)?type=design&node-id=1039%3A29073&mode=design&t=awyt3Fzj1XS6th7v-1" />
      )}
      {Number(activeTab) === 2 && (
        <Typography variant="Heading4" color="primary">
          <Tests componentName="Select"/>
        </Typography>
      )}
    </div>
  );
};

export default SelectStories;
