import React, { StrictMode, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { previousDay } from 'date-fns';

import { IAutocompleteValue } from './components/Autocomplete/types';
import Dropdown from './components/Dropdown';
import MenuItem from './components/Dropdown/subcomponents/DropdownMenuItem';

import {
  Autocomplete,
  Box,
  Button,
  DatePicker,
  Divider,
  DragAndDrop,
  Icon,
  Input,
  Link,
  Select,
  Spinner,
  Stepper,
  Switch,
  Tabs,
  ThemeSwitcher,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useThemeSwitcher
} from './components';

// const { Button } = ToggleButtonGroup;

const container = document.getElementById('root');
const root = createRoot(container!);

const StepperRender = () => {
  const mockSteps: Array<{ state: 'filled' | 'focused' | 'inProgress' | 'notFilled' | 'disabled'; stepName: string }> =
    [
      { state: 'filled', stepName: 'Тип заявки' },
      { state: 'focused', stepName: 'focused' },
      { state: 'inProgress', stepName: 'inProgress' },
      { state: 'notFilled', stepName: 'notFilled' },
      { state: 'disabled', stepName: 'disabled' }
    ];

  return (
    <>
      <Box flexDirection="row" width="100%" gap={16}>
        {mockSteps.map((step, i) => (
          <Stepper
            key={i}
            state={step.state}
            index={i}
            showStep={i !== mockSteps.length - 1}
            stepName={step.stepName}
          />
        ))}
      </Box>
    </>
  );
};

const positions = [
  { value: 'Label', label: 'High-Strength Low-Alloy Steel' },
  { value: 'Label', label: 'Aluminum' },
  { value: 'Label', label: 'Copper', disabled: true },
  { value: 'Label', label: 'Nickel' },
  { value: 'Label', label: 'Zinc' },
  { value: 'Label', label: 'Lead' },
  { value: 'Label', label: 'Tin' }
];

const Theme = () => {
  const [count, setCount] = useState(0);
  const { theme, toggleTheme } = useThemeSwitcher();
  const isDark = theme === 'dark';

  return (
    <div>
      <Switch checked={isDark} onChange={toggleTheme} label={`${isDark ? 'Темная' : 'Светлая'} тема`} />
      <br />
      <Divider dashed>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Count - {count}
        </Button>
      </Divider>
    </div>
  );
};
export const TestDatePicker = (): JSX.Element => {
  const MIN_LEAD_TIME = 60_000 * 60 * 6;
  const MAX_LEAD_TIME = 60_000 * 60 * 24;

  const enabledFromDate = new Date(Date.now() + MIN_LEAD_TIME);
  const enabledToDate = new Date(Date.now() + MAX_LEAD_TIME);

  const [currentDate, setCurrentDate] = useState(enabledFromDate);
  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        type="time"
        label="Целевое время доставки"
        value={currentDate}
        enabledFrom={enabledFromDate}
        enabledTo={enabledToDate}
        enabledMinuteFrom={() => enabledFromDate.getMinutes() - 10}
        enabledMinuteTo={() => enabledToDate.getMinutes()}
        enabledHourFrom={() => enabledFromDate.getHours()}
        enabledHourTo={() => enabledToDate.getHours()}
        onChange={date => setCurrentDate(date)}
      />
    </div>
  );
};

export const TestAutocomplete = (): JSX.Element => {
  const [selected, setSelected] = useState<string | null>(null);

  const CustomAutocompleteItem = (item: IAutocompleteValue) => {
    return (
      <Box key={item.id} gap={8} alignItems="center" pl={8} pt={8}>
        <Icon name="IconPlaylistAddMenuOutlined24" />
        <Typography variant="Subheading3">Option {item.label}</Typography>
      </Box>
    );
  };

  const options = useMemo<IAutocompleteValue[]>(
    () => [
      ...Array.from({ length: 8 }).map((_, index) => ({
        id: index,
        label: `Заголовок_${index}`,
        value: `value_${index}`
      })),
      { id: 8, label: 'Disabled заголовок', value: 'value_8', disabled: true }
    ],
    []
  );

  return (
    <Box gap={8} flexDirection="column">
      <Typography>Выбранное значение: {selected}</Typography>
      <Autocomplete
        selected={options[0]}
        items={options}
        renderLabel={item => <CustomAutocompleteItem {...item} />}
        nameGetter={({ label }) => label}
        onChange={item => setSelected(item?.value ?? null)}
        label="Селект с поиском"
        showTooltip={true}
        size="s"
        onFocus={e => console.log(`onFocus event, input value: ${e.target.value}`)}
        onBlur={e => console.log(`onBlur event, input value: ${e.target.value}`)}
        onInputEnd={value => console.log(`show value with delay 500ms: ${value}`)}
      />
    </Box>
  );
};

const SpinnerTest = (): JSX.Element => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Spinner></Spinner>
    </div>
  );
};

root.render(
  <StrictMode>
    <div className="development-block">
      {/* <SpinnerTest /> */}
      <TestAutocomplete />
    </div>
  </StrictMode>
);

// Only for development preview options
if (import.meta.hot) {
  import.meta.hot.accept();
}
