import React, { useEffect, useState } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { Button, IconArticleOutlined24, Select, Typography } from '@components/index';
import { argsTypes } from '@components/Select/_stories/argsTypes';
import { ISelectOption, ISelectProps, TSelected } from '@components/Select/types';
import { Meta } from '@storybook/react';

import style from '../Select.module.scss';
import styles from './Select.module.scss';

import {
  options,
  optionsWithIcons, // optionsWithNesting,
  optionsWithSubLabel,
  optionWithColorfulIcons
} from './mocks';

const withWrapper = (Story: any) => <div className={styles.wrapper}>{Story()}</div>;

export default {
  title: 'Components/Select/Stories',
  component: Select,
  argTypes: argsTypes,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
} as Meta<typeof Select>;

export const SelectDefault = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);
  return (
    <div style={{ padding: '50px' }}>
      <Select options={options} {...otherArgs} selected={selected} onSelectionChange={setSelected} />
    </div>
  );
};
SelectDefault.storyName = 'Select по умолчанию';

export const SelectMultilineOption = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  console.log(otherArgs)
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
SelectMultilineOption.storyName = 'Select с переносом текста опции на следующую строку';
SelectMultilineOption.args = { multilineOption: true }

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

export const SelectWithSearchByEnter = (argTypes: ISelectProps): JSX.Element => {
  const { options: ignoredOptions, ...otherArgs } = argTypes;
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px' }}>
      <Select
        options={options}
        label="Автовыбор по Enter"
        autoSelectSingleOnEnter
        isSearchable
        {...otherArgs}
        selected={selected}
        onSelectionChange={setSelected}
      />
    </div>
  );
};
SelectWithSearchByEnter.storyName = 'Автовыбор по Enter';

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
      <Select options={[]} label="Пустой select" {...otherArgs} selected={selected} onSelectionChange={setSelected} />
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
SelectWithClearSearchOnBlur.storyName = 'Выбор со сбросом значения в поиске при onBlur поля ввода';

export const SelectWithIcons = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px', width: '500px' }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>
  );
};
SelectWithIcons.storyName = 'Select с иконками';
SelectWithIcons.args = {
  options: optionsWithIcons
};

export const SelectInvisible = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);

  return (
    <div style={{ padding: '50px', width: '500px' }}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
    </div>
  );
};
SelectInvisible.storyName = 'Select "незаметный"';
SelectInvisible.args = {
  options: optionsWithIcons,
  stealthy: true
};

export const SelectIconSelected = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);

  return (
    <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} multiple highlightSelected selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select
        {...argTypes}
        multiple
        highlightSelected
        withoutCheckbox
        selected={selectedThree}
        onSelectionChange={setSelectedThree}
      />
    </div>
  );
};
SelectIconSelected.storyName = 'Select c опцией выбора галкой';
SelectIconSelected.args = {
  options: optionsWithIcons
};

export const SelectBadgeAmount = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  const [selectedFourth, setSelectedFourth] = useState<TSelected>([]);
  const [selectedFifth, setSelectedFifth] = useState<TSelected>([]);
  const [selectedSixth, setSelectedSixth] = useState<TSelected>([]);
  return (
    <div className={styles['item-column-center-wrapper']}>
      <Select {...argTypes} size={sizesMappingInput.m} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} size={sizesMappingInput.s} selected={selectedTwo} onSelectionChange={setSelectedTwo} />
      <Select
        {...argTypes}
        size={sizesMappingInput.xs}
        highlightSelected
        withoutCheckbox
        selected={selectedThree}
        onSelectionChange={setSelectedThree}
      />
      <Select
        {...argTypes}
        size={sizesMappingInput.m}
        stealthy
        selected={selectedFourth}
        onSelectionChange={setSelectedFourth}
      />
      <Select
        {...argTypes}
        size={sizesMappingInput.s}
        stealthy
        selected={selectedFifth}
        onSelectionChange={setSelectedFifth}
      />
      <Select
        {...argTypes}
        size={sizesMappingInput.xs}
        highlightSelected
        withoutCheckbox
        stealthy
        selected={selectedSixth}
        onSelectionChange={setSelectedSixth}
      />
    </div>
  );
};
SelectBadgeAmount.storyName = 'Select c байджем кол-ва выбранных опций';
SelectBadgeAmount.args = {
  options: optionsWithIcons,
  multiple: true,
  badgeAmount: 7
};

export const SelectWithDescription = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedTwo, setSelectedTwo] = useState<TSelected>([]);
  const [selectedThree, setSelectedThree] = useState<TSelected>([]);
  return (
    <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} multiple highlightSelected selected={selected} onSelectionChange={setSelected} />
      <Select
        {...argTypes}
        multiple
        withoutCheckbox
        highlightSelected
        selected={selectedTwo}
        onSelectionChange={setSelectedTwo}
      />
      <Select {...argTypes} stealthy highlightSelected selected={selectedThree} onSelectionChange={setSelectedThree} />
    </div>
  );
};
SelectWithDescription.storyName = 'Select опции с описанием';
SelectWithDescription.args = {
  options: optionsWithSubLabel
};

export const SelectTable = (argTypes: ISelectProps): JSX.Element => {
  const [typeSelect, setTypeSelect] = useState<string | string[]>(optionsWithIcons[8].value);
  const [selectedOption, setSelectedOption] = useState<string | string[]>('');

  useEffect(() => {
    setSelectedOption('');
  }, [typeSelect]);

  return (
    <div className={styles['table-cell']}>
      <Select
        {...argTypes}
        className={style['show-only-icon']}
        highlightSelected
        stealthy
        listMinWidth={300}
        options={optionsWithIcons}
        selected={typeSelect}
        onSelectionChange={setTypeSelect}
        badgeAmount={typeSelect === 'Multiple Choice' && selectedOption.length > 0 ? selectedOption.length : undefined}
        activeSelectedValue={selectedOption.length > 0}
      />
      <Select
        {...argTypes}
        multiple={typeSelect === 'Multiple Choice'}
        withoutCheckbox
        highlightSelected
        stealthy
        listMinWidth={300}
        options={options}
        selected={selectedOption}
        onSelectionChange={setSelectedOption}
        activeSelectedValue={selectedOption.length > 0}
      />
    </div>
  );
};
SelectTable.storyName = 'Select Табличный';
SelectTable.args = {
  size: 's'
};

export const SelectWithColorfulIcons = (argTypes: ISelectProps): JSX.Element => {
  const [selected, setSelected] = useState<TSelected>([]);
  const [selectedStealthy, setSelectedStealthy] = useState<TSelected>([]);
  return (
    <div className={styles['item-column-wrapper']}>
      <Select {...argTypes} selected={selected} onSelectionChange={setSelected} />
      <Select {...argTypes} stealthy selected={selectedStealthy} onSelectionChange={setSelectedStealthy} />
    </div>
  );
};
SelectWithColorfulIcons.storyName = 'Select c цветными иконками';
SelectWithColorfulIcons.args = {
  options: optionWithColorfulIcons
};

export const NativeMenu = (argTypes: ISelectProps): JSX.Element => {
  const [format, setFormat] = useState('');
  const optionsFormats: ISelectOption[] = [
    {
      label: 'В формате .xls',
      value: 'xls'
    },
    {
      label: 'В формате .pdf',
      value: 'pdf'
    }
  ];

  const handleChange = (f: TSelected) => {
    setFormat(f.toString());
  };

  return (
    <div className={styles['item-column-wrapper']}>
      <Select
        {...argTypes}
        options={optionsFormats}
        selected={[]}
        onSelectionChange={handleChange}
        className={style['child-wrapper']}
      >
        <Button variant="secondary" startIcon={<IconArticleOutlined24 />}>
          Сформировать отчет
        </Button>
      </Select>
      {format && <Typography color='var(--steel-90)'>Вы выбрали файл в формате .{format}.</Typography>}
    </div>
  );
};
NativeMenu.storyName = 'Нативное меню';
