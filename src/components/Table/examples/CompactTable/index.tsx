import React from 'react';

import { Cell, Row, Table, Tbody, Thead, Top } from '@components/Table';

const stock = [
  { id: 1, material: 'Прокат горячекатаный', grade: '09Г2С', tonnes: 128 },
  { id: 2, material: 'Лист холоднокатаный', grade: '08пс', tonnes: 64 },
  { id: 3, material: 'Рулон оцинкованный', grade: '01', tonnes: 235 },
  { id: 4, material: 'Плита стальная', grade: 'Ст3сп', tonnes: 48 },
  { id: 5, material: 'Штрипс холоднокатаный', grade: '08кп', tonnes: 72 },
  { id: 6, material: 'Лист судостроительный', grade: 'А32', tonnes: 105 }
];

export default function CompactTable() {
  return (
    <Table horizontalBorders verticalBorders aria-label="Остатки металлопроката">
      <Thead>
        <Row>
          <Top size="xs" title="№" />
          <Top size="xs" title="Материал" />
          <Top size="xs" title="Марка стали" />
          <Top size="xs" title="Остаток, т" right />
        </Row>
      </Thead>
      <Tbody>
        {stock.map(({ id, material, grade, tonnes }) => (
          <Row key={id}>
            <Cell size="xs" text={id} />
            <Cell size="xs" text={material} />
            <Cell size="xs" text={grade} />
            <Cell size="xs" number={tonnes} />
          </Row>
        ))}
      </Tbody>
    </Table>
  );
}
