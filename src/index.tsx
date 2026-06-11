import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TooltipExm } from './components/Tooltip/examples';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block">
      <TooltipExm />
    </div>
  </StrictMode>
);
