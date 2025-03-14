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
const CODE_LINK = 'https://github.com/nlmk-group/ds-2.0/tree/main/src/components/Autocomplete';

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
      label="Autocomplete по умолчанию"
    />
  );
};
`;

const withCreateItemCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

const defaultOptions = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
];

export default function WithCreateItemExample() {
  const [items, setItems] = useState(defaultOptions);
  const [selectedItem, setSelectedItem] = useState();

  const handleCreateItem = (value) => {
    const newItem = { 
      id: items.length + 1, 
      value: value.toLowerCase().replace(/\\s+/g, '_'), 
      label: value 
    };
    
    setItems(prev => [...prev, newItem]);
    setSelectedItem(newItem);
  };

  return (
    <Autocomplete
      items={items}
      selected={selectedItem}
      nameGetter={(item) => item.label || ''}
      onChange={setSelectedItem}
      onCreateItem={handleCreateItem}
      createItemText={(value) => \`Создать новый элемент: \${value}\`}
      label="Autocomplete с созданием нового элемента"
      placeholder="Введите название или создайте новый элемент"
    />
  );
}
`;

const withCustomTotalTextCode = `
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

export default function CustomTotalTextExample() {
  const [selected, setSelected] = useState();
  return (
    <Autocomplete
      items={options}
      onChange={setSelected}
      nameGetter={item => item.label || ''}
      totalText="Найдено:"
      label="Autocomplete с кастомным текстом 'Total'"
    />
  );
};
`;

const withAsyncLoadingCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

const defaultOptions = [
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

export default function AsyncLoadingExample() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadOptions = (query) => {
    setIsLoading(true);
    
    // Имитация запроса к API
    setTimeout(() => {
      const filteredItems = defaultOptions.filter(item => 
        item.label?.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filteredItems);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Autocomplete 
      items={items} 
      nameGetter={item => item.label || ''} 
      onChange={setSelected}
      selected={selected}
      isLoading={isLoading}
      onLoadOptions={handleLoadOptions}
      label="Autocomplete с асинхронной загрузкой данных"
      placeholder="Начните вводить для поиска..."
    />
  );
};
`;

const withCustomRenderingCode = `
import { Autocomplete, Typography } from '@nlmk/ds-2.0';
import { useState, useCallback } from 'react';

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

export default function CustomRenderingExample() {
  const [selected, setSelected] = useState();

  const renderCustomLabel = (item) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Typography variant="Body-Medium" color="var(--spectrum-red-50)">
          ID: {item.id}
        </Typography>
        <Typography color="var(--steel-90)">{item.label}</Typography>
        <Typography variant="Caption-Medium" color="var(--steel-70)">
          ({item.value})
        </Typography>
      </div>
    );
  };

  return (
    <Autocomplete 
      items={options} 
      nameGetter={item => item.label || ''} 
      onChange={setSelected}
      selected={selected}
      renderLabel={renderCustomLabel}
      label="Autocomplete с кастомным рендерингом опций"
      showTooltip={true}
    />
  );
};
`;

const withSizesCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' }
];

export default function SizesExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="xs"
        label="Размер XS"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="s"
        label="Размер S"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={() => {}}
        size="m"
        label="Размер M (по умолчанию)"
      />
    </div>
  );
};
`;

const withPortalCode = `
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

export default function PortalExample() {
  const [selected, setSelected] = useState();

  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        selected={selected}
        withPortal={true}
        portalContainerId="root"
        label="Autocomplete с рендерингом через портал"
      />
    </div>
  );
};
`;

const withEmptyDropdownCode = `
import { Autocomplete } from '@nlmk/ds-2.0';
import { useState } from 'react';

const options = [
  { id: 1, value: 'blast_furnace', label: 'Доменная печь' },
  { id: 2, value: 'converter', label: 'Конвертер' },
  { id: 3, value: 'rolling_mill', label: 'Прокатный стан' },
  { id: 4, value: 'sinter_plant', label: 'Агломерационная фабрика' },
  { id: 5, value: 'coke_plant', label: 'Коксовая батарея' }
];

export default function EmptyDropdownExample() {
  const [selected, setSelected] = useState();
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        showEmptyDropdown={true}
        label="С отображением пустого дропдауна (по умолчанию)"
        noResultsText="Ничего не найдено"
      />
      
      <Autocomplete 
        items={options} 
        nameGetter={item => item.label || ''} 
        onChange={setSelected}
        showEmptyDropdown={false}
        label="Без отображения пустого дропдауна"
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
          <Editor height={200} description="Autocomplete по умолчанию" code={autocompleteDefaultCode} />
          <Editor height={200} description="Autocomplete с кастомным текстом 'Total'" code={withCustomTotalTextCode} />
          <Editor height={200} description="Autocomplete с асинхронной загрузкой данных" code={withAsyncLoadingCode} />
          <Editor height={200} description="Autocomplete с созданием нового элемента" code={withCreateItemCode} />
          <Editor
            height={200}
            description="Autocomplete с кастомным рендерингом опций"
            code={withCustomRenderingCode}
          />
          <Editor height={200} description="Autocomplete с разными размерами" code={withSizesCode} />
          <Editor height={200} description="Autocomplete с рендерингом через портал" code={withPortalCode} />
          <Editor height={200} description="Autocomplete с настройкой пустого дропдауна" code={withEmptyDropdownCode} />

          <Properties argsTypes={argsTypes} />
        </>
      )}

      {Number(activeTab) === 1 && <FigmaEmbed url={FIGMA_LINK} />}
      {Number(activeTab) === 2 && <Tests componentName="Autocomplete" />}
    </div>
  );
};

export default AutocompleteStories;
