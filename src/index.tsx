import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';

import { SelectExm } from './components/Select/examples';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block" style={{ height: 200 }}>
      <SelectExm />
    </div>
  </StrictMode>
);
