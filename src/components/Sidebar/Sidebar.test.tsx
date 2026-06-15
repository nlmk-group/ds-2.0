import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Sidebar from './index';

const mockMatchMedia = (isMobile: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: isMobile,
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

  test('на мобайле в свёрнутом виде рендерит бургер-триггер', () => {
    mockMatchMedia(true);
    const { container } = render(<Sidebar currentPath="" />);
    expect(container.querySelector('[data-ui-sidebar-burger]')).toBeInTheDocument();
    expect(container.querySelector('[data-ui-sidebar-top-section]')).not.toBeInTheDocument();
  });

  test('на мобайле после тапа по бургеру открывается drawer с пунктами', () => {
    mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="/a" systemName="ACME">
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(container.querySelector('[data-ui-sidebar-mobile-menu]')).toBeInTheDocument();
    expect(container.querySelector('[data-ui-sidebar-top-section]')).toBeInTheDocument();
  });

  test('на мобайле тап по пункту с детьми открывает drill-down и возвращает назад', () => {
    mockMatchMedia(true);
    const { container, getByText, queryByText } = render(
      <Sidebar currentPath="/x">
        <Sidebar.MenuItem label="Родитель" path="/p" icon="IconStarFilled24" position="top">
          <Sidebar.SubmenuItem label="Ребёнок" path="/p/child" />
        </Sidebar.MenuItem>
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    fireEvent.click(getByText('Родитель'));
    expect(getByText('Ребёнок')).toBeInTheDocument();
    expect(container.querySelector('[data-ui-sidebar-mobile-back]')).toBeInTheDocument();

    fireEvent.click(container.querySelector('[data-ui-sidebar-mobile-back]')!);
    expect(queryByText('Ребёнок')).not.toBeInTheDocument();
    expect(getByText('Родитель')).toBeInTheDocument();
  });

  test('на мобайле в drill-down доступен интерактив избранного', () => {
    mockMatchMedia(true);
    const { container, getByText } = render(
      <Sidebar currentPath="/x" allowFavorites onChangeFavorites={() => {}}>
        <Sidebar.MenuItem label="Родитель" path="/p" icon="IconStarFilled24" position="top">
          <Sidebar.SubmenuItem label="Ребёнок" path="/p/child" />
        </Sidebar.MenuItem>
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    fireEvent.click(getByText('Родитель'));
    // в drill-down у SubmenuItem есть кнопка-звезда избранного
    expect(container.querySelectorAll('button').length).toBeGreaterThan(1);
    expect(getByText('Ребёнок')).toBeInTheDocument();
  });

  test('на мобайле horizontal схлопывается в вертикальный бургер-drawer', () => {
    mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="/a" orientation="horizontal">
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    expect(container.querySelector('[data-ui-sidebar-burger]')).toBeInTheDocument();
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(container.querySelector('[data-ui-sidebar-mobile-menu]')).toBeInTheDocument();
  });
});
