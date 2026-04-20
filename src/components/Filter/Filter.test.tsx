import React from 'react';

import { IconEqualsSign24, IconMultipleChoice24, IconSelectionContains24 } from '@components/Icon/IconsDirectory';
import { fireEvent, render, screen } from '@testing-library/react';

import Filter from '.';

describe('Filter Component', () => {
  const filterTypeOptions = [
    { value: 'contains', label: 'Содержит', icon: <IconSelectionContains24 /> },
    { value: 'equals', label: 'Равно', icon: <IconEqualsSign24 /> }
  ];

  const multiTypeOptions = [{ value: 'one_of', label: 'Один из', icon: <IconMultipleChoice24 /> }];

  const filterValueOptions = [
    { value: 'new', label: 'Новое' },
    { value: 'inProgress', label: 'В работе' },
    { value: 'processed', label: 'Обработано' }
  ];

  test('рендерит инпут с placeholder', () => {
    render(
      <Filter filterTypeOptions={filterTypeOptions} filterValueOptions={filterValueOptions} placeholder="Поиск ..." />
    );
    expect(screen.getByPlaceholderText('Поиск ...')).toBeInTheDocument();
  });

  test('autocomplete: выбор значения подставляет label в инпут и вызывает onFilterChange', () => {
    const onFilterChange = jest.fn();
    render(
      <Filter
        filterTypeOptions={filterTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultFilterType="contains"
        onFilterChange={onFilterChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);

    fireEvent.click(screen.getByText('Новое'));

    expect(input.value).toBe('Новое');
    expect(onFilterChange).toHaveBeenCalledWith('Новое', 'contains');
  });

  test('autocomplete: Enter в инпуте вызывает onFilterChange с текущим value и типом', () => {
    const onFilterChange = jest.fn();
    render(
      <Filter
        filterTypeOptions={filterTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultFilterType="equals"
        onFilterChange={onFilterChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'abc' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    expect(onFilterChange).toHaveBeenCalledWith('abc', 'equals');
  });

  test('autocomplete: reset очищает value и вызывает onFilterChange(undefined, type)', () => {
    const onFilterChange = jest.fn();
    render(
      <Filter
        filterTypeOptions={filterTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultValue="yo"
        defaultFilterType="contains"
        onFilterChange={onFilterChange}
      />
    );

    fireEvent.click(screen.getByTestId('RESET_ICON'));

    const input = screen.getByRole('textbox') as HTMLInputElement;
    expect(input.value).toBe('');
    expect(onFilterChange).toHaveBeenCalledWith(undefined, 'contains');
  });

  test('multiselect: клик по опции переключает её в selectedValues и не закрывает меню', () => {
    const onSelectedValuesChange = jest.fn();
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        selectedValues={[]}
        onSelectedValuesChange={onSelectedValuesChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);

    fireEvent.click(screen.getByText('Новое'));

    expect(onSelectedValuesChange).toHaveBeenCalledWith(['new']);
    // меню осталось открытым — другие опции всё ещё в DOM
    expect(screen.getByText('В работе')).toBeInTheDocument();
  });

  test('multiselect: повторный клик убирает значение из selectedValues', () => {
    const onSelectedValuesChange = jest.fn();
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        selectedValues={['new', 'processed']}
        onSelectedValuesChange={onSelectedValuesChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);

    fireEvent.click(screen.getByText('Новое'));

    expect(onSelectedValuesChange).toHaveBeenCalledWith(['processed']);
  });

  test('multiselect: при выбранных значениях и пустом поиске показывается счётчик "Выбрано: N"', () => {
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultSelectedValues={['new', 'processed']}
      />
    );

    expect(screen.getByText('Выбрано: 2')).toBeInTheDocument();
  });

  test('multiselect: при вводе поиска счётчик скрывается', () => {
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultSelectedValues={['new']}
      />
    );

    expect(screen.getByText('Выбрано: 1')).toBeInTheDocument();

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'нов' } });

    expect(screen.queryByText('Выбрано: 1')).not.toBeInTheDocument();
  });

  test('multiselect: поиск фильтрует опции, selectedValues не теряются', () => {
    const onSelectedValuesChange = jest.fn();
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        selectedValues={['new']}
        onSelectedValuesChange={onSelectedValuesChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'раб' } });

    expect(screen.getByText('В работе')).toBeInTheDocument();
    expect(screen.queryByText('Новое')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('В работе'));
    expect(onSelectedValuesChange).toHaveBeenCalledWith(['new', 'inProgress']);
  });

  test('multiselect: reset-иконка показывается при наличии selectedValues и очищает и поиск, и selectedValues', () => {
    const onSelectedValuesChange = jest.fn();
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        selectedValues={['new']}
        onSelectedValuesChange={onSelectedValuesChange}
      />
    );

    const resetIcon = screen.getByTestId('RESET_ICON');
    expect(resetIcon).toBeInTheDocument();

    fireEvent.click(resetIcon);

    expect(onSelectedValuesChange).toHaveBeenCalledWith([]);
  });

  test('multiselect: uncontrolled — defaultSelectedValues задаёт начальный набор', () => {
    const onSelectedValuesChange = jest.fn();
    render(
      <Filter
        mode="multiselect"
        filterTypeOptions={multiTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultSelectedValues={['new']}
        onSelectedValuesChange={onSelectedValuesChange}
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);

    fireEvent.click(screen.getByText('В работе'));

    expect(onSelectedValuesChange).toHaveBeenCalledWith(['new', 'inProgress']);
  });

  test('поиск фильтрует filterValueOptions в обоих режимах', () => {
    render(
      <Filter
        filterTypeOptions={filterTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultFilterType="contains"
      />
    );

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'раб' } });

    expect(screen.getByText('В работе')).toBeInTheDocument();
    expect(screen.queryByText('Новое')).not.toBeInTheDocument();
  });

  test('если поиск не находит совпадений, отображается "Нет совпадений"', () => {
    render(<Filter filterTypeOptions={filterTypeOptions} filterValueOptions={filterValueOptions} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'xyz' } });

    expect(screen.getByText('Нет совпадений')).toBeInTheDocument();
  });

  test('клик по иконке типа открывает меню типов фильтра', () => {
    render(<Filter filterTypeOptions={filterTypeOptions} filterValueOptions={filterValueOptions} />);

    const iconWrapper = document.querySelector('[data-ui-input-custom-icon]');
    expect(iconWrapper).not.toBeNull();
    fireEvent.click(iconWrapper!.firstElementChild!);

    expect(screen.getByText('Содержит')).toBeInTheDocument();
    expect(screen.getByText('Равно')).toBeInTheDocument();
  });

  test('смена типа фильтра закрывает меню типов и вызывает onFilterChange с новым типом', () => {
    const onFilterChange = jest.fn();
    render(
      <Filter
        filterTypeOptions={filterTypeOptions}
        filterValueOptions={filterValueOptions}
        defaultValue="q"
        defaultFilterType="contains"
        onFilterChange={onFilterChange}
      />
    );

    const iconWrapper = document.querySelector('[data-ui-input-custom-icon]');
    fireEvent.click(iconWrapper!.firstElementChild!);

    fireEvent.click(screen.getByText('Равно'));

    expect(onFilterChange).toHaveBeenCalledWith('q', 'equals');
  });
});
