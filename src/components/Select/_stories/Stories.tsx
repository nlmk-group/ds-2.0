import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

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

  const selectDefaultCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Одиночный выбор"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`;

  const selectMultipleCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default  App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Множественный выбор"
        multiple
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  )
};
`;

  const selectSearchableCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Выбор с поиском"
        isSearchable
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;

  const selectDisabledCode = `import { Select } from '@nlmk/ds-2.0';

${optionsExample}

export default App = () => (
  <>
    <Select options={options} label="Disabled" disabled />
  </>
);
`;

  const selectExtraCompactCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Размер xs"
        size="xs"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;

  const selectScrollingItemsCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default App = () => {
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Select
        options={options}
        label="Скролл"
        scrollingItems={2}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;

  const selectSuccessCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={options}
        label="Цвет success"
        color="success"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;

  const selectEmptyCode = `
  import { Select } from '@nlmk/ds-2.0';
  import { useState } from 'react';

export default App = () => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Select
        options={[]}
        label="Пустой select"
        selected={selected}
        onSelectionChange={setSelected}
      />
    </>
  );
}
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Select"
        description="Select позволяет пользователям выбирать один или несколько элементов из списка. Он поддерживает поиск, множественный выбор и другие функции."
        isDeprecated
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Select"
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={0 === Number(activeTab)} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Тестирование" active={1 === Number(activeTab)} onClick={() => setActiveTab(1)} />
        </Tabs>
      </div>

      {Number(activeTab) === 0 && (
        <>
          <Editor description="Компонент Select с одиночным выбором" code={selectDefaultCode} />
          <Editor description="Компонент Select с возможностью множественного выбора" code={selectMultipleCode} />
          <Editor description="Компонент Select с возможностью поиска нужного элемента" code={selectSearchableCode} />
          <Editor description="Select в состоянии disabled" code={selectDisabledCode} />
          <Editor description="Экстра компактный Select" code={selectExtraCompactCode} />
          <Editor description="Select с установленным скроллом" code={selectScrollingItemsCode} />
          <Editor description="Select с цветом success" code={selectSuccessCode} />
          <Editor height={200} description="Пустой Select" code={selectEmptyCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <Tests componentName="Select" />}
    </div>
  );
};

export default SelectStories;
