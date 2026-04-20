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

const FIGMA_LINK = 'https://www.figma.com/design/oPDzwafb5EpQ3M7vckuG5x/NLMK-Table?node-id=7107-38200';

const Stories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  const autocompleteCode = `import { Filter, IconSelectionContains24, IconEqualsSign24 } from '@nlmk/ds-2.0';

const filterTypeOptions = [
  { value: 'contains', label: 'Содержит', icon: <IconSelectionContains24 /> },
  { value: 'equals', label: 'Равно', icon: <IconEqualsSign24 /> }
];

const filterValueOptions = [
  { value: 'new', label: 'Новое' },
  { value: 'inProgress', label: 'В работе' },
  { value: 'processed', label: 'Обработано' }
];

const App = () => (
  <Filter
    filterTypeOptions={filterTypeOptions}
    filterValueOptions={filterValueOptions}
    defaultFilterType="contains"
    placeholder="Поиск ..."
    onFilterChange={(value, filterType) => {
      console.log(value, filterType);
    }}
  />
);

export default App;
`;

  const multiselectControlledCode = `import { Filter, IconMultipleChoice24 } from '@nlmk/ds-2.0';
import { useState } from 'react';

const filterTypeOptions = [
  { value: 'one_of', label: 'Один из', icon: <IconMultipleChoice24 /> }
];

const filterValueOptions = [
  { value: 'cancelled', label: 'Аннулировано' },
  { value: 'inProgress', label: 'В работе' },
  { value: 'addition', label: 'Дополнение' },
  { value: 'new', label: 'Новое' },
  { value: 'processed', label: 'Обработано' }
];

const App = () => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Filter
      mode="multiselect"
      filterTypeOptions={filterTypeOptions}
      filterValueOptions={filterValueOptions}
      selectedValues={selected}
      onSelectedValuesChange={setSelected}
      placeholder="Фильтр"
    />
  );
};

export default App;
`;

  const multiselectUncontrolledCode = `import { Filter, IconMultipleChoice24 } from '@nlmk/ds-2.0';

const filterTypeOptions = [
  { value: 'one_of', label: 'Один из', icon: <IconMultipleChoice24 /> }
];

const filterValueOptions = [
  { value: 'new', label: 'Новое' },
  { value: 'inProgress', label: 'В работе' },
  { value: 'processed', label: 'Обработано' }
];

const App = () => (
  <Filter
    mode="multiselect"
    filterTypeOptions={filterTypeOptions}
    filterValueOptions={filterValueOptions}
    defaultSelectedValues={['new', 'inProgress']}
    onSelectedValuesChange={values => console.log(values)}
    placeholder="Фильтр"
  />
);

export default App;
`;

  return (
    <div className={styles.wrapper}>
      <Header
        title="Filter"
        description="Filter — компонент фильтрации данных по типу и значению. Поддерживает одиночный выбор (autocomplete) и мультивыбор (multiselect) с чекбоксами. Подходит для заголовков колонок таблицы."
        isStable
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Filter"
        figmaLink={FIGMA_LINK}
      />

      <div className={styles.tabs}>
        <Tabs>
          <Tabs.Tab label="Разработчику" active={activeTab === 0} onClick={() => setActiveTab(0)} />
          <Tabs.Tab label="Дизайнеру" active={activeTab === 1} onClick={() => setActiveTab(1)} />
          <Tabs.Tab label="Тестирование" active={activeTab === 2} onClick={() => setActiveTab(2)} />
        </Tabs>
      </div>

      {activeTab === 0 && (
        <>
          <Editor
            description="Режим autocomplete (по умолчанию): клик по опции подставляет её в инпут и закрывает меню."
            code={autocompleteCode}
          />
          <Editor
            description="Режим multiselect (controlled): чекбоксы в меню, меню остаётся открытым, выбранные значения хранит родитель."
            code={multiselectControlledCode}
          />
          <Editor
            description="Режим multiselect (uncontrolled): начальный набор выбранных значений задаётся через defaultSelectedValues."
            code={multiselectUncontrolledCode}
          />
          <Properties argsTypes={argsTypes} />
        </>
      )}
      {activeTab === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {activeTab === 2 && <Tests componentName="Filter" />}
    </div>
  );
};

export default Stories;
