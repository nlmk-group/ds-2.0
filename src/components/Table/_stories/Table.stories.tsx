import React from 'react';

import styles from '../examples/Example.module.scss';

import PreviewSkeleton from '../../_storybook/PreviewSkeleton';
import Scrollbar from '../../Scrollbar';
import Typography from '../../Typography';
import CompactTableExample from '../examples/CompactTable';
import compactTableSource from '../examples/CompactTable/index.tsx?raw';
import transferData from '../examples/CrossTableCellTransferExample/constants.ts?raw';
import transferSource from '../examples/CrossTableCellTransferExample/index.tsx?raw';
import SupplyRegistryExample from '../examples/SupplyRegistry';
import supplyRegistrySource from '../examples/SupplyRegistry/index.tsx?raw';
import TableWithTanStackExample from '../examples/TableDefault';
import Table from '../Table';

const CrossTableCellTransferExample = React.lazy(() => import('../examples/CrossTableCellTransferExample'));
const DraggableColumnsIndicatorDndKitExample = React.lazy(
  () => import('../examples/DraggableColumnsIndicatorDndKitExample')
);
const DraggableColumnsIndicatorRDndExample = React.lazy(
  () => import('../examples/DraggableColumnsIndicatorRDndExample')
);
const DraggableRowsIndicatorDndKitExample = React.lazy(() => import('../examples/DraggableRowsIndicatorDndKitExample'));
const DraggableRowsIndicatorRDndExample = React.lazy(() => import('../examples/DraggableRowsIndicatorRDndExample'));
const EditableCellsTableExample = React.lazy(() => import('../examples/EditableCellsTableExample'));
const ExpandableTableExample = React.lazy(() => import('../examples/ExpandableTable'));
const FillCellTableExample = React.lazy(() => import('../examples/FillCellTableExample'));
const FilterableMultiselectTableExample = React.lazy(() => import('../examples/FilterableMultiselectTable'));
const FilterableTableExample = React.lazy(() => import('../examples/FilteringTable'));
const GroupHeaderTableWithResizeExample = React.lazy(() => import('../examples/GroupHeaderTableWithResize'));
const GroupingHeaderTableExample = React.lazy(() => import('../examples/GroupingHeaderTable'));
const LocalStorageTableExample = React.lazy(() => import('../examples/LocalStorageTableExample'));
const PinnedColumnsTableExample = React.lazy(() => import('../examples/PinnedColumnsTableExample'));
const RowHighlightExamples = React.lazy(() => import('../examples/RowHighlightExamples'));
const SelectableTableExample = React.lazy(() => import('../examples/SelectableTable'));
const SelectableTableWithGroupingHeaderExample = React.lazy(
  () => import('../examples/SelectableTableWithGroupingHeader')
);
const SelectableTableWithPaginationExample = React.lazy(() => import('../examples/SelectableTableWithPagination'));
const SelectableTableWithVirtualizationExample = React.lazy(
  () => import('../examples/SelectableTableWithVirtualization')
);
const SettingsTableExample = React.lazy(() => import('../examples/SettingsTableExample'));
const SortableTableExample = React.lazy(() => import('../examples/SortingTable'));
const SortingPaginationExample = React.lazy(() => import('../examples/CommonTableExample'));
const SwapCellsTableExample = React.lazy(() => import('../examples/SwapCellsTableExample'));
const TableWithStickyHeader = React.lazy(() => import('../examples/TableWithStickyHeader'));
const VirtualizedTableWithDynamicRowHeightExample = React.lazy(
  () => import('../examples/VirtualizedTableWithDynamicRowHeight')
);
const VirtualizedTableWithHorizontalVirtualizationExample = React.lazy(
  () => import('../examples/VirtualizedTableColumns')
);

const withTableLayout = (Story: React.ComponentType) => (
  <div className={styles.story}>
    <React.Suspense fallback={<PreviewSkeleton kind="table" />}>
      <Story />
    </React.Suspense>
  </div>
);

export default {
  title: 'Table/Stories',
  component: Table,
  parameters: { layout: 'fullscreen' },
  decorators: [withTableLayout]
};

const hiddenControlsParams = {
  controls: { disable: true },
  previewTabs: { controls: { hidden: true } }
};

export const BasicTable = () => <TableWithTanStackExample />;
BasicTable.storyName = 'Таблица по умолчанию';
BasicTable.parameters = hiddenControlsParams;

export const CompactTable = () => (
  <section className={styles.compactExample}>
    <Typography variant="Subheading3-Medium">Остатки металлопроката</Typography>
    <Scrollbar className={styles.tableContainer}>
      <CompactTableExample />
    </Scrollbar>
  </section>
);
CompactTable.storyName = 'Таблица с компактными строками (32 px)';
CompactTable.parameters = {
  ...hiddenControlsParams,
  docs: {
    description: { story: 'Для плотных реестров задайте size="xs" заголовкам Top и ячейкам Cell.' },
    source: { code: compactTableSource.replace("'@components/Table'", "'@nlmk/ds-2.0/Table'") }
  }
};

export const SupplyRegistry = (args: React.ComponentProps<typeof SupplyRegistryExample>) => (
  <SupplyRegistryExample key={args.initialState} {...args} />
);
SupplyRegistry.args = { initialState: 'ready' };
SupplyRegistry.argTypes = { initialState: { options: ['ready', 'empty', 'error'], control: 'radio' } };
SupplyRegistry.storyName = 'Реестр поставок и массовое назначение';
SupplyRegistry.parameters = {
  docs: { source: { code: supplyRegistrySource.replace("'@components/index'", "'@nlmk/ds-2.0'") } }
};

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

export const DraggableRowsTableIndicatorRDnd = () => <DraggableRowsIndicatorRDndExample />;
DraggableRowsTableIndicatorRDnd.storyName = 'Таблица с dnd строк (react-dnd)';
DraggableRowsTableIndicatorRDnd.parameters = hiddenControlsParams;

export const DraggableRowsTableIndicatorDndKit = () => <DraggableRowsIndicatorDndKitExample />;
DraggableRowsTableIndicatorDndKit.storyName = 'Таблица с dnd строк (dnd-kit)';
DraggableRowsTableIndicatorDndKit.parameters = hiddenControlsParams;

export const DraggableColumnsTableIndicatorRDnd = () => <DraggableColumnsIndicatorRDndExample />;
DraggableColumnsTableIndicatorRDnd.storyName = 'Таблица с dnd столбцов (react-dnd)';
DraggableColumnsTableIndicatorRDnd.parameters = hiddenControlsParams;

export const DraggableColumnsTableIndicatorDndKit = () => <DraggableColumnsIndicatorDndKitExample />;
DraggableColumnsTableIndicatorDndKit.storyName = 'Таблица с dnd столбцов (dnd-kit)';
DraggableColumnsTableIndicatorDndKit.parameters = hiddenControlsParams;

export const FillCellTable = () => <FillCellTableExample />;
FillCellTable.storyName = 'Таблица с автозаполнением ячеек';
FillCellTable.parameters = hiddenControlsParams;

export const SwapCellsTable = () => <SwapCellsTableExample />;
SwapCellsTable.storyName = 'Таблица с обменом значений между ячейками';
SwapCellsTable.parameters = hiddenControlsParams;

export const CrossTableCellTransfer = () => <CrossTableCellTransferExample />;
CrossTableCellTransfer.storyName = 'Назначение кода дефекта партии';
CrossTableCellTransfer.parameters = {
  ...hiddenControlsParams,
  docs: {
    source: {
      language: 'tsx',
      code: transferSource
        .replace("'@components/index'", "'@nlmk/ds-2.0'")
        .replace("import { defectCodes, initialJournal } from './constants';", () =>
          transferData.replace(/^export /gm, '').trim()
        )
    }
  }
};
