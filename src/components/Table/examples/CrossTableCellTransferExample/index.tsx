import React, { useState } from 'react';

import { Box, Button, Cell, Row, Scrollbar, Table, Tbody, Thead, Top, Typography } from '@components/index';

import { defectCodes, initialJournal } from './constants';

const dragType = 'application/x-defect-code';

export default function CrossTableCellTransferExample() {
  const [selected, setSelected] = useState('');
  const [journal, setJournal] = useState(initialJournal);
  const [dropRow, setDropRow] = useState('');
  const [status, setStatus] = useState('');

  function assign(target: (typeof initialJournal)[number], code: string) {
    if (!defectCodes.some(defect => defect.code === code)) return;
    setJournal(rows => rows.map(row => (row.id === target.id ? { ...row, defectCode: code } : row)));
    setStatus(`Партии ${target.batch} назначен код ${code}.`);
    setSelected('');
    setDropRow('');
  }

  return (
    <Box flexDirection="column" gap={16}>
      <Typography variant="Body2-Medium">
        Перетащите код из первого столбца на нужную партию в журнале. Также можно нажать на код, затем на партию.
      </Typography>
      <Box display="grid" gap={20} st={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))' }}>
        <Box flexDirection="column" gap={8}>
          <Typography variant="Subheading3-Medium">Справочник кодов дефектов</Typography>
          <Scrollbar style={{ height: 'auto', border: '1px solid var(--unique-divider)', borderRadius: 4 }}>
            <Table verticalBorders aria-label="Справочник кодов дефектов">
              <Thead>
                <Row>
                  <Top title="Код" />
                  <Top title="Название" />
                  <Top title="Категория" />
                </Row>
              </Thead>
              <Tbody>
                {defectCodes.map(defect => (
                  <Row key={defect.id}>
                    <Cell>
                      <Button
                        draggable
                        style={{ cursor: 'grab' }}
                        onClick={() => setSelected(defect.code)}
                        onDragStart={event => {
                          // The other examples on the docs page also listen for native drag events.
                          event.stopPropagation();
                          event.dataTransfer.effectAllowed = 'copy';
                          event.dataTransfer.setData(dragType, defect.code);
                        }}
                        onDragEnd={() => setDropRow('')}
                        size="s"
                        variant={selected === defect.code ? 'primary' : 'secondary'}
                        aria-pressed={selected === defect.code}
                        type="button"
                      >
                        {defect.code}
                      </Button>
                    </Cell>
                    <Cell text={defect.name} />
                    <Cell text={defect.category} />
                  </Row>
                ))}
              </Tbody>
            </Table>
          </Scrollbar>
        </Box>
        <Box flexDirection="column" gap={8}>
          <Typography variant="Subheading3-Medium">Журнал ОТК</Typography>
          <Scrollbar style={{ height: 'auto', border: '1px solid var(--unique-divider)', borderRadius: 4 }}>
            <Table verticalBorders aria-label="Журнал ОТК">
              <Thead>
                <Row>
                  <Top title="Партия" />
                  <Top title="Продукт" />
                  <Top title="Код дефекта" />
                </Row>
              </Thead>
              <Tbody>
                {journal.map(row => (
                  <Row
                    key={row.id}
                    onClick={() => assign(row, selected)}
                    onDragOver={event => {
                      if (!event.dataTransfer.types.includes(dragType)) return;
                      event.preventDefault();
                      event.stopPropagation();
                      event.dataTransfer.dropEffect = 'copy';
                      setDropRow(row.id);
                    }}
                    onDragLeave={event => {
                      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setDropRow('');
                    }}
                    onDrop={event => {
                      if (!event.dataTransfer.types.includes(dragType)) return;
                      event.preventDefault();
                      event.stopPropagation();
                      assign(row, event.dataTransfer.getData(dragType));
                    }}
                    style={{ cursor: selected ? 'pointer' : undefined }}
                  >
                    <Cell text={row.batch} />
                    <Cell text={row.product} />
                    <Cell state={dropRow === row.id ? 'selected' : 'default'}>
                      <Box alignItems="center" gap={8} flexWrap="wrap">
                        <Typography>{row.defectCode || 'Не назначен'}</Typography>
                        {selected && (
                          <Button
                            type="button"
                            size="s"
                            variant="secondary"
                            aria-label={`Назначить ${selected} партии ${row.batch}`}
                          >
                            Назначить
                          </Button>
                        )}
                      </Box>
                    </Cell>
                  </Row>
                ))}
              </Tbody>
            </Table>
          </Scrollbar>
        </Box>
      </Box>
      <Typography role="status">{status}</Typography>
    </Box>
  );
}
