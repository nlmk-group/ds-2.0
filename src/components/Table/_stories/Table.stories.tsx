import React from 'react';

import {
  CrossTableCellTransferExample,
  DraggableColumnsTableExample,
  DraggableRowsTableExample,
  EditableCellsTableExample,
  ExpandableTableExample,
  FillCellTableExample,
  FilterableMultiselectTableExample,
  FilterableTableExample,
  GroupHeaderTableWithResizeExample,
  GroupingHeaderTableExample,
  LocalStorageTableExample,
  PinnedColumnsTableExample,
  RowHighlightExamples,
  SelectableTableExample,
  SelectableTableWithGroupingHeaderExample,
  SelectableTableWithPaginationExample,
  SelectableTableWithVirtualizationExample,
  SettingsTableExample,
  SortableTableExample,
  SortingPaginationExample,
  SwapCellsTableExample,
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

const hiddenControlsParams = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const BasicTable = () => <TableWithTanStackExample />;
BasicTable.storyName = 'Таблица по умолчанию';
BasicTable.parameters = hiddenControlsParams;

export const StickyHeader = () => <TableWithStickyHeader />;
StickyHeader.storyName = 'Таблица с закрепленным заголовком';
StickyHeader.parameters = hiddenControlsParams;

export const VirtualizedTableWithDynamicRowHeight = () => <VirtualizedTableWithDynamicRowHeightExample />;
VirtualizedTableWithDynamicRowHeight.storyName = 'Виртуализированная таблица с динамической высотой строк';
VirtualizedTableWithDynamicRowHeight.parameters = hiddenControlsParams;

export const VirtualizedTableWithHorizontalVirtualization = () => (
  <VirtualizedTableWithHorizontalVirtualizationExample />
);
VirtualizedTableWithHorizontalVirtualization.storyName = 'Таблица с горизонтальной виртуализацией';
VirtualizedTableWithHorizontalVirtualization.parameters = hiddenControlsParams;

export const FilterableTable = () => <FilterableTableExample />;
FilterableTable.storyName = 'Таблица с фильтрами, сортировкой и возможностью изменения ширины столбцов';
FilterableTable.parameters = hiddenControlsParams;

export const FilterableMultiselectTable = () => <FilterableMultiselectTableExample />;
FilterableMultiselectTable.storyName = 'Таблица с фильтрами мультивыбора';
FilterableMultiselectTable.parameters = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const SortableTable = () => <SortableTableExample />;
SortableTable.storyName = 'Таблица с сортировкой и возможностью изменения ширины столбцов';
SortableTable.parameters = hiddenControlsParams;

export const ExpandableTable = () => <ExpandableTableExample />;
ExpandableTable.storyName = 'Таблица с раскрывающимися строками';
ExpandableTable.parameters = hiddenControlsParams;

export const GroupingHeaderTable = () => <GroupingHeaderTableExample />;
GroupingHeaderTable.storyName = 'Таблица с группировкой и заголовками';
GroupingHeaderTable.parameters = hiddenControlsParams;

export const GroupHeaderTableWithResize = () => <GroupHeaderTableWithResizeExample />;
GroupHeaderTableWithResize.storyName = 'Таблица с группировкой и заголовками с возможностью изменения ширины столбцов';
GroupHeaderTableWithResize.parameters = hiddenControlsParams;

export const TableWithSettings = () => <SettingsTableExample />;
TableWithSettings.storyName = 'Таблица с настройками колонок';
TableWithSettings.parameters = hiddenControlsParams;

export const SelectableTable = () => <SelectableTableExample />;
SelectableTable.storyName = 'Таблица с выбором строк';
SelectableTable.parameters = hiddenControlsParams;

export const SelectableTableWithPagination = () => <SelectableTableWithPaginationExample />;
SelectableTableWithPagination.storyName = 'Таблица с выбором строк и пагинацией';
SelectableTableWithPagination.parameters = hiddenControlsParams;

export const SelectableTableWithGroupingHeader = () => <SelectableTableWithGroupingHeaderExample />;
SelectableTableWithGroupingHeader.storyName = 'Таблица с выбором строк и многоуровневой шапкой';
SelectableTableWithGroupingHeader.parameters = hiddenControlsParams;

export const SelectableTableWithVirtualization = () => <SelectableTableWithVirtualizationExample />;
SelectableTableWithVirtualization.storyName = 'Таблица с выбором строк и виртуализацией';
SelectableTableWithVirtualization.parameters = hiddenControlsParams;

export const CommonTableWithPaginationAndSortingUsage = () => <SortingPaginationExample />;
CommonTableWithPaginationAndSortingUsage.storyName =
  'Переиспользуемый компонент таблицы с пагинацией и сортировкой из проекта на основе TanStack';
CommonTableWithPaginationAndSortingUsage.parameters = hiddenControlsParams;

export const LocalStorageTable = () => <LocalStorageTableExample />;
LocalStorageTable.storyName = 'Таблица с сохранением настроек в localStorage';
LocalStorageTable.parameters = hiddenControlsParams;

export const PinnedColumnsTable = () => <PinnedColumnsTableExample />;
PinnedColumnsTable.storyName = 'Таблица с закрепленными столбцами и горизонтальным скроллом';
PinnedColumnsTable.parameters = hiddenControlsParams;

export const EditableCellsTable = () => <EditableCellsTableExample />;
EditableCellsTable.storyName = 'Таблица с интерактивными элементами ввода в ячейках';
EditableCellsTable.parameters = hiddenControlsParams;

export const RowHighlight = () => <RowHighlightExamples />;
RowHighlight.storyName = 'Варианты подсветки строк';
RowHighlight.parameters = hiddenControlsParams;

export const DraggableRowsTable = () => <DraggableRowsTableExample />;
DraggableRowsTable.storyName = 'Таблица с dnd строк';
DraggableRowsTable.parameters = hiddenControlsParams;

export const DraggableColumnsTable = () => <DraggableColumnsTableExample />;
DraggableColumnsTable.storyName = 'Таблица с dnd столбцов';
DraggableColumnsTable.parameters = hiddenControlsParams;

export const FillCellTable = () => <FillCellTableExample />;
FillCellTable.storyName = 'Таблица с автозаполнением ячеек';
FillCellTable.parameters = hiddenControlsParams;

export const SwapCellsTable = () => <SwapCellsTableExample />;
SwapCellsTable.storyName = 'Таблица с обменом значений между ячейками';
SwapCellsTable.parameters = hiddenControlsParams;

export const CrossTableCellTransfer = () => <CrossTableCellTransferExample />;
CrossTableCellTransfer.storyName = 'Перенос значений между двумя таблицами';
CrossTableCellTransfer.parameters = hiddenControlsParams;
