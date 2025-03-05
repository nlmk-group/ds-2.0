import React, { useEffect, useState } from 'react';

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

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Autocomplete/Stories',
  component: Autocomplete,
  argTypes: argsTypes,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const AutocompleteDefault = (args: IAutocompleteProps): JSX.Element => {
  const [items, setItems] = useState<IAutocompleteValue[]>(args.items ?? defaultOptions);

  useEffect(() => {
    setItems(args.items ?? defaultOptions);
  }, [args.items]);

  return (
    <div style={{ padding: '50px' }}>
      <Autocomplete {...args} items={items} nameGetter={item => item.label || ''} onCreateItem={undefined} />
    </div>
  );
};
AutocompleteDefault.storyName = 'Autocomplete по умолчанию';
