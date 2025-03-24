import React, { ChangeEvent, useState } from 'react';

import { Button, Checkbox, Icon, Input, Radio, Status, Typography } from '@components/index';
import { ECellState, ECellStatus } from '@components/Table/Cell/types';

import { Cell, Row, Table, Thead, Top } from '../../index';

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

const TableComponentsExample = () => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', padding: '32px' }}>
        {/* Thead Examples */}
        <div>
          <Typography variant="Heading2" color="var(--steel-90)">
            Thead Examples
          </Typography>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: '4em'
            }}
          >
            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Default
              </Typography>
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
              <Typography variant="Heading3" color="var(--steel-90)">
                Disabled
              </Typography>
              <Top title="Заголовок" disable />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Sort on
              </Typography>
              <Top title="Заголовок" sort />
              <br />
              <Top title="Заголовок" size="s" sort />
              <br />
              <Top title="Заголовок" size="xs" sort />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Digits
              </Typography>
              <Top title="Заголовок" number />
              <br />
              <Top title="Заголовок" size="s" number />
              <br />
              <Top title="Заголовок" size="xs" number />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Sort & Digits
              </Typography>
              <Top title="Заголовок" number sort />
              <br />
              <Top title="Заголовок" size="s" number sort />
              <br />
              <Top title="Заголовок" size="xs" number sort />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Active
              </Typography>
              <Top title="Заголовок" number sort />
              <br />
              <Top title="Заголовок" size="s" number />
              <br />
              <Top title="Заголовок" size="xs" sort />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Right
              </Typography>
              <Top title="Заголовок" right />
              <br />
              <Top title="Заголовок" size="s" right />
              <br />
              <Top title="Заголовок" size="xs" right />
            </div>

            <div>
              <Typography variant="Heading3" color="var(--steel-90)">
                Drag
              </Typography>
              <Table>
                <Thead>
                  <Top title="Заголовок" drag />
                </Thead>
              </Table>
            </div>
          </div>
        </div>

        {/* Cell Examples */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <Typography variant="Heading2" color="var(--steel-90)">
            Cell Examples
          </Typography>
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
                <Typography variant="Heading3" color="var(--steel-90)">
                  {title}{' '}
                </Typography>
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
                          <Button type="button" size="s">Button</Button>
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
          <Typography variant="Heading2" color="var(--steel-90)">
            Complex Table Example
          </Typography>
          <Table>
            <Thead>
              <Row>
                <Top title="Номер" number drag rowSpan={2} />
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
  );
};

export default TableComponentsExample;
