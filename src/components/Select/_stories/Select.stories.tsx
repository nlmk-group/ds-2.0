import React, { useState } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { IconAddPlusOutlined16, Select } from '@components/index';
import { argsTypes } from '@components/Select/_stories/argsTypes';
import { ISelectOption, ISelectProps, TSelected } from '@components/Select/types';
import { Meta } from '@storybook/react';

import styles from './Select.module.scss';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Select/Stories',
  component: Select,
  argTypes: argsTypes,
  decorators: [withWrapper]
} as Meta<typeof Select>;

const options: ISelectOption[] = [
  {
    value: 'lorem',
    label:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dolorum earum eligendi ' +
      'in istenecessitatibus odit optio quidem tenetur! Assumenda deleniti fugiat ' +
      'itaque minus omnis quidem temporibus.Necessitatibus rerum, ullam!'
  },
  { value: 'banana', label: 'Banana', icon: <IconAddPlusOutlined16 /> },
  { value: 'cherry', label: 'Cherry', disabled: true },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig', icon: <IconAddPlusOutlined16 /> },
  { value: 'grape', label: 'Grape' }
];

export const SelectDefault = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectDefault.storyName = 'Select по умолчанию';

export const SelectSingle = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Одиночный выбор"
        multiple={false}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectSingle.storyName = 'Одиночный выбор';

export const SelectWithSearch = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Выбор с поиском"
        isSearchable
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectWithSearch.storyName = 'Выбор с поиском';

export const SelectMultiple = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Множественный выбор"
        multiple
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectMultiple.storyName = 'Select с множественным выбором';

export const SelectDisabled = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Disabled"
        disabled
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectDisabled.storyName = 'Выбор в состоянии disabled';

export const SelectWithSelectionCallback = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [option, setOption] = useState<TSelected>(['apple']);


  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Обработчик при выборе"
        {...otherArgs}
        selected={option}
        onSelectionChange={setOption}
      />
    </div>
  );
};
SelectWithSelectionCallback.storyName = 'Выбор с обработчиком при выборе';

export const SelectCompact = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Размер s"
        size={sizesMappingInput.s}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectCompact.storyName = 'Компактный Select';

export const SelectExtraCompact = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Размер xs"
        size={sizesMappingInput.xs}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectExtraCompact.storyName = 'Экстра компактный Select';

export const SelectScrollingItems = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Скролл"
        scrollingItems={2}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectScrollingItems.storyName = 'Select с установленным скроллом';

export const SelectSuccess = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Цвет success"
        color={customInputColors.success}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectSuccess.storyName = 'Цвет success';

export const SelectWarning = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Цвет warning"
        color={customInputColors.warning}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectWarning.storyName = 'Цвет warning';

export const SelectError = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Цвет error"
        color={customInputColors.error}
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectError.storyName = 'Цвет error';

export const SelectEmpty = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={[]}
        label="Пустой select"
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectEmpty.storyName = 'Пустой Select';

export const SelectWithClearSearchOnBlur = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Выбор с поиском"
        isClearSearchOnBlur
        isSearchable
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectWithClearSearchOnBlur.storyName = 'Выбор со сбросои хначения поиске при onBlur поля ввода';
