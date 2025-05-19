import React from 'react';

import { EBadgeColors } from '@components/Badge/enums';
import { Tabs } from '@components/index';
import { render } from '@testing-library/react';

import Tab from '.';

describe('src/components/Tab', () => {
  // Check render tab at DOM
  test('It should render an Tab', () => {
    const { container } = render(<Tabs.Tab label="Hello World!" />);
    const tabComponent = container.getElementsByTagName('div')[0];
    expect(tabComponent).toBeInTheDocument();
  });

  // Check render tab with badge at DOM
  test('It should render a Tab with badge inside', () => {
    const badgeContent = '90';

    const { container } = render(
      <Tab label="Hello World!" hasBadge={true} badgeChildren={badgeContent} badgeColor={EBadgeColors.brand} />
    );

    const badgeElement = container.getElementsByClassName('badge')[0];
    expect(badgeElement).toHaveTextContent(badgeContent);
  });

  // Check render active tab
  test('It should render an active Tab', () => {
    const { container } = render(<Tabs.Tab label="Hello World!" active />);
    const tabComponent = container.getElementsByClassName('tab-active')[0];
    expect(tabComponent).toBeInTheDocument();
  });

  // Check render tab with tooltip
  test('It should render an Tab with tooltip', () => {
    const { container } = render(
      <Tabs.Tab label="Hello World!">
        <Tabs.Tooltip render="Сюда вы можете добавить текст подсказу для компонента">
          <Tabs.Icon name="IconInfoOutlined16" containerSize={16} htmlColor="var(--steel-90)" />
        </Tabs.Tooltip>
      </Tabs.Tab>
    );
    const tabComponent = container.getElementsByClassName('tooltip')[0];
    expect(tabComponent).toBeInTheDocument();
  });
});
