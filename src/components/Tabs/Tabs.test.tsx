import React from 'react';

import { Tabs } from '@components/index';
import { render } from '@testing-library/react';

import { ETabsIndicatorPosition, ETabsOrientation, ETabsTabPosition } from './enums';

describe('src/components/Tabs', () => {
  test('It should render an Tabs', () => {
    const { container } = render(
      <Tabs>
        <Tabs.Tab label="Hello World!" />
      </Tabs>
    );
    const tabsComponent = container.getElementsByTagName('div')[0];
    expect(tabsComponent).toBeInTheDocument();
  });

  test('It should render vertical Tabs', () => {
    const { container } = render(
      <Tabs orientation={ETabsOrientation.vertical}>
        <Tabs.Tab label="Tab 1" />
        <Tabs.Tab label="Tab 2" />
      </Tabs>
    );
    const tabsContainer = container.getElementsByTagName('div')[0];
    expect(tabsContainer).toBeInTheDocument();
    expect(tabsContainer.className).toContain('vertical');
  });

  test('It should render vertical Tabs with right position', () => {
    const { container } = render(
      <Tabs orientation={ETabsOrientation.vertical} tabPosition={ETabsTabPosition.right}>
        <Tabs.Tab label="Tab 1" />
        <Tabs.Tab label="Tab 2" />
      </Tabs>
    );
    const tabsContainer = container.getElementsByTagName('div')[0];
    expect(tabsContainer.className).toContain('position-right');
  });

  test('It should render vertical Tabs with custom indicator position', () => {
    const { container } = render(
      <Tabs orientation={ETabsOrientation.vertical} indicatorPosition={ETabsIndicatorPosition.bottom}>
        <Tabs.Tab label="Tab 1" active />
      </Tabs>
    );
    const activeTab = container.querySelector('[data-ui-tab]');
    expect(activeTab).toBeInTheDocument();
    expect(activeTab?.className).toContain('indicator--bottom');
  });

  test('It should render vertical Tabs with maxTabWidth', () => {
    const { container } = render(
      <Tabs orientation={ETabsOrientation.vertical} maxTabWidth={300}>
        <Tabs.Tab label="Tab 1" />
      </Tabs>
    );
    const tabsContainer = container.getElementsByTagName('div')[0];
    expect(tabsContainer.style.getPropertyValue('--tabs-max-tab-width')).toBe('300px');
  });

  test('Horizontal tabs should work without orientation prop (backwards compatible)', () => {
    const { container } = render(
      <Tabs scrollable>
        <Tabs.Tab label="Tab 1" />
        <Tabs.Tab label="Tab 2" />
      </Tabs>
    );
    const tabsContainer = container.getElementsByTagName('div')[0];
    expect(tabsContainer.className).not.toContain('vertical');
  });
});
