import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { SidebarExm } from './components/Sidebar/example';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block">
      <SidebarExm />
    </div>
  </StrictMode>
);
