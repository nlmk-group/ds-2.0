import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Dropdown from './components/Dropdown';
import MenuItem from './components/Dropdown/subcomponents/DropdownMenuItem';

import {
  Box,
  Button,
  DatePicker,
  Divider,
  DragAndDrop,
  Icon,
  Input,
  Select,
  Stepper,
  Switch,
  Tabs,
  ThemeSwitcher,
  ToggleButtonGroup,
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
root.render(
  <StrictMode>
    <div className="development-block">
      <TestDatePicker />
    </div>
  </StrictMode>
);

// Only for development preview options
if (import.meta.hot) {
  import.meta.hot.accept();
}
