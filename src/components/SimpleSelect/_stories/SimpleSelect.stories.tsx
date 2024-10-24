import React, { useState } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { Box, IconSelectionContains24, OptionItem, SimpleSelect, Typography } from '@components/index';
import { action } from '@storybook/addon-actions';
import { Meta } from '@storybook/react';

import styles from './SimpleSelect.module.scss';

import { ISelectProps } from '../types';
import { argsTypes } from './argsTypes';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{<Story/>}</div>;

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
  title: 'Components/SimpleSelect/Stories',
  component: SimpleSelect,
  argTypes: argsTypes,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const SelectDefault = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};

SelectDefault.args = {
  label: 'Select по умолчанию'
};
SelectDefault.storyName = 'Select по умолчанию';

export const SelectWithSearch = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};

SelectWithSearch.args = {
  label: 'Select с поиском',
  searchable: true
};
SelectWithSearch.storyName = 'Select с поиском';

export const SelectDisabled = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};

SelectDisabled.args = {
  label: 'Disabled',
  disabled: true
};
SelectDisabled.storyName = 'Заблокированный Select';

export const SelectWithSelectionCallback = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || 'apple');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
          action('onSelectionChange')(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectWithSelectionCallback.args = {
  label: 'Обработчик при выборе'
};
SelectWithSelectionCallback.storyName = 'Select с коллбэком при выборе';

export const SelectCompact = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectCompact.args = {
  label: 'Размер s',
  size: sizesMappingInput.s
};
SelectCompact.storyName = 'Select компактный';

export const SelectScrollingItems = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectScrollingItems.args = {
  label: 'Скролл',
  scrollingItems: 2
};
SelectScrollingItems.storyName = 'Select с настройкой скролла';

export const SelectSuccess = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectSuccess.args = {
  label: 'Цвет success',
  color: customInputColors.success
};
SelectSuccess.storyName = 'Select в состоянии success';

export const SelectWarning = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectWarning.args = {
  label: 'Цвет warning',
  color: customInputColors.warning
};
SelectWarning.storyName = 'Select в состоянии warning';

export const SelectError = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect>
    </div>
  );
};
SelectError.args = {
  label: 'Цвет error',
  color: customInputColors.error
};
SelectError.storyName = 'Select в состоянии error';

export const SelectEmpty = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <div style={{ padding: '50px' }}>
      <SimpleSelect
        {...args}
        value={value}
        onChange={newValue => {
          setValue(newValue);
          args.onChange && args.onChange(newValue);
        }}
      >
        {/* No options */}
      </SimpleSelect>
    </div>
  );
};
SelectEmpty.args = {
  label: 'Пустой select'
};
SelectEmpty.storyName = 'Select пустой';

export const SelectWithCustomOptions = (args: ISelectProps): JSX.Element => {
  const [value, setValue] = useState(args.value || '');
  return (
    <SimpleSelect
      {...args}
      value={value}
      onChange={newValue => {
        setValue(newValue);
        args.onChange && args.onChange(newValue);
      }}
    >
      {options.map(({ value, label, disabled }) => (
        <OptionItem key={value} value={value} label={label} disabled={disabled} className={styles.customOption}>
          <Box alignItems="center" justifyContent="space-between" width="100%">
            <IconSelectionContains24 />
            <Box flexDirection="column" alignItems="center" gap="4px">
              <Typography variant="Body1-Medium">{label}</Typography>
              <Typography variant="Caption" color="success">
                Дополнительное описание {label}
              </Typography>
            </Box>
            <IconSelectionContains24 />
          </Box>
        </OptionItem>
      ))}
    </SimpleSelect>
  );
};
SelectWithCustomOptions.args = {
  label: 'Select со стилизованными OptionItems'
};
SelectWithCustomOptions.storyName = 'Select со стилизованными OptionItems';
