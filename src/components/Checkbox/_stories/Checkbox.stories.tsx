import React, { ChangeEvent, useState } from 'react';

import Checkbox from '@components/Checkbox';
import { Box, Typography } from '@components/index';
import { Meta } from '@storybook/react';
import { useArgs } from 'storybook/internal/preview-api';

import styles from './Checkbox.module.scss';

import { ECheckboxColors } from '../enums';
import { ICheckboxProps } from '../types';
import { argsTypes } from './argsTypes';

const withThemeProvider = (Story: any) => <div className={styles.wrapper}>{<Story />}</div>;

export default {
  title: 'Components/Checkbox/Stories',
  component: Checkbox,
  argTypes: argsTypes,
  decorators: [withThemeProvider]
} as Meta<typeof Checkbox>;

export const CheckboxDefault = (argTypes: ICheckboxProps): JSX.Element => {
  const [args, updateArgs] = useArgs();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateArgs({ checked: event.target.checked });
  };

  return <Checkbox {...argTypes} checked={args.checked} onChange={handleChange} />;
};
CheckboxDefault.storyName = 'Checkbox по умолчанию';

export const CheckboxColors = (): JSX.Element => {
  const [selectedValues, setSelectedValues] = useState<Record<string, boolean>>({});

  const handleChange = (color: string) => (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValues(prev => ({
      ...prev,
      [color]: event.target.checked
    }));
  };

  return (
    <Box flexDirection="column" gap="24px">
      {Object.values(ECheckboxColors).map(color => (
        <Box key={color} flexDirection="column" gap="8px">
          <Typography variant="Body1-Bold" color="var(--steel-90)">
            {color}
          </Typography>
          <Box flexDirection="column" gap="8px">
            <Checkbox
              color={color}
              label="Производство стальной продукции"
              checked={selectedValues[`${color}-1`]}
              onChange={handleChange(`${color}-1`)}
            />
            <Checkbox
              color={color}
              label="Добыча сырьевых материалов"
              checked={selectedValues[`${color}-2`]}
              onChange={handleChange(`${color}-2`)}
            />
            <Checkbox
              color={color}
              label="Оптимизация производства (disabled)"
              checked={selectedValues[`${color}-3`]}
              onChange={handleChange(`${color}-3`)}
              disabled
            />
            <Checkbox
              color={color}
              label="Внедрение инновационных технологий (multiple)"
              checked={selectedValues[`${color}-4`]}
              onChange={handleChange(`${color}-4`)}
              multiple
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

CheckboxColors.storyName = 'Варианты цветов Checkbox';
CheckboxColors.parameters = {
  controls: { disable: true }
};
