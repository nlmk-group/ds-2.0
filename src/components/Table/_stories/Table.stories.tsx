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
  VirtualizedTableWithHorizontalVirtualizationExample,
  SortingPaginationExample
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
BasicTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const StickyHeader = () => <TableWithStickyHeader />;
StickyHeader.storyName = 'Таблица с закрепленным заголовком';
StickyHeader.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const VirtualizedTableWithDynamicRowHeight = () => <VirtualizedTableWithDynamicRowHeightExample />;
VirtualizedTableWithDynamicRowHeight.storyName = 'Виртуализированная таблица с динамической высотой строк';
VirtualizedTableWithDynamicRowHeight.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const VirtualizedTableWithHorizontalVirtualization = () => (
  <VirtualizedTableWithHorizontalVirtualizationExample />
);
VirtualizedTableWithHorizontalVirtualization.storyName = 'Таблица с горизонтальной виртуализацией';
VirtualizedTableWithHorizontalVirtualization.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const FilterableTable = () => <FilterableTableExample />;
FilterableTable.storyName = 'Таблица с фильтрами, сортировкой и возможностью изменения ширины столбцов';
FilterableTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SortableTable = () => <SortableTableExample />;
SortableTable.storyName = 'Таблица с сортировкой и возможностью изменения ширины столбцов';
SortableTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const ExpandableTable = () => <ExpandableTableExample />;
ExpandableTable.storyName = 'Таблица с раскрывающимися строками';
ExpandableTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const GroupingHeaderTable = () => <GroupingHeaderTableExample />;
GroupingHeaderTable.storyName = 'Таблица с группировкой и заголовками';
GroupingHeaderTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const GroupHeaderTableWithResize = () => <GroupHeaderTableWithResizeExample />;
GroupHeaderTableWithResize.storyName = 'Таблица с группировкой и заголовками с возможностью изменения ширины столбцов';
GroupHeaderTableWithResize.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const TableWithSettings = () => <SettingsTableExample />;
TableWithSettings.storyName = 'Таблица с настройками колонок';
TableWithSettings.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

// export const TableComponents = () => <TableComponentsExample />;
// TableComponents.storyName = 'Таблица с компонентами';

export const SelectableTable = () => <SelectableTableExample />;
SelectableTable.storyName = 'Таблица с выбором строк';
SelectableTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SelectableTableWithPagination = () => <SelectableTableWithPaginationExample />;
SelectableTableWithPagination.storyName = 'Таблица с выбором строк и пагинацией';
SelectableTableWithPagination.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SelectableTableWithGroupingHeader = () => <SelectableTableWithGroupingHeaderExample />;
SelectableTableWithGroupingHeader.storyName = 'Таблица с выбором строк и многоуровневой шапкой';
SelectableTableWithGroupingHeader.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SelectableTableWithVirtualization = () => <SelectableTableWithVirtualizationExample />;
SelectableTableWithVirtualization.storyName = 'Таблица с выбором строк и виртуализацией';
SelectableTableWithVirtualization.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const CommonTableWithPaginationAndSortingUsage = () => <SortingPaginationExample />;
CommonTableWithPaginationAndSortingUsage.storyName = 
  'Переиспользуемый компонент таблицы с пагинацией и сортировкой из проекта на основе TanStack';
CommonTableWithPaginationAndSortingUsage.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};