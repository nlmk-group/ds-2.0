import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Stories from './components/_storybook/Stories';

import {
  Accordion,
  Alert,
  ThemeSwitcher
} from './components';

const container = document.getElementById('root');
const root = createRoot(container!);

const items = [
  {id: '1', title: 'title 1', content: 'content 1'},
  {id: '2', title: 'title 2', content: 'content 2'},
  {id: '3', title: 'title 3', content: 'content 3'},
]

const App = () => {
  return <Stories />
};

root.render(
  <StrictMode>
    <div className="development-block">      
      <App />
      <br />
      <ThemeSwitcher/>
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
