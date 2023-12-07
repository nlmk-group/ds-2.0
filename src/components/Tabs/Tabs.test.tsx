import React from 'react';

import { Tab, Tabs } from '@components/index';
import { render } from '@testing-library/react';

describe('src/components/Tabs', () => {
  const { container } = render(
    <Tabs>
      <Tab label="Hello World!" />
    </Tabs>
  );
  const tabsComponent = container.getElementsByTagName('div')[0];

  // Check render tabs at DOM
  test('It should render an Tabs', () => {
    expect(tabsComponent).toBeInTheDocument();
  });
});
