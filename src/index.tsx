import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { DatePicker, OptionItem, SimpleSelect, Typography } from './components';

const container = document.getElementById('root');
const root = createRoot(container!);

const options = [
  { value: 'steel', label: 'High-Strength Low-Alloy Steel' },
  { value: 'aluminum', label: 'Aluminum' },
  { value: 'copper', label: 'Copper', disabled: true },
  { value: 'nickel', label: 'Nickel' },
  { value: 'zinc', label: 'Zinc' },
  { value: 'lead', label: 'Lead' },
  { value: 'tin', label: 'Tin' }
];

const Component = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div style={{ height: '330px' }}>
      <DatePicker
        value={value}
        onChange={onChange}
        withPortal
        portalContainerId="portal-container"
        isOpenOnFocus
      />
      <div id="portal-container">Тут появится CalendarPanel</div>
    </div>
  );
};

root.render(
  <StrictMode>
    <div className="development-block" style={{ height: 200 }}>
      {/* <SimpleSelect value={'steel'}>
        {options.map(({ value, label, disabled }) => (
          <OptionItem key={value} value={value} label={label} disabled={disabled}>
            <Typography variant="Body1-Medium">{label}</Typography>
          </OptionItem>
        ))}
      </SimpleSelect> */}
      <Component />
    </div>
  </StrictMode>
);
