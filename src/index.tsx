import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TableWithCustomCellExample } from './components/Table/examples';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block">
      <TableWithCustomCellExample />
    </div>
  </StrictMode>
);
