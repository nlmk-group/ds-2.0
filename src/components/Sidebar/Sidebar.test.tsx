import React from 'react';

import { render } from '@testing-library/react';

import Sidebar from './index';

describe('src/components/Sidebar', () => {
  const { container } = render(
    <Sidebar
      onOpenUser={()=>{}}
      onLogout={()=>{}}
      onLogin={()=>{}}
    />
  );
  const sidebar = container.getElementsByTagName('div')[0];

  test('Проверка рендера компонента в DOM дереве', () => {
    expect(sidebar).toBeInTheDocument();
  });
});