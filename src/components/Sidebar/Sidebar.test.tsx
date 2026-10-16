import React from 'react';

import { mockMatchMedia } from '@components/declaration/mocks/matchMediaMock';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

describe('Sidebar keyboardNavigation', () => {
  test.each(['{Enter}', ' '] as const)(
    'horizontal burger collapse button is reachable by Tab and activates with %s',
    async key => {
      const user = userEvent.setup();
      const { container } = render(
        <>
          <button>Before sidebar</button>
          <Sidebar currentPath="" keyboardNavigation defaultMenuOpen variant="burger" orientation="horizontal">
            <Sidebar.MenuItem label="Item" path="item" position="top" />
          </Sidebar>
        </>
      );
      screen.getByRole('button', { name: 'Before sidebar' }).focus();
      await user.tab();
      const collapse = screen.getByRole('button', { name: 'Свернуть' });
      expect(collapse.tagName).toBe('BUTTON');
      expect(collapse).toHaveFocus();
      expect(collapse).toHaveAttribute('aria-expanded', 'true');
      await user.keyboard(key);
      const expand = container.querySelector('[data-ui-sidebar-burger]');
      expect(expand).toHaveAttribute('aria-expanded', 'false');
      expect(expand).toHaveFocus();
    }
  );

  const originalScrollIntoView = HTMLElement.prototype.scrollIntoView;
  beforeAll(() => {
    HTMLElement.prototype.scrollIntoView = jest.fn();
  });
  afterAll(() => {
    HTMLElement.prototype.scrollIntoView = originalScrollIntoView;
  });
  afterEach(() => mockMatchMedia(false));

  const getItem = (label: string) =>
    screen.getByTitle(label).closest<HTMLElement>('[data-ui-sidebar-menu-item], [data-ui-sidebar-submenu-item]')!;

  test.each([
    ['vertical', false],
    ['horizontal', false],
    ['horizontal', true]
  ] as const)(
    '%s adaptive=%s: favorites switch supports arrows, Tab, Enter and Space',
    async (orientation, adaptive) => {
      mockMatchMedia(adaptive);
      localStorage.removeItem('favorites');
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(
        <Sidebar currentPath="" defaultMenuOpen keyboardNavigation allowFavorites orientation={orientation}>
          <Sidebar.MenuItem label="Parent" path="parent" position="top">
            <Sidebar.SubmenuItem label="Child" path="child" onClick={onClick} />
          </Sidebar.MenuItem>
        </Sidebar>
      );
      getItem('Parent').focus();
      await user.keyboard('{Enter}');
      expect(getItem('Child')).toHaveFocus();
      const previous = 'ArrowUp';
      const next = 'ArrowDown';
      await user.keyboard(`{${previous}}`);
      const favorites = screen.getByRole('switch', { name: 'Избранное' });
      expect(favorites).toHaveFocus();
      expect(favorites).toHaveAttribute('aria-checked', 'false');
      await user.keyboard('{Enter}');
      expect(favorites).toHaveAttribute('aria-checked', 'true');
      expect(favorites).toHaveFocus();
      expect(screen.getByText('Раздел избранного пуст')).toBeInTheDocument();
      await user.keyboard(`{${next}}`);
      expect(favorites).toHaveFocus();
      const close = 'ArrowLeft';
      const open = orientation === 'vertical' || adaptive ? 'ArrowRight' : 'ArrowDown';
      await user.keyboard(`{${close}}`);
      expect(getItem('Parent')).toHaveFocus();
      await user.keyboard(`{${open}}`);
      expect(favorites).toHaveFocus();
      await user.keyboard(' ');
      expect(favorites).toHaveAttribute('aria-checked', 'false');
      await user.keyboard(`{${next}}`);
      expect(getItem('Child')).toHaveFocus();
      await user.keyboard(`{${previous}}`);
      expect(favorites).toHaveFocus();
      await user.tab({ shift: true });
      expect(favorites).not.toHaveFocus();
      await user.tab();
      expect(favorites).toHaveFocus();
      expect(onClick).not.toHaveBeenCalled();
      await user.keyboard('{Escape}');
      expect(screen.getByRole('button', { name: 'Развернуть' })).toHaveFocus();
    }
  );

  test.each([undefined, false])('is opt-in (%s)', keyboardNavigation => {
    const onClick = jest.fn();
    render(
      <Sidebar currentPath="" defaultMenuOpen keyboardNavigation={keyboardNavigation}>
        <Sidebar.MenuItem label="First" path="first" position="top" onClick={onClick} />
        <Sidebar.MenuItem label="Last" path="last" position="top" />
      </Sidebar>
    );
    const first = getItem('First');
    expect(first).not.toHaveAttribute('role', 'button');
    expect(first).not.toHaveAttribute('tabindex', '0');
    fireEvent.keyDown(first, { key: 'Enter' });
    fireEvent.keyDown(first, { key: 'ArrowDown' });
    expect(onClick).not.toHaveBeenCalled();
    expect(getItem('Last')).not.toHaveFocus();
  });

  test.each(['vertical', 'horizontal'] as const)(
    '%s arrows skip disabled items and stop at boundaries',
    orientation => {
      const { container } = render(
        <Sidebar currentPath="" defaultMenuOpen keyboardNavigation orientation={orientation}>
          <Sidebar.MenuItem label="First" path="first" position="top" />
          <Sidebar.MenuItem label="Disabled" path="disabled" position="top" disabled />
          <Sidebar.MenuItem label="Last" path="last" position="bottom" />
        </Sidebar>
      );
      const first = getItem('First');
      const last = getItem('Last');
      const disabled = getItem('Disabled');
      expect(first).toHaveAttribute('role', 'button');
      expect(first).toHaveAttribute('tabindex', '0');
      expect(disabled).toHaveAttribute('aria-disabled', 'true');
      expect(disabled).not.toHaveAttribute('tabindex', '0');
      first.focus();
      const next = orientation === 'vertical' ? 'ArrowDown' : 'ArrowRight';
      const previous = orientation === 'vertical' ? 'ArrowUp' : 'ArrowLeft';
      fireEvent.keyDown(first, { key: previous });
      if (orientation === 'horizontal') {
        const collapse = screen.getByRole('button', { name: 'Свернуть' });
        expect(collapse).toHaveFocus();
        fireEvent.keyDown(collapse, { key: previous });
        expect(collapse).toHaveFocus();
        fireEvent.keyDown(collapse, { key: next });
      }
      expect(first).toHaveFocus();
      expect(fireEvent.keyDown(first, { key: next })).toBe(false);
      expect(last).toHaveFocus();
      fireEvent.keyDown(last, { key: next });
      if (orientation === 'vertical') {
        const collapse = container.querySelector<HTMLElement>('[data-ui-sidebar-collapse-button]')!;
        expect(collapse).toHaveFocus();
        fireEvent.keyDown(collapse, { key: next });
        expect(collapse).toHaveFocus();
        fireEvent.keyDown(collapse, { key: previous });
        expect(last).toHaveFocus();
      } else {
        expect(last).toHaveFocus();
      }
      fireEvent.keyDown(last, { key: previous });
      expect(first).toHaveFocus();
    }
  );

  test.each(['default', 'burger'] as const)(
    '%s horizontal arrows work from the trigger and nested links',
    async variant => {
      const user = userEvent.setup();
      const onClick = jest.fn();
      render(
        <Sidebar currentPath="" keyboardNavigation orientation="horizontal" variant={variant}>
          <Sidebar.MenuItem label="First" path="first" position="top" />
          <Sidebar.MenuItem
            label="Linked parent"
            path="parent"
            position="top"
            content={<a href="#parent">Parent link</a>}
          >
            <Sidebar.SubmenuItem label="Linked child" path="child" content={<a href="#child">Child link</a>} />
            <Sidebar.SubmenuItem label="Disabled child" path="disabled" disabled />
            <Sidebar.SubmenuItem label="Last child" path="last" onClick={onClick} />
          </Sidebar.MenuItem>
        </Sidebar>
      );
      if (variant === 'burger') {
        screen.getByRole('button', { name: 'Развернуть' }).focus();
        await user.keyboard('{Enter}');
      } else {
        screen.getByRole('button', { name: 'Свернуть' }).focus();
      }
      await user.keyboard('{ArrowRight}');
      expect(getItem('First')).toHaveFocus();
      await user.keyboard('{ArrowRight}');
      expect(getItem('Linked parent')).toHaveFocus();
      screen.getByRole('link', { name: 'Parent link' }).focus();
      await user.keyboard('{ArrowLeft}');
      expect(getItem('First')).toHaveFocus();
      screen.getByRole('link', { name: 'Parent link' }).focus();
      await user.keyboard('{ArrowDown}');
      expect(getItem('Linked child')).toHaveFocus();
      expect(screen.getByRole('link', { name: 'Child link' })).toHaveAttribute('tabindex', '-1');
      screen.getByRole('link', { name: 'Child link' }).focus();
      await user.keyboard('{ArrowDown}');
      expect(getItem('Last child')).toHaveFocus();
      await user.keyboard('{ArrowUp}');
      expect(getItem('Linked child')).toHaveFocus();
      expect(onClick).not.toHaveBeenCalled();
    }
  );

  test('vertical linked items have only one Tab stop and restore link tab order when navigation is disabled', async () => {
    const user = userEvent.setup();
    const content = [
      <Sidebar.MenuItem
        key="linked"
        label="Linked"
        path="linked"
        position="top"
        content={<a href="#linked">Link text</a>}
      />,
      <Sidebar.MenuItem key="next" label="Next" path="next" position="top" />
    ];
    const { rerender } = render(
      <Sidebar currentPath="" defaultMenuOpen keyboardNavigation>
        {content}
      </Sidebar>
    );
    const link = screen.getByRole('link', { name: 'Link text' });
    expect(link).toHaveAttribute('tabindex', '-1');
    getItem('Linked').focus();
    await user.tab();
    expect(getItem('Next')).toHaveFocus();
    await user.tab({ shift: true });
    expect(getItem('Linked')).toHaveFocus();
    rerender(
      <Sidebar currentPath="" defaultMenuOpen keyboardNavigation={false}>
        {content}
      </Sidebar>
    );
    expect(link).not.toHaveAttribute('tabindex');
  });

  test('Enter activates a leaf once', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    render(
      <Sidebar currentPath="" defaultMenuOpen manualExpansion keyboardNavigation>
        <Sidebar.MenuItem label="Leaf" path="leaf" position="top" onClick={onClick} />
      </Sidebar>
    );
    getItem('Leaf').focus();
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test.each([
    ['default', false],
    ['burger', false],
    ['default', true]
  ] as const)('vertical %s adaptive=%s: collapse control follows DOM arrow order', (variant, adaptive) => {
    mockMatchMedia(adaptive);
    render(
      <Sidebar currentPath="" defaultMenuOpen keyboardNavigation variant={variant}>
        <Sidebar.MenuItem label="First" path="first" position="top" />
        <Sidebar.MenuItem label="Last" path="last" position="bottom" />
      </Sidebar>
    );
    const collapse = screen.getByRole('button', { name: 'Свернуть' });
    const ordered =
      variant === 'default' && !adaptive
        ? [getItem('First'), getItem('Last'), collapse]
        : [collapse, getItem('First'), getItem('Last')];
    ordered[0].focus();
    fireEvent.keyDown(ordered[0], { key: 'ArrowUp' });
    expect(ordered[0]).toHaveFocus();
    for (let index = 1; index < ordered.length; index += 1) {
      fireEvent.keyDown(ordered[index - 1], { key: 'ArrowDown' });
      expect(ordered[index]).toHaveFocus();
    }
    fireEvent.keyDown(ordered[2], { key: 'ArrowDown' });
    expect(ordered[2]).toHaveFocus();
    for (let index = ordered.length - 1; index > 0; index -= 1) {
      fireEvent.keyDown(ordered[index], { key: 'ArrowUp' });
      expect(ordered[index - 1]).toHaveFocus();
    }
  });

  test.each([
    ['vertical', 'default', false],
    ['vertical', 'burger', false],
    ['horizontal', 'burger', false],
    ['horizontal', 'default', true]
  ] as const)(
    '%s %s adaptive=%s: mouse opening focuses the equivalent close control',
    async (orientation, variant, adaptive) => {
      mockMatchMedia(adaptive);
      const user = userEvent.setup();
      const { container } = render(
        <Sidebar currentPath="current" keyboardNavigation orientation={orientation} variant={variant}>
          <Sidebar.MenuItem label="First" path="first" position="top" />
          <Sidebar.MenuItem label="Current" path="current" position="top" />
        </Sidebar>
      );
      const trigger = container.querySelector<HTMLElement>(
        '[data-ui-sidebar-burger], [data-ui-sidebar-collapse-button]'
      )!;
      await user.click(trigger);
      await waitFor(() => expect(screen.getByRole('button', { name: 'Свернуть' })).toHaveFocus());
      expect(getItem('First')).not.toHaveFocus();
      expect(getItem('Current')).not.toHaveFocus();
    }
  );

  test('adaptive horizontal drawer uses vertical arrows', () => {
    mockMatchMedia(true);
    const { container } = render(
      <Sidebar currentPath="" orientation="horizontal" keyboardNavigation>
        <Sidebar.MenuItem label="First" path="first" position="top" />
        <Sidebar.MenuItem label="Disabled" path="disabled" position="top" disabled />
        <Sidebar.MenuItem label="Last" path="last" position="top" />
      </Sidebar>
    );
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    const first = getItem('First');
    first.focus();
    fireEvent.keyDown(first, { key: 'ArrowDown' });
    expect(getItem('Last')).toHaveFocus();
    fireEvent.keyDown(getItem('Last'), { key: 'ArrowUp' });
    expect(first).toHaveFocus();
  });

  test.each(['vertical', 'horizontal'] as const)(
    '%s Enter focuses the first enabled child of nested submenus',
    async orientation => {
      const onClick = jest.fn();
      render(
        <Sidebar currentPath="" defaultMenuOpen keyboardNavigation orientation={orientation}>
          <Sidebar.MenuItem label="Parent" path="parent" position="top">
            <Sidebar.SubmenuItem label="Disabled child" path="disabled" disabled />
            <Sidebar.SubmenuItem label="Nested" path="nested">
              <Sidebar.SubmenuItem label="Nested disabled" path="nested-disabled" disabled />
              <Sidebar.SubmenuItem label="Leaf" path="leaf" onClick={onClick} />
            </Sidebar.SubmenuItem>
            <Sidebar.SubmenuItem label="Last child" path="last-child" />
          </Sidebar.MenuItem>
        </Sidebar>
      );
      getItem('Parent').focus();
      fireEvent.keyDown(getItem('Parent'), { key: 'Enter' });
      await waitFor(() => expect(getItem('Nested')).toHaveFocus());
      expect(getItem('Disabled child')).toHaveAttribute('aria-disabled', 'true');
      const previous = 'ArrowUp';
      const next = 'ArrowDown';
      fireEvent.keyDown(getItem('Nested'), { key: previous });
      expect(getItem('Nested')).toHaveFocus();
      fireEvent.keyDown(getItem('Nested'), { key: next });
      const nextItem = getItem(orientation === 'vertical' ? 'Last child' : 'Leaf');
      expect(nextItem).toHaveFocus();
      fireEvent.keyDown(nextItem, { key: previous });
      expect(getItem('Nested')).toHaveFocus();
      if (orientation === 'horizontal') {
        fireEvent.keyDown(getItem('Nested'), { key: 'Enter' });
        expect(getItem('Nested')).toHaveAttribute('aria-expanded', 'false');
      }
      fireEvent.keyDown(getItem('Nested'), { key: 'Enter' });
      await waitFor(() => expect(getItem('Leaf')).toHaveFocus());
      fireEvent.keyDown(getItem('Leaf'), { key: 'Enter' });
      expect(onClick).toHaveBeenCalledTimes(1);
    }
  );

  test('collapsed default vertical menu items can be activated with Enter', () => {
    const onClick = jest.fn();
    render(
      <Sidebar currentPath="" keyboardNavigation>
        <Sidebar.MenuItem label="Leaf" path="leaf" position="top" onClick={onClick} />
      </Sidebar>
    );
    getItem('Leaf').focus();
    fireEvent.keyDown(getItem('Leaf'), { key: 'Enter' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test.each(['vertical', 'horizontal'] as const)(
    '%s submenu arrows expand, collapse and return to parent',
    orientation => {
      const onClick = jest.fn();
      render(
        <Sidebar currentPath="" defaultMenuOpen keyboardNavigation manualExpansion orientation={orientation}>
          <Sidebar.MenuItem label="Parent" path="parent" position="top">
            <Sidebar.SubmenuItem label="Nested" path="nested">
              <Sidebar.SubmenuItem label="Disabled child" path="disabled" disabled />
              <Sidebar.SubmenuItem label="Child" path="child" onClick={onClick} />
            </Sidebar.SubmenuItem>
          </Sidebar.MenuItem>
        </Sidebar>
      );
      const open = orientation === 'vertical' ? 'ArrowRight' : 'ArrowDown';
      const close = 'ArrowLeft';
      getItem('Parent').focus();
      fireEvent.keyDown(getItem('Parent'), { key: open });
      expect(getItem('Nested')).toHaveFocus();
      fireEvent.keyDown(getItem('Nested'), { key: 'ArrowRight' });
      expect(getItem('Child')).toHaveFocus();
      fireEvent.keyDown(getItem('Child'), { key: 'ArrowRight' });
      expect(onClick).not.toHaveBeenCalled();
      fireEvent.keyDown(getItem('Child'), { key: close });
      expect(getItem('Nested')).toHaveFocus();
      expect(getItem('Nested')).toHaveAttribute('aria-expanded', 'false');
      expect(getItem('Child').closest('[aria-hidden="true"]')).not.toBeNull();
      fireEvent.keyDown(getItem('Nested'), { key: 'ArrowRight' });
      expect(getItem('Child')).toHaveFocus();
      fireEvent.keyDown(getItem('Child'), { key: close });
      fireEvent.keyDown(getItem('Nested'), { key: close });
      expect(getItem('Parent')).toHaveFocus();
      expect(getItem('Parent')).toHaveAttribute('aria-expanded', 'false');
      expect(onClick).not.toHaveBeenCalled();
    }
  );

  test('ArrowLeft closes a section immediately after ArrowRight opens it', () => {
    const onClick = jest.fn();
    render(
      <Sidebar currentPath="child" defaultMenuOpen keyboardNavigation manualExpansion>
        <Sidebar.MenuItem label="Parent" path="parent" position="top">
          <Sidebar.SubmenuItem label="Child" path="child" onClick={onClick} />
        </Sidebar.MenuItem>
      </Sidebar>
    );
    getItem('Parent').focus();
    fireEvent.keyDown(getItem('Parent'), { key: 'ArrowRight' });
    expect(getItem('Child')).toHaveFocus();
    fireEvent.keyDown(getItem('Child'), { key: 'ArrowLeft' });
    expect(getItem('Parent')).toHaveAttribute('aria-expanded', 'false');
    expect(getItem('Parent')).toHaveFocus();
    expect(getItem('Child').closest('[aria-hidden="true"]')).not.toBeNull();
    expect(onClick).not.toHaveBeenCalled();
  });

  test.each([
    ['vertical', 'default', false],
    ['vertical', 'burger', false],
    ['horizontal', 'burger', false],
    ['horizontal', 'default', true]
  ] as const)(
    '%s %s adaptive=%s: keyboard opening retains trigger focus and Esc restores it',
    async (orientation, variant, adaptive) => {
      mockMatchMedia(adaptive);
      const user = userEvent.setup();
      const { container } = render(
        <Sidebar currentPath="current" keyboardNavigation manualExpansion orientation={orientation} variant={variant}>
          <Sidebar.MenuItem label="First" path="first" position="top" />
          <Sidebar.MenuItem label="Current" path="current" position="top">
            <Sidebar.SubmenuItem label="Child" path="child" />
          </Sidebar.MenuItem>
        </Sidebar>
      );
      const trigger = container.querySelector<HTMLElement>(
        '[data-ui-sidebar-burger], [data-ui-sidebar-collapse-button]'
      )!;
      trigger.focus();
      await user.keyboard('{Enter}');
      const collapse = screen.getByRole('button', { name: 'Свернуть' });
      await waitFor(() => expect(collapse).toHaveFocus());
      const isVertical = orientation === 'vertical' || adaptive;
      if (isVertical) {
        const next = variant === 'default' && !adaptive ? 'ArrowUp' : 'ArrowDown';
        await user.keyboard(`{${next}}`);
      } else {
        await user.tab();
      }
      if (variant === 'burger' || adaptive) {
        expect(getItem('First')).toHaveFocus();
        await user.keyboard(`{${isVertical ? 'ArrowDown' : 'ArrowRight'}}`);
      }
      expect(getItem('Current')).toHaveFocus();
      await user.keyboard('{Enter}');
      await waitFor(() => expect(getItem('Child')).toHaveFocus());
      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(screen.queryByText('Child')).not.toBeInTheDocument();
        expect(container.querySelector('[data-ui-sidebar-burger], [data-ui-sidebar-collapse-button]')).toHaveFocus();
      });
    }
  );

  test('keyboard opening retains trigger focus and arrows skip disabled items', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Sidebar currentPath="missing" keyboardNavigation variant="burger">
        <Sidebar.MenuItem label="Disabled" path="disabled" position="top" disabled />
        <Sidebar.MenuItem label="First" path="first" position="top" />
      </Sidebar>
    );
    const trigger = container.querySelector<HTMLElement>('[data-ui-sidebar-burger]')!;
    trigger.focus();
    await user.keyboard('{Enter}');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Свернуть' })).toHaveFocus());
    await user.keyboard('{ArrowDown}');
    expect(getItem('First')).toHaveFocus();
    await user.keyboard('{Escape}');
    fireEvent.click(container.querySelector('[data-ui-sidebar-burger]')!);
    expect(screen.getByRole('button', { name: 'Свернуть' })).toHaveFocus();
    expect(getItem('First')).not.toHaveFocus();
  });

  test('ignores input events and events already prevented by custom content', () => {
    const onClick = jest.fn();
    render(
      <Sidebar currentPath="" defaultMenuOpen manualExpansion keyboardNavigation>
        <Sidebar.MenuItem
          label="Custom"
          path="custom"
          position="top"
          onClick={onClick}
          content={
            <>
              <input aria-label="Search" />
              <span onKeyDown={event => event.preventDefault()}>Handled</span>
            </>
          }
        />
        <Sidebar.MenuItem label="Last" path="last" position="top" />
      </Sidebar>
    );
    const input = screen.getByRole('textbox');
    input.focus();
    for (const key of ['ArrowDown', 'Enter', 'Escape']) {
      expect(fireEvent.keyDown(input, { key })).toBe(true);
      expect(input).toHaveFocus();
    }
    const first = getItem('Custom');
    first.focus();
    for (const key of ['ArrowDown', 'Enter', 'Escape']) {
      fireEvent.keyDown(screen.getByText('Handled'), { key });
      expect(first).toHaveFocus();
    }
    expect(onClick).not.toHaveBeenCalled();
  });

  test('horizontal default can be reopened from the keyboard after Escape', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <Sidebar currentPath="current" keyboardNavigation orientation="horizontal">
        <Sidebar.MenuItem label="Current" path="current" position="top" />
      </Sidebar>
    );
    expect(screen.getByRole('button', { name: 'Свернуть' })).toHaveAttribute('aria-expanded', 'true');
    getItem('Current').focus();
    await user.keyboard('{Escape}');
    const trigger = container.querySelector<HTMLElement>('[data-ui-sidebar-burger]')!;
    expect(trigger).toHaveFocus();
    await user.keyboard('{Enter}');
    expect(screen.getByRole('button', { name: 'Свернуть' })).toHaveFocus();
    await user.tab();
    expect(getItem('Current')).toHaveFocus();
  });

  test('manualExpansion keeps focus inside after submenu selection so Escape still works', async () => {
    const user = userEvent.setup();
    const onClick = jest.fn();
    const { container } = render(
      <Sidebar currentPath="" defaultMenuOpen keyboardNavigation manualExpansion>
        <Sidebar.MenuItem label="Parent" path="parent" position="top">
          <Sidebar.SubmenuItem label="Child" path="child" onClick={onClick} />
        </Sidebar.MenuItem>
      </Sidebar>
    );
    getItem('Parent').focus();
    await user.keyboard('{Enter}{Enter}');
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(getItem('Parent')).toHaveFocus();
    await user.keyboard('{Escape}');
    expect(container.querySelector('[data-ui-sidebar-collapse-button]')).toHaveFocus();
    expect(screen.queryByText('Parent')).not.toBeInTheDocument();
  });

  test('Tab and Shift+Tab can leave the menu and arrows skip hidden items', async () => {
    const user = userEvent.setup();
    render(
      <>
        <button>Before</button>
        <Sidebar currentPath="first" keyboardNavigation defaultMenuOpen isShowUserControl={false}>
          <Sidebar.MenuItem label="First" path="first" position="top" />
          <Sidebar.MenuItem label="Hidden" path="hidden" position="top" />
          <Sidebar.MenuItem label="Last" path="last" position="top" />
        </Sidebar>
        <button>After</button>
      </>
    );
    getItem('Hidden').hidden = true;
    getItem('First').focus();
    fireEvent.keyDown(getItem('First'), { key: 'ArrowDown' });
    expect(getItem('Last')).toHaveFocus();
    await user.tab();
    expect(screen.getByTitle('Свернуть')).toHaveFocus();
    await user.tab();
    expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
    getItem('First').focus();
    await user.tab({ shift: true });
    expect(screen.getByRole('button', { name: 'Before' })).toHaveFocus();
  });
});
