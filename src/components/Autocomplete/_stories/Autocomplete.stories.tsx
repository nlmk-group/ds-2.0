import React, { useCallback, useEffect, useState } from 'react';
import { createContext, ReactNode } from 'react';

import { Autocomplete } from '@components/index';

import styles from '@components/_storybook/styles.module.scss';

import { IAutocompleteProps, IAutocompleteValue } from '../types';
import { argsTypes } from './argsTypes';

const defaultOptions: IAutocompleteValue[] = [
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

interface AutocompleteStoryContextProps {
  children: ReactNode;
}

const AutocompleteStoryContext = createContext({});

const AutocompleteStoryProvider = ({ children }: AutocompleteStoryContextProps) => {
  return <AutocompleteStoryContext.Provider value={{}}>{children}</AutocompleteStoryContext.Provider>;
};

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Autocomplete/Stories',
  component: Autocomplete,
  argTypes: argsTypes,
  decorators: [
    (Story: any) => (
      <AutocompleteStoryProvider>
        <Story />
      </AutocompleteStoryProvider>
    ),
    withWrapper
  ],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const AutocompleteDefault = (args: IAutocompleteProps): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(args.items ?? defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  useEffect(() => {
    setItems(args.items ?? defaultOptions);
  }, [args.items]);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        {...args}
        items={items}
        nameGetter={item => item.label || ''}
        onCreateItem={undefined}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  );
};
AutocompleteDefault.storyName = 'Autocomplete по умолчанию';

export const AutocompleteWithCustomTotalText = (): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={setSelected}
        selected={selected}
        totalText="Найдено:"
        label="Autocomplete с кастомным текстом 'Total'"
      />
    </div>
  );
};
AutocompleteWithCustomTotalText.storyName = 'Autocomplete с кастомным текстом "Total"';

export const AutocompleteWithCustomDebounce = (): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={setSelected}
        selected={selected}
        debounceDelay={1000}
        label="Autocomplete с увеличенной задержкой debounce (1000мс)"
      />
    </div>
  );
};
AutocompleteWithCustomDebounce.storyName = 'Autocomplete с кастомной задержкой debounce';

export const AutocompleteWithAsyncLoading = (): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>([]);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadOptions = useCallback((query: string) => {
    setIsLoading(true);

    setTimeout(() => {
      const filteredItems = defaultOptions.filter(item => item.label?.toLowerCase().includes(query.toLowerCase()));
      setItems(filteredItems);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div style={{ padding: '50px' }}>
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
    </div>
  );
};
AutocompleteWithAsyncLoading.storyName = 'Autocomplete с асинхронной загрузкой';

export const AutocompleteWithCreateItem = (): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  const handleCreateItem = useCallback(
    (value: string) => {
      const newItem: IAutocompleteValue = {
        id: items.length + 1,
        value: value.toLowerCase().replace(/\s+/g, '_'),
        label: value
      };

      setItems(prevItems => [...prevItems, newItem]);
      setSelected(newItem);
    },
    [items]
  );

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={setSelected}
        selected={selected}
        onCreateItem={handleCreateItem}
        createItemText={value => `Создать новый элемент: ${value}`}
        label="Autocomplete с возможностью создания элементов"
        placeholder="Введите название или создайте новый элемент"
      />
    </div>
  );
};
AutocompleteWithCreateItem.storyName = 'Autocomplete с созданием новых элементов';

export const AutocompleteWithCustomRendering = (): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  const renderCustomLabel = useCallback((item: IAutocompleteValue) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', color: '#666' }}>ID: {item.id}</span>
        <strong>{item.label}</strong>
        <span style={{ marginLeft: '8px', fontSize: '12px', color: '#999' }}>({item.value})</span>
      </div>
    );
  }, []);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={setSelected}
        selected={selected}
        renderLabel={renderCustomLabel}
        label="Autocomplete с кастомным рендерингом опций"
        showTooltip={true}
      />
    </div>
  );
};
AutocompleteWithCustomRendering.storyName = 'Autocomplete с кастомным рендерингом опций';

export const AutocompleteWithInfiniteScroll = (): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(defaultOptions.slice(0, 3));
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);
  const [page, setPage] = useState(1);

  const handleLoadMore = useCallback(() => {
    if (isLoading) return;

    setIsLoading(true);

    setTimeout(() => {
      const nextPage = page + 1;
      const startIndex = page * 3;
      const endIndex = startIndex + 3;
      const newItems = defaultOptions.slice(startIndex, endIndex);

      setItems(prevItems => [...prevItems, ...newItems]);
      setPage(nextPage);
      setIsLoading(false);

      if (endIndex >= defaultOptions.length) {
        setCanLoadMore(false);
      }
    }, 1000);
  }, [isLoading, page]);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={setSelected}
        selected={selected}
        isLoading={isLoading}
        canLoadMore={canLoadMore}
        onLoadMore={handleLoadMore}
        label="Autocomplete с бесконечной прокруткой"
        placeholder="Прокрутите вниз для загрузки дополнительных элементов"
      />
    </div>
  );
};
AutocompleteWithInfiniteScroll.storyName = 'Autocomplete с бесконечной прокруткой';

export const AutocompleteWithPortal = (): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);
  const [selected, setSelected] = useState<IAutocompleteValue | undefined>(undefined);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete
        items={items}
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
AutocompleteWithPortal.storyName = 'Autocomplete с рендерингом через портал';

export const AutocompleteWithSizes = (): JSX.Element => {
  const [items] = useState<IAutocompleteValue[]>(defaultOptions);

  return (
    <div style={{ padding: '50px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={() => {}}
        size="xs"
        label="Размер XS"
      />

      <Autocomplete items={items} nameGetter={item => item.label || ''} onChange={() => {}} size="s" label="Размер S" />

      <Autocomplete
        items={items}
        nameGetter={item => item.label || ''}
        onChange={() => {}}
        size="m"
        label="Размер M (по умолчанию)"
      />
    </div>
  );
};
AutocompleteWithSizes.storyName = 'Autocomplete с разными размерами';
