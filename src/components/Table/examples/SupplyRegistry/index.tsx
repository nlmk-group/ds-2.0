import React, { useEffect, useState } from 'react';

import { Box, Button, Cell, Checkbox, Input, Row, SkeletonLoader, Table, Tbody, Thead, Top } from '@components/index';

const initialRows = [
  { id: 1, material: 'Сталь листовая', owner: 'Не назначен' },
  { id: 2, material: 'Рулон оцинкованный', owner: 'Не назначен' },
  { id: 3, material: 'Сталь инструментальная', owner: 'Не назначен' }
];

export default function SupplyRegistry({ initialState = 'ready' }: { initialState?: 'ready' | 'empty' | 'error' }) {
  const [rows, setRows] = useState(initialState === 'empty' ? [] : initialRows);
  const [state, setState] = useState<'ready' | 'loading' | 'error'>(initialState === 'error' ? 'error' : 'ready');
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState<number[]>([]);
  const [message, setMessage] = useState('');
  const visible = rows.filter(row => row.material.toLowerCase().includes(filter.trim().toLowerCase()));

  useEffect(() => {
    if (state !== 'loading') return;
    // В приложении здесь выполняется повторный запрос с текущим фильтром.
    const timer = setTimeout(() => setState('ready'), 300);
    return () => clearTimeout(timer);
  }, [state]);

  function assign() {
    setRows(rows.map(row => (selected.includes(row.id) ? { ...row, owner: 'Отдел снабжения' } : row)));
    setMessage(`Назначен отдел снабжения. Обновлено поставок: ${selected.length}.`);
    setSelected([]);
  }

  return (
    <section aria-label="Реестр поставок">
      <h2>Реестр поставок</h2>
      <Box flexDirection="column" gap="12px">
        <Input
          label="Поиск по материалу"
          value={filter}
          onChange={event => {
            setFilter(event.target.value);
            setSelected([]);
            setMessage('');
          }}
        />
        {state === 'error' && (
          <div role="alert">
            Не удалось загрузить поставки. <Button onClick={() => setState('loading')}>Повторить</Button>
          </div>
        )}
        {state === 'ready' && rows.length === 0 && (
          <div>
            Поставок пока нет.{' '}
            <Button
              onClick={() => {
                setRows([initialRows[0]]);
                setFilter('');
              }}
            >
              Создать первую поставку
            </Button>
          </div>
        )}
        {state === 'ready' && rows.length > 0 && visible.length === 0 && (
          <div>
            Материалы не найдены. <Button onClick={() => setFilter('')}>Сбросить поиск</Button>
          </div>
        )}
        {(state === 'loading' || (state === 'ready' && visible.length > 0)) && (
          <>
            <Button disabled={state === 'loading' || !selected.length} onClick={assign}>
              Назначить отдел снабжения ({selected.length})
            </Button>
            <div style={{ overflowX: 'auto', maxWidth: '100%' }}>
              <Table horizontalBorders aria-label="Поставки" aria-busy={state === 'loading'}>
                <Thead>
                  <Row>
                    <Top title="Выбор" />
                    <Top title="Материал" />
                    <Top title="Ответственный" />
                  </Row>
                </Thead>
                <Tbody>
                  {state === 'loading'
                    ? initialRows.map(row => (
                        <Row key={row.id}>
                          <Cell>
                            <SkeletonLoader width="18px" height="18px" />
                          </Cell>
                          <Cell>
                            <SkeletonLoader width="70%" height="12px" />
                          </Cell>
                          <Cell>
                            <SkeletonLoader width="55%" height="12px" />
                          </Cell>
                        </Row>
                      ))
                    : visible.map(row => (
                        <Row key={row.id}>
                          <Cell>
                            <Checkbox
                              aria-label={`Выбрать: ${row.material}`}
                              checked={selected.includes(row.id)}
                              onChange={event =>
                                setSelected(
                                  event.target.checked ? [...selected, row.id] : selected.filter(id => id !== row.id)
                                )
                              }
                            />
                          </Cell>
                          <Cell text={row.material} />
                          <Cell text={row.owner} />
                        </Row>
                      ))}
                </Tbody>
              </Table>
            </div>
          </>
        )}
        <div role="status">{state === 'loading' ? 'Загрузка поставок…' : message}</div>
      </Box>
    </section>
  );
}
