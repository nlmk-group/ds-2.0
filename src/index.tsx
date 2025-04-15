import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TreeListExample } from './components/TreeList/example'

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block">
      <TreeListExample />
    </div>
  </StrictMode>
);
