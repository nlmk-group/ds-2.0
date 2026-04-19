import React, { useState } from 'react';

import {
  Filter,
  IconEqualsSign24,
  IconMultipleChoice24,
  IconSelectionContains24,
  IconStartingContains24,
  Typography
} from '@components/index';

import styles from './Filter.module.scss';

import { IFilterProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: () => JSX.Element) => (
  <div className={styles.wrapper}>
    <Story />
  </div>
);

const filterTypeOptions = [
  { value: 'contains', label: 'Содержит', icon: <IconSelectionContains24 /> },
  { value: 'equals', label: 'Равно', icon: <IconEqualsSign24 /> },
  { value: 'starts_with', label: 'Начинается с', icon: <IconStartingContains24 /> }
];

const multiFilterTypeOptions = [
  { value: 'one_of', label: 'Один из', icon: <IconMultipleChoice24 /> }
];

const filterValueOptions = [
  { value: 'cancelled', label: 'Аннулировано' },
  { value: 'inProgress', label: 'В работе' },
  { value: 'addition', label: 'Дополнение' },
  { value: 'new', label: 'Новое' },
  { value: 'processed', label: 'Обработано' }
];

export default {
  title: 'Components/Filter/Stories',
  component: Filter,
  decorators: [withWrapper],
  argTypes: argsTypes,
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

const hiddenControlsParams = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const FilterDefault = (args: IFilterProps): JSX.Element => {
  return (
    <Filter
      {...args}
      filterTypeOptions={filterTypeOptions}
      filterValueOptions={filterValueOptions}
    />
  );
};
FilterDefault.storyName = 'Filter по умолчанию';
FilterDefault.args = {
  defaultValue: '',
  defaultFilterType: 'contains',
  mode: 'autocomplete',
  placeholder: 'Поиск ...',
  withPortal: false
};

export const FilterMultiselect = (): JSX.Element => {
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Filter
      mode="multiselect"
      filterTypeOptions={multiFilterTypeOptions}
      filterValueOptions={filterValueOptions}
      selectedValues={selected}
      onSelectedValuesChange={setSelected}
      placeholder="Фильтр"
    />
  );
};
FilterMultiselect.storyName = 'Filter с мультивыбором';
FilterMultiselect.parameters = hiddenControlsParams;

export const FilterMultiselectUncontrolled = (): JSX.Element => {
  return (
    <Filter
      mode="multiselect"
      filterTypeOptions={multiFilterTypeOptions}
      filterValueOptions={filterValueOptions}
      defaultSelectedValues={['new', 'inProgress']}
      placeholder="Фильтр"
    />
  );
};
FilterMultiselectUncontrolled.storyName = 'Filter с предвыбранными значениями';
FilterMultiselectUncontrolled.parameters = hiddenControlsParams;

export const FilterVariants = (): JSX.Element => {
  const [multi, setMulti] = useState<string[]>(['new']);

  return (
    <div className={styles.variants}>
      <div className={styles['variant-row']}>
        <Typography variant="Caption-Medium" className={styles['variant-label']}>
          Autocomplete
        </Typography>
        <Filter
          filterTypeOptions={filterTypeOptions}
          filterValueOptions={filterValueOptions}
          defaultFilterType="contains"
          placeholder="Поиск ..."
        />
      </div>

      <div className={styles['variant-row']}>
        <Typography variant="Caption-Medium" className={styles['variant-label']}>
          Multiselect
        </Typography>
        <Filter
          mode="multiselect"
          filterTypeOptions={multiFilterTypeOptions}
          filterValueOptions={filterValueOptions}
          selectedValues={multi}
          onSelectedValuesChange={setMulti}
          placeholder="Фильтр"
        />
      </div>
    </div>
  );
};
FilterVariants.storyName = 'Все варианты Filter';
FilterVariants.parameters = hiddenControlsParams;
