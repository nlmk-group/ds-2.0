import React, { useState } from 'react';

import Editor from '@components/_storybook/Stories/components/Editor';
import FigmaEmbed from '@components/_storybook/Stories/components/FigmaEmbed';
import Header from '@components/_storybook/Stories/components/Header';
import Properties from '@components/_storybook/Stories/components/Properties';
import Tests from '@components/_storybook/Stories/components/Tests';
import { Tabs } from '@components/index';

import styles from '@components/_storybook/Stories/Stories.module.scss';

import { argsTypes } from './argsTypes';

const FIGMA_LINK = 'https://www.figma.com/design/kldVs3ebNRcxsgYGttpDbU/NLMK-UI?node-id=557-223626';

const autocompleteDefaultCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' },
  { id: 6, value: 'steel_ladle', label: 'Сталеразливочный ковш' },
  { id: 7, value: 'continuous_casting', label: 'Машина непрерывного литья' },
  { id: 8, value: 'electric_furnace', label: 'Электродуговая печь' },
  { id: 9, value: 'oxygen_plant', label: 'Кислородная станция' },
  { id: 10, value: 'heat_treatment', label: 'Термическая обработка' }
];

export default function App() {
  const [selected, setSelected] = useState();
  return (
    <Autocomplete
      items={options}
      onChange={setSelected}
      nameGetter={item => item.label || ''}
    />
  );
};
`;

const withCreateItemCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const defaultOptions = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
];

export default function WithCreateItemExample() {
  const [items, setItems] = useState(defaultOptions);
  const [selectedItem, setSelectedItem] = useState();

  const handleCreateItem = (rawValue) => {
    const value = rawValue.trim();

    const existing = items.find(
      (item) => item.label?.trim().toLowerCase() === value.toLowerCase()
    );
    if (existing) {
      setSelectedItem(existing);
      return;
    }

    const newItem = { id: items.length + 1, label: value, value };
    setItems((prev) => [...prev, newItem]);
    setSelectedItem(newItem);
  };

  return (
    <Autocomplete
      items={items}
      selected={selectedItem}
      nameGetter={(item) => item.label?.trim() || ''}
      onChange={(val) => setSelectedItem(val)}
      onCreateItem={handleCreateItem}
      placeholder="Начните ввод..."
      noResultsText="Нет результатов"
      size="m"
    />
  );
}
`;

const withLoadMoreCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useEffect } from 'react';

export default function WithLoadMoreExample() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => ({ id: i, label: \`Option \${i}\`, value: i }))
  );

  const handleLoadMore = () => {
    setTimeout(() => {
      setItems(prev => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => ({
          id: prev.length + i,
          label: \`New Option \${prev.length + i}\`,
          value: prev.length + i
        }))
      ]);
    }, 1000);
  };

  return (
    <div style={{ height: '300px', overflow: 'auto' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={(val) => console.log('onChange', val)}
        canLoadMore={true}
        onLoadMore={handleLoadMore}
      />
    </div>
  );
};
`;

const AutocompleteStories = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.wrapper}>
      <Header
        title="Autocomplete"
        isStable
        description="Компонент Autocomplete используется для предоставления функции автозаполнения на основе введенного текста, позволяя пользователю выбирать из предложенных вариантов."
        codeLink="https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Autocomplete"
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
          <Editor height={200} description="Autocomplete по умолчанию" code={autocompleteDefaultCode} />
          <Editor height={200} description="Autocomplete с созданием нового элемента" code={withCreateItemCode} />
          <Editor height={200} description="Autocomplete с догрузкой при скролле" code={withLoadMoreCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Autocomplete" />}
    </div>
  );
};

export default AutocompleteStories;
