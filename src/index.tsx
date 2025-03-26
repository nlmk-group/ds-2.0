import React, { ChangeEvent, ComponentType, FC, ReactNode, StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import {
  ColumnDef,
  ColumnFiltersState,
  ColumnResizeMode,
  createColumnHelper,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  SortingState,
  Row as TableRowType,
  useReactTable
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import clsx from 'clsx';
import { previousDay } from 'date-fns';

import { TIconProps } from './components/Icon/types';
import Status from './components/Status';
import { Cell, Row, Table, Tbody, Tfooter, Thead, Top } from './components/Table';
import { ECellSize, ECellState, ECellStatus } from './components/Table/Cell/types';

import styles from './index.module.scss';

import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  DatePicker,
  Divider,
  DragAndDrop,
  Dropdown,
  DropdownMenuItem,
  GroupHeaderTableWithResize,
  Header,
  Icon,
  IconCloseOutlined24,
  IconEqualsSign24,
  IconExceptionContains24,
  IconFinishingContains24,
  IconGreater24,
  IconGreaterOrEqual24,
  IconLess24,
  IconLessOrEqual24,
  IconNotEqualSign24,
  IconOrderIsNotSecured32,
  IconOrderIsOverlySecured32,
  IconOrderIsOverlySecuredLater32,
  IconSelectionContains24,
  IconStartingContains24,
  Input,
  Link,
  OptionItem,
  Radio,
  Select,
  SimpleSelect,
  Spinner,
  Stepper,
  Switch,
  Tabs,
  ThemeSwitcher,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useThemeSwitcher
} from './components';

const container = document.getElementById('root');
const root = createRoot(container!);

const states = [
  { state: ECellState.DEFAULT, title: 'Default' },
  { state: ECellState.SELECTED, title: 'Selected' },
  { state: ECellState.ACTIVE, title: 'Active' },
  { state: ECellState.DISABLED, title: 'Disabled' }
];

const colors = [
  { color: ECellStatus.DEFAULT, title: 'Default', statusColor: 'default', statusText: 'Published' },
  { color: ECellStatus.ERROR, title: 'Error', statusColor: 'error', statusText: 'Not developed' },
  { color: ECellStatus.SUCCESS, title: 'Success', statusColor: 'success', statusText: 'Effectively' },
  { color: ECellStatus.WARNING, title: 'Warning', statusColor: 'warning', statusText: 'In progress' }
];

const CellWithInput = ({ state }: { state: ECellState }) => {
  const [value, setValue] = useState('42');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Cell state={state}>
      <Input value={value} onChange={handleChange} disabled={state === ECellState.DISABLED} />
    </Cell>
  );
};
const InputExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const suggestedNames = ['Alice', 'Bob', 'Charlie', 'David', 'Emma'];
  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // какая-нибудь логика после прекращения ввода в input
    console.log('event blur: ', e);
  };

  const handleReset = () => {
    setValue('');
  };

  return (
    <form action="" autoComplete="on">
      <Input
        name="username"
        autoComplete="username"
        placeholder="Введите имя"
        value={value}
        label={'Label'}
        onBlur={handleBlur}
        onChange={handleChange}
        onReset={handleReset}
        icon={<IconOrderIsOverlySecuredLater32 />}
      />
    </form>
  );
};

const DefaultHeader = (): ReactNode => {
  return (
    <Header
      title="Заголовок"
      onMessageClick={() => console.log('back')}
      onNotificationClick={() => console.log('back')}
      onFavoriteClick={() => console.log('back')}
      onPrintClick={() => console.log('back')}
      onVideoClick={() => console.log('back')}
      onBackClick={() => console.log('back')}
    />
  );
};
root.render(
  <StrictMode>
    <div className="development-block">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '32px' }}>
        <DefaultHeader></DefaultHeader>
      </div>
    </div>
  </StrictMode>
);
