import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=569-248397';
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/MultiSelect';

const MultiSelectStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const optionsExample = `const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
  ];`;

  const multiSelectDefaultCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Множественный выбор">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label} disabled={disabled}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectDisabledCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Disabled" disabled>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectExtraCompactCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Размер xs" size="xs">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectScrollingItemsCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Скролл" scrollingItems={2}>
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectSuccessCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Цвет success" color="success">
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectEmptyCode = `
  import { MultiSelect } from '@nlmk/ds-2.0';
  import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Пустой select">
      {/* No options */}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectSearchableCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect 
      value={value} 
      onChange={setValue} 
      label="Поиск" 
      searchable
      placeholder="Введите для поиска..."
    >
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  const multiSelectSelectAllCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect 
      value={value} 
      onChange={setValue} 
      label="Выбрать все" 
      showSelectAll
      selectAllLabel="Выбрать все опции"
    >
      {options.map(({value, label, disabled}) => (
        <OptionItem key={value} value={value} label={label}>
          {label}
        </OptionItem>
      ))}
    </MultiSelect>
  );
};
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="MultiSelect"
        description="MultiSelect позволяет пользователям выбирать несколько элементов из списка. Он поддерживает различные настройки, стили и дополнительные функции, такие как поиск и выбор всех опций."
        isStable
        codeLink={CODE_LINK}
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
          <Editor description="Компонент MultiSelect с множественным выбором" code={multiSelectDefaultCode} />
          <Editor description="MultiSelect в состоянии disabled" code={multiSelectDisabledCode} />
          <Editor description="Экстра компактный MultiSelect" code={multiSelectExtraCompactCode} />
          <Editor description="MultiSelect с установленным скроллом" code={multiSelectScrollingItemsCode} />
          <Editor description="MultiSelect с цветом success" code={multiSelectSuccessCode} />
          <Editor description="MultiSelect с поиском" code={multiSelectSearchableCode} />
          <Editor description="MultiSelect с функцией выбора всех опций" code={multiSelectSelectAllCode} />
          <Editor height={200} description="Пустой MultiSelect" code={multiSelectEmptyCode} />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="MultiSelect" />}
    </div>
  );
};

export default MultiSelectStories;
