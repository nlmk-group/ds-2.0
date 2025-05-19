import React, { useState } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { Box, MultiSelect, OptionItem, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './MultiSelect.module.scss';

import { IMultiSelectProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
];

export default {
  title: 'Components/MultiSelect/Stories',
  component: MultiSelect,
  argTypes: argsTypes,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const MultiSelectDefault = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);
  console.log('MultiSelectDefault render, текущее значение:', value);

  const handleChange = (newValue: Array<string | number>) => {
    console.log('MultiSelectDefault.handleChange вызван с:', newValue);
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <MultiSelect {...args} value={value} onChange={handleChange}>
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    </div>
  );
};

MultiSelectDefault.args = {
  label: 'MultiSelect по умолчанию'
};
MultiSelectDefault.storyName = 'MultiSelect по умолчанию';

export const MultiSelectWithSearch = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <MultiSelect {...args} value={value} onChange={handleChange}>
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    </div>
  );
};

MultiSelectWithSearch.args = {
  label: 'MultiSelect с поиском',
  searchable: true
};
MultiSelectWithSearch.storyName = 'MultiSelect с поиском';

export const MultiSelectDisabled = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <MultiSelect {...args} value={value} onChange={handleChange}>
        {options.map(({ value, label }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    </div>
  );
};

MultiSelectDisabled.args = {
  label: 'Disabled',
  disabled: true
};
MultiSelectDisabled.storyName = 'Заблокированный MultiSelect';

export const MultiSelectSelectionCallback = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['aluminum']);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
    action('onSelectionChange')(newValue);
  };

  return (
    <div style={{ padding: '50px' }}>
      <MultiSelect {...args} value={value} onChange={handleChange}>
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    </div>
  );
};

MultiSelectSelectionCallback.args = {
  label: 'Обработчик при выборе'
};
MultiSelectSelectionCallback.storyName = 'MultiSelect с коллбэком при выборе';

export const MultiSelectWithTags = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['steel', 'aluminum', 'nickel', 'zinc']);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <MultiSelect {...args} value={value} onChange={handleChange}>
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </MultiSelect>
    </div>
  );
};

MultiSelectWithTags.args = {
  label: 'MultiSelect с тегами'
};
MultiSelectWithTags.storyName = 'MultiSelect с тегами';
