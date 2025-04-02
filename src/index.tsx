import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { VideoWindowExample } from './components/VideoWindow/VideoWindowExample';


const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <div className="development-block">
      <VideoWindowExample />
    </div>
  </StrictMode>
);
