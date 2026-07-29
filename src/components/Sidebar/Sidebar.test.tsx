import React from 'react';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

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
