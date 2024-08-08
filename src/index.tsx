import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

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
  Typography
} from './components';
import Dropdown from './components/Dropdown';
import MenuItem from './components/Dropdown/subcomponents/DropdownMenuItem';

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
          <Stepper key={i} state={step.state} index={i} showStep={i !== mockSteps.length - 1} stepName={step.stepName} />
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

root.render(
  <StrictMode>
    <div className="development-block">
      <h3>Stepper</h3>
      {/* <InputRender /> */}
      <StepperRender />
      {/* <h3>Icon with badge</h3>
      <Icon color="primary" containerSize={16} name="IconStarOutlined16" badge={<Badge size="xs" color='error'>1</Badge>} />
      <Icon color="primary" containerSize={24} name="IconPlaylistMenuSettingOutlined24" badge={<Badge size="s" color='error'>1</Badge>} />
      <Icon color="primary" containerSize={32} name="IconStarOutlined32" badge={<Badge size="s" color='error'>1</Badge>} />

      <Icon color="primary" containerSize={16} name="IconTuneControlOutlined24" badge={<Badge size="xs" color='success'>1</Badge>} />
      <Icon color="primary" containerSize={24} name="IconTuneControlOutlined24" badge={<Badge size="s" color='success'>1</Badge>} />
      <Icon color="primary" containerSize={32} name="IconTuneControlOutlined32" badge={<Badge size="m" color='success'>1</Badge>} />

      <Icon color="primary" containerSize={16} name="IconTuneControlOutlined24" badge={<Badge size="xs" color="grey">1</Badge>} />
      <Icon color="primary" containerSize={24} name="IconStarOutlined24" badge={<Badge size="s" color="grey">1</Badge>} />
      <Icon color="primary" containerSize={32} name="IconStarOutlined32" badge={<Badge size="s" color="grey">1</Badge>} />


      <h3>XS</h3>
      <Box>
        <Badge size="xs">1</Badge>
      </Box>
      <br />
      <Box width={12}>
      <Badge size="xs" variant="outline">
        1
      </Badge>
      </Box>
      <br />
      <Box width={12}>
        <Badge size="xs" variant="outline" color="error">1</Badge>
      </Box>
      <Badge size="xs" variant="outline" color="error">
        1
      </Badge>
      <br />
      <Badge size="xs" variant="outline" color="success">
        1
      </Badge>
      <hr />
      <h3>S</h3>
      <Badge size="s">1</Badge>
      <br />
      <Badge size="s" variant="outline">
        1
      </Badge>
      <hr />
      <h3>M</h3>
      <Badge size="m">1</Badge>
      <br />
      <Badge size="m" variant="outline">
        1
      </Badge>
      <hr />
      <h3>L</h3>
      <Badge size="l" className='large'>1</Badge>
      <br />
      <Badge size="l" variant="outline" className='large'>
        1
      </Badge> */}
      {/* <App />
      <br />
      <ThemeSwitcher /> */}
      {/* <SomeTabs /> */}
      {/* <Select options={options} label="Одиночный выбор" multiple={false} /> */}
      {/* <ThemeSwitcher />
      <Button variant="primary">Great day!</Button>
      <DatePicker /> */}
    </div>
  </StrictMode>
);


// Only for development preview options
if (import.meta.hot) {
  import.meta.hot.accept();
}
