import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Sidebar from './index';

const mockMatchMedia = (isAdaptive: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: isAdaptive,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  });
};

describe('src/components/Sidebar', () => {
  const { container } = render(<Sidebar onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} currentPath="" />);
  const sidebar = container.getElementsByTagName('div')[0];

  test('Проверка рендера компонента в DOM дереве', () => {
    expect(sidebar).toBeInTheDocument();
  });
});

describe('Sidebar адаптив', () => {
  afterEach(() => {
    mockMatchMedia(false);
  });

  test('в адаптивном режиме в свёрнутом виде рендерит бургер-триггер', () => {
    mockMatchMedia(true);
    const { container } = render(<Sidebar currentPath="" />);
    expect(container.querySelector('[data-ui-sidebar-burger]')).toBeInTheDocument();
    expect(container.querySelector('[data-ui-sidebar-top-section]')).not.toBeInTheDocument();
  });

  test('в адаптивном режиме после тапа по бургеру открывается drawer с пунктами', () => {
    mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="/a" systemName="ACME">
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(container.querySelector('[data-ui-sidebar-adaptive-menu]')).toBeInTheDocument();
    expect(container.querySelector('[data-ui-sidebar-top-section]')).toBeInTheDocument();
  });

  test('в адаптивном режиме тап по пункту с детьми открывает fly-out подменю (как на десктопе)', () => {
    mockMatchMedia(true);
    const { container, getByText } = render(
      <Sidebar currentPath="/x">
        <Sidebar.MenuItem label="Родитель" path="/p" icon="IconStarFilled24" position="top">
          <Sidebar.SubmenuItem label="Ребёнок" path="/p/child" />
        </Sidebar.MenuItem>
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    fireEvent.click(getByText('Родитель'));
    expect(container.querySelector('[data-ui-sidebar-submenu]')).toBeInTheDocument();
    expect(getByText('Ребёнок')).toBeInTheDocument();
  });

  test('в адаптивном режиме horizontal схлопывается в вертикальный бургер-drawer', () => {
    mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="/a" orientation="horizontal">
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    expect(container.querySelector('[data-ui-sidebar-burger]')).toBeInTheDocument();
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(container.querySelector('[data-ui-sidebar-adaptive-menu]')).toBeInTheDocument();
  });
});
