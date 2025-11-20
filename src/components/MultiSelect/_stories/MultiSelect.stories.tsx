import React, { useState } from 'react';

import { customInputColors, sizesMappingInput } from '@components/declaration';
import { Box, Checkbox, IconSelectionContains24, MultiSelect, OptionItem, Typography } from '@components/index';
import { action } from 'storybook/actions';

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

const OptionWithCheckbox: React.FC<{
  option: typeof options[0];
  isSelected?: boolean;
}> = ({ option, isSelected = false }) => (
  <Box alignItems="center" gap="8px">
    <Checkbox checked={isSelected} disabled={option.disabled} onChange={() => {}} style={{ pointerEvents: 'none' }} />
    <Typography variant="Body1-Medium">{option.label}</Typography>
  </Box>
);

export default {
  title: 'Components/MultiSelect/Stories',
  component: MultiSelect,
  argTypes: argsTypes,
  decorators: [withWrapper],
  parameters: { actions: { argTypesRegex: '^on.*' } }
};

export const MultiSelectDefault = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue([]);
    if (args.onReset) {
      args.onReset();
    }
  };

  return (
    <MultiSelect
      {...args}
      value={value}
      onChange={handleChange}
      onReset={args.reset ? handleReset : undefined}
      reset={args.reset}
    >
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
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
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWithSearch.args = {
  label: 'MultiSelect с поиском',
  searchable: true
};
MultiSelectWithSearch.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
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
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectDisabled.args = {
  label: 'Disabled',
  disabled: true
};
MultiSelectDisabled.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
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
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectSelectionCallback.args = {
  label: 'Обработчик при выборе'
};
MultiSelectSelectionCallback.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
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
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWithTags.args = {
  label: 'MultiSelect с тегами'
};
MultiSelectWithTags.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWithTags.storyName = 'MultiSelect с тегами';

export const MultiSelectCompact = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectCompact.args = {
  label: 'Размер s',
  size: sizesMappingInput.s
};
MultiSelectCompact.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectCompact.storyName = 'MultiSelect компактный';

export const MultiSelectScrollingItems = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectScrollingItems.args = {
  label: 'Скролл',
  scrollingItems: 2
};
MultiSelectScrollingItems.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectScrollingItems.storyName = 'MultiSelect с настройкой скролла';

export const MultiSelectSuccess = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectSuccess.args = {
  label: 'Цвет success',
  color: customInputColors.success
};
MultiSelectSuccess.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectSuccess.storyName = 'MultiSelect в состоянии success';

export const MultiSelectWarning = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWarning.args = {
  label: 'Цвет warning',
  color: customInputColors.warning
};
MultiSelectWarning.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWarning.storyName = 'MultiSelect в состоянии warning';

export const MultiSelectError = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectError.args = {
  label: 'Цвет error',
  color: customInputColors.error
};
MultiSelectError.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectError.storyName = 'MultiSelect в состоянии error';

export const MultiSelectEmpty = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {/* No options */}
    </MultiSelect>
  );
};

MultiSelectEmpty.args = {
  label: 'Пустой MultiSelect'
};
MultiSelectEmpty.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectEmpty.storyName = 'MultiSelect пустой';

export const MultiSelectWithCustomOptions = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
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
    </MultiSelect>
  );
};

MultiSelectWithCustomOptions.args = {
  label: 'MultiSelect со стилизованными OptionItems'
};
MultiSelectWithCustomOptions.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWithCustomOptions.storyName = 'MultiSelect со стилизованными OptionItems';

export const MultiSelectWithSelectAll = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWithSelectAll.args = {
  label: 'MultiSelect с кнопкой "Выбрать все"',
  showSelectAll: true
};
MultiSelectWithSelectAll.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWithSelectAll.storyName = 'MultiSelect с выбором всех';

export const MultiSelectWithClearSearch = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || []);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange}>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWithClearSearch.args = {
  label: 'MultiSelect с очисткой поиска при выборе',
  searchable: true,
  clearSearchOnSelect: true
};
MultiSelectWithClearSearch.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWithClearSearch.storyName = 'MultiSelect с очисткой поиска';

export const MultiSelectWithReset = (args: IMultiSelectProps): JSX.Element => {
  const [value, setValue] = useState<Array<string | number>>(args.value || ['steel', 'aluminum']);

  const handleChange = (newValue: Array<string | number>) => {
    setValue(newValue);
    if (args.onChange) {
      args.onChange(newValue);
    }
  };

  const handleReset = () => {
    setValue([]);
    if (args.onReset) {
      args.onReset();
    }
  };

  return (
    <MultiSelect {...args} value={value} onChange={handleChange} onReset={handleReset} reset>
      {options.map(option => (
        <OptionItem key={option.value} value={option.value} label={option.label} disabled={option.disabled}>
          <OptionWithCheckbox option={option} />
        </OptionItem>
      ))}
    </MultiSelect>
  );
};

MultiSelectWithReset.args = {
  label: 'MultiSelect с кнопкой сброса'
};
MultiSelectWithReset.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};
MultiSelectWithReset.storyName = 'MultiSelect с кнопкой сброса';
