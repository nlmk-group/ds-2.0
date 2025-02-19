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

root.render(
  <StrictMode>
    <div className="development-block">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '32px' }}>
        {/* Thead Examples */}
        <div>
          <h2>Thead Examples</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '4em'
            }}
          >
            <div>
              <h3>Default</h3>
              <Table>
                <Thead>
                  <Top title="Заголовок" />
                </Thead>
              </Table>
              <br />
              <Table>
                <Thead>
                  <Top title="Заголовок" size="s" />
                </Thead>
              </Table>
              <br />
              <Table>
                <Thead>
                  <Top title="Заголовок" size="xs" />
                </Thead>
              </Table>
            </div>

            <div>
              <h3>Disabled</h3>
              <Top title="Заголовок" disable />
            </div>

            <div>
              <h3>Sort on</h3>
              <Top title="Заголовок" sort />
              <br />
              <Top title="Заголовок" size="s" sort />
              <br />
              <Top title="Заголовок" size="xs" sort />
            </div>

            <div>
              <h3>Digits</h3>
              <Top title="Заголовок" number />
              <br />
              <Top title="Заголовок" size="s" number />
              <br />
              <Top title="Заголовок" size="xs" number />
            </div>

            <div>
              <h3>Sort & Digits</h3>
              <Top title="Заголовок" number sort />
              <br />
              <Top title="Заголовок" size="s" number sort />
              <br />
              <Top title="Заголовок" size="xs" number sort />
            </div>

            <div>
              <h3>Active</h3>
              <Top title="Заголовок" number sort active />
              <br />
              <Top title="Заголовок" size="s" number active />
              <br />
              <Top title="Заголовок" size="xs" sort active />
            </div>

            <div>
              <h3>Right</h3>
              <Top title="Заголовок" right active />
              <br />
              <Top title="Заголовок" size="s" right active />
              <br />
              <Top title="Заголовок" size="xs" right />
            </div>

            <div>
              <h3>Drag</h3>
              <Table>
                <Thead>
                  <Top title="Заголовок" drag active />
                </Thead>
              </Table>
            </div>
          </div>
        </div>

        {/* Cell Examples */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2>Cell Examples</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
              gap: '32px',
              maxWidth: '100%'
            }}
          >
            {colors.map(({ color, title, statusColor, statusText }) => (
              <div key={color}>
                <h3>{title} Color</h3>
                <Table>
                  <tbody style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {states.map(({ state, title: stateTitle }) => (
                      <Row key={state || 'default'}>
                        <Cell number={42} color={color} state={state} />

                        <Cell color={color} state={state}>
                          <Checkbox
                            label="Выбрать"
                            disabled={state === ECellState.DISABLED}
                            color={statusColor as any}
                          />
                        </Cell>

                        <Cell color={color} state={state}>
                          <Radio
                            label="Опция"
                            value="option1"
                            disabled={state === ECellState.DISABLED}
                            color={statusColor as any}
                          />
                        </Cell>

                        <Cell color={color} state={state}>
                          <Typography variant="Body2">{stateTitle} state</Typography>
                          <Status icon="IconDoneCheckOutlined16" color={statusColor as `${ECellStatus}`}>
                            {statusText}
                          </Status>
                          <Button size="s">Button</Button>
                          <Icon name="IconDoneCheckOutlined16" />
                        </Cell>
                      </Row>
                    ))}
                  </tbody>
                </Table>
              </div>
            ))}
          </div>
          <div>
            {/* Cell Examples With Input */}
            {states.map(({ state }) => (
              <CellWithInput key={state} state={state} />
            ))}
          </div>
        </div>

        {/* Complex Table Example */}
        <div>
          <h2>Complex Table Example</h2>
          <Table>
            <Thead>
              <Row>
                <Top title="Номер" number active drag rowSpan={2} />
                <Top title="Бригадир" drag rowSpan={2} />
                <Top title="Смена" number sort drag rowSpan={2} />
                <Top title="Посещения" number sort drag colSpan={2} />
                <Top title="Статус" sort drag rowSpan={2} />
                <Top title="Прогресс" number sort drag rowSpan={2} />
              </Row>
              <Row>
                <Top title="Имя" />
                <Top title="Фамилия" number />
              </Row>
            </Thead>
          </Table>
        </div>
      </div>
    </div>
  </StrictMode>
);
