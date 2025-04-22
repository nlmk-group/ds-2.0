import React from 'react';

import {
  ExpandableTableExample,
  FilterableTableExample,
  GroupHeaderTableWithResizeExample,
  GroupingHeaderTableExample,
  SelectableTableExample,
  SelectableTableWithGroupingHeaderExample,
  SelectableTableWithPaginationExample,
  SelectableTableWithVirtualizationExample,
  SettingsTableExample,
  SortableTableExample,
  TableWithStickyHeader,
  TableWithTanStackExample,
  VirtualizedTableWithDynamicRowHeightExample,
  VirtualizedTableWithHorizontalVirtualizationExample
} from '../examples';
import Table from '../Table';

const withPadding = (Story: () => any) => <div style={{ minHeight: 80 }}>{<Story />}</div>;

export default {
  title: 'Table/Stories',
  component: Table,
  decorators: [withPadding]
};

export const BasicTable = () => <TableWithTanStackExample />;
BasicTable.storyName = 'Таблица по умолчанию';

export const StickyHeader = () => <TableWithStickyHeader />;
StickyHeader.storyName = 'Таблица с закрепленным заголовком';

export const VirtualizedTableWithDynamicRowHeight = () => <VirtualizedTableWithDynamicRowHeightExample />;
VirtualizedTableWithDynamicRowHeight.storyName = 'Виртуализированная таблица с динамической высотой строк';

export const VirtualizedTableWithHorizontalVirtualization = () => (
  <VirtualizedTableWithHorizontalVirtualizationExample />
);
VirtualizedTableWithHorizontalVirtualization.storyName = 'Таблица с горизонтальной виртуализацией';

export const FilterableTable = () => <FilterableTableExample />;
FilterableTable.storyName = 'Таблица с фильтрами, сортировкой и возможностью изменения ширины столбцов';

export const SortableTable = () => <SortableTableExample />;
SortableTable.storyName = 'Таблица с сортировкой и возможностью изменения ширины столбцов';

export const ExpandableTable = () => <ExpandableTableExample />;
ExpandableTable.storyName = 'Таблица с раскрывающимися строками';

export const GroupingHeaderTable = () => <GroupingHeaderTableExample />;
GroupingHeaderTable.storyName = 'Таблица с группировкой и заголовками';

export const GroupHeaderTableWithResize = () => <GroupHeaderTableWithResizeExample />;
GroupHeaderTableWithResize.storyName = 'Таблица с группировкой и заголовками с возможностью изменения ширины столбцов';

export const TableWithSettings = () => <SettingsTableExample />;
TableWithSettings.storyName = 'Таблица с настройками колонок';

// export const TableComponents = () => <TableComponentsExample />;
// TableComponents.storyName = 'Таблица с компонентами';

export const SelectableTable = () => <SelectableTableExample />;
SelectableTable.storyName = 'Таблица с выбором строк';

export const SelectableTableWithPagination = () => <SelectableTableWithPaginationExample />;
SelectableTableWithPagination.storyName = 'Таблица с выбором строк и пагинацией';

export const SelectableTableWithGroupingHeader = () => <SelectableTableWithGroupingHeaderExample />;
SelectableTableWithGroupingHeader.storyName = 'Таблица с выбором строк и многоуровневой шапкой';

export const SelectableTableWithVirtualization = () => <SelectableTableWithVirtualizationExample />;
SelectableTableWithVirtualization.storyName = 'Таблица с выбором строк и виртуализацией';
