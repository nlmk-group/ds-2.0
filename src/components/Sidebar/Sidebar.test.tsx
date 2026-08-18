import React from 'react';

import { mockMatchMedia } from '@components/declaration/mocks/matchMediaMock';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';

import Sidebar from './index';

describe('src/components/Sidebar', () => {
  test('Проверка рендера компонента в DOM дереве', () => {
    const { container } = render(
      <Sidebar onOpenUser={() => {}} onLogout={() => {}} onLogin={() => {}} currentPath="" />
    );
    const sidebar = container.getElementsByTagName('div')[0];

    expect(sidebar).toBeInTheDocument();
  });

  test('manualExpansion: клик вне меню закрывает только подменю', async () => {
    render(
      <Sidebar currentPath="" defaultMenuOpen manualExpansion>
        <Sidebar.MenuItem path="dashboard" label="Дашборд" position="top" icon="IconKovsh32" />
        <Sidebar.MenuItem path="reports" label="Отчеты" position="top" icon="IconChartDonut32">
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" />
        </Sidebar.MenuItem>
      </Sidebar>
    );

    fireEvent.click(screen.getByTitle('Отчеты'));
    expect(screen.getByText('Ежедневные')).toBeInTheDocument();

    fireEvent.mouseUp(document.body);

    await waitFor(() => {
      expect(screen.queryByText('Ежедневные')).not.toBeInTheDocument();
    });
    expect(screen.getByText('Дашборд')).toBeInTheDocument();
    expect(screen.getByText('Отчеты')).toBeInTheDocument();
  });

  test('manualExpansion: пункт без подменю не сворачивает развернутый сайдбар', () => {
    render(
      <Sidebar currentPath="" defaultMenuOpen manualExpansion>
        <Sidebar.MenuItem path="dashboard" label="Дашборд" position="top" icon="IconKovsh32" />
        <Sidebar.MenuItem path="reports" label="Отчеты" position="top" icon="IconChartDonut32">
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" />
        </Sidebar.MenuItem>
      </Sidebar>
    );

    fireEvent.click(screen.getByTitle('Дашборд'));

    expect(screen.getByText('Дашборд')).toBeInTheDocument();
    expect(screen.getByText('Отчеты')).toBeInTheDocument();
  });

  test('при открытии пункта с подменю подсветка верхнего уровня остается только у него', () => {
    render(
      <Sidebar currentPath="dashboard" defaultMenuOpen manualExpansion>
        <Sidebar.MenuItem path="dashboard" label="Дашборд" position="top" icon="IconKovsh32" />
        <Sidebar.MenuItem path="reports" label="Отчеты" position="top" icon="IconChartDonut32">
          <Sidebar.SubmenuItem path="daily" label="Ежедневные" />
        </Sidebar.MenuItem>
      </Sidebar>
    );

    const dashboardItem = screen.getByTitle('Дашборд').closest('[data-ui-sidebar-menu-item]');
    const reportsItem = screen.getByTitle('Отчеты').closest('[data-ui-sidebar-menu-item]');

    expect(dashboardItem?.className).toContain('menu-active');
    expect(reportsItem?.className).not.toContain('menu-active');

    fireEvent.click(screen.getByTitle('Отчеты'));

    expect(dashboardItem?.className).not.toContain('menu-active');
    expect(reportsItem?.className).toContain('menu-active');
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

  test('при переходе на адаптивную ширину развёрнутое меню не превращается в открытый drawer', async () => {
    const media = mockMatchMedia(false);
    const { container } = render(
      <Sidebar currentPath="/a" defaultMenuOpen>
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    expect(container.querySelector('[data-ui-sidebar-top-section]')).toBeInTheDocument();

    act(() => media.setMatches(true));

    expect(container.querySelector('[data-ui-sidebar-burger]')).toBeInTheDocument();
    await waitFor(() => expect(container.querySelector('[data-ui-sidebar-adaptive-menu]')).not.toBeInTheDocument());
  });

  test('при возврате на десктопную ширину drawer закрывается', () => {
    const media = mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="/a">
        <Sidebar.MenuItem label="Раздел" path="/a" icon="IconStarFilled24" />
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(container.querySelector('[data-ui-sidebar-adaptive-menu]')).toBeInTheDocument();

    act(() => media.setMatches(false));

    expect(container.querySelector('[data-ui-sidebar-adaptive-menu]')).not.toBeInTheDocument();
  });
});
