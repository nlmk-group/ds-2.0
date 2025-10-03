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
    <MultiSelect value={value} onChange={setValue} label="Мультивыбор">
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

  const multiSelectSearchableCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="MultiSelect с поиском" searchable>
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
      {options.map(({value, label}) => (
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
    <MultiSelect value={value} onChange={setValue} label="С кнопкой выбрать все" showSelectAll>
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

  const multiSelectClearSearchCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="С очисткой поиска" searchable clearSearchOnSelect>
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

  const multiSelectResetCode = `
  import { MultiSelect, OptionItem } from '@nlmk/ds-2.0';
  import { useState } from 'react';

${optionsExample}

const App = () => {
  const [value, setValue] = useState(['steel', 'aluminum']);
  return (
    <MultiSelect value={value} onChange={setValue} label="С кнопкой сброса" reset onReset={() => setValue([])}>
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

  const multiSelectEmptyCode = `
  import { MultiSelect } from '@nlmk/ds-2.0';
  import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState([]);
  return (
    <MultiSelect value={value} onChange={setValue} label="Пустой MultiSelect">
      {/* No options */}
    </MultiSelect>
  );
};
export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="MultiSelect"
        description="MultiSelect позволяет пользователям выбирать несколько элементов из списка. Он поддерживает различные настройки, поиск и стили."
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
          <Editor description="Компонент MultiSelect с мультивыбором" code={multiSelectDefaultCode} />
          <Editor description="MultiSelect с поиском" code={multiSelectSearchableCode} />
          <Editor description="MultiSelect в состоянии disabled" code={multiSelectDisabledCode} />
          <Editor description="MultiSelect с кнопкой выбрать все" code={multiSelectSelectAllCode} />
          <Editor description="MultiSelect с очисткой поиска при выборе" code={multiSelectClearSearchCode} />
          <Editor description="MultiSelect с кнопкой сброса" code={multiSelectResetCode} />
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
