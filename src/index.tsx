import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { SideBarExample } from './components/Sidebar/examples';

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

root.render(
  <StrictMode>
    <div className="development-block" style={{ height: 200 }}>
      <SideBarExample />
    </div>
  </StrictMode>
);
