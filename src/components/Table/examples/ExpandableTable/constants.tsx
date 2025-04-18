import React from 'react';

import Icon from '@components/Icon';
import { ECellStatus } from '@components/Table/Cell/types';
import { ColumnDef } from '@tanstack/react-table';

import { IExpandableData } from './types';

export const columns: ColumnDef<IExpandableData>[] = [
  {
    id: 'expander',
    header: '',
    cell: ({ row }) => {
      const canExpand = !!row.original.details;
      const isExpanded = row.getIsExpanded();

      return canExpand ? (
        <div
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={row.getToggleExpandedHandler()}
        >
          <Icon name={isExpanded ? 'IconChevronArrowUpOutlined16' : 'IconChevronArrowDownOutlined16'} />
        </div>
      ) : null;
    },
    size: 40,
    enableSorting: false,
    meta: {
      isExpander: true
    }
  },
  {
    header: 'ID',
    accessorKey: 'id',
    cell: ({ getValue }) => String(getValue()),
    size: 100,
    enableSorting: true,
    meta: {
      isNumeric: true
    }
  },
  {
    header: 'Name',
    accessorKey: 'name',
    size: 150,
    enableSorting: true
  },
  {
    header: 'Age',
    accessorKey: 'age',
    size: 100,
    enableSorting: true,
    meta: {
      isNumeric: true
    }
  },
  {
    header: 'Status',
    accessorKey: 'status',
    size: 120,
    enableSorting: false
  }
];

export const data: IExpandableData[] = [
  {
    id: 1,
    name: 'Сталь 45',
    age: 1450,
    status: ECellStatus.SUCCESS,
    details: 'Конструкционная углеродистая сталь для деталей машин.'
  },
  {
    id: 2,
    name: 'Чугун СЧ20',
    age: 1200,
    status: ECellStatus.ERROR,
    details: 'Серый чугун для изготовления станин и корпусных деталей.'
  },
  {
    id: 3,
    name: 'Сплав Д16',
    age: 660,
    status: ECellStatus.DEFAULT,
    details: 'Дюралюминий для авиационных конструкций и высоконагруженных деталей.'
  },
  {
    id: 4,
    name: 'ВТ6',
    age: 1668,
    status: ECellStatus.SUCCESS,
    details: 'Титановый сплав для ответственных деталей в авиастроении.'
  },
  {
    id: 5,
    name: 'У12А',
    age: 1350,
    status: ECellStatus.WARNING,
    details: 'Инструментальная углеродистая сталь для режущих инструментов.'
  },
  {
    id: 6,
    name: 'ХВГ',
    age: 1280,
    status: ECellStatus.SUCCESS,
    details: 'Инструментальная легированная сталь для штампов холодного деформирования.'
  },
  {
    id: 7,
    name: 'БрАЖ9-4',
    age: 1040,
    status: ECellStatus.DEFAULT,
    details: 'Алюминиево-железистая бронза для подшипников и втулок.'
  },
  {
    id: 8,
    name: 'ЛС59-1',
    age: 880,
    status: ECellStatus.ERROR,
    details: 'Латунь свинцовая для деталей, работающих при высоких нагрузках.'
  },
  {
    id: 9,
    name: '40Х13',
    age: 1510,
    status: ECellStatus.SUCCESS,
    details: 'Коррозионностойкая сталь для режущего инструмента.'
  },
  {
    id: 10,
    name: 'АМг6',
    age: 580,
    status: ECellStatus.WARNING,
    details: 'Алюминиевый сплав для сварных конструкций.'
  },
  {
    id: 11,
    name: '30ХГСА',
    age: 1420,
    status: ECellStatus.DEFAULT,
    details: 'Конструкционная легированная сталь для ответственных деталей.'
  },
  {
    id: 12,
    name: 'БрОЦС4-4-2.5',
    age: 920,
    status: ECellStatus.SUCCESS,
    details: 'Оловянно-цинково-свинцовая бронза для антифрикционных деталей.'
  },
  {
    id: 13,
    name: '12Х18Н10Т',
    age: 1480,
    status: ECellStatus.ERROR,
    details: 'Нержавеющая сталь для химического оборудования.'
  },
  {
    id: 14,
    name: 'МЛ5',
    age: 650,
    status: ECellStatus.SUCCESS,
    details: 'Магниевый литейный сплав для деталей авиационной техники.'
  },
  {
    id: 15,
    name: 'ВТ1-0',
    age: 1720,
    status: ECellStatus.WARNING,
    details: 'Технически чистый титан для химической промышленности.'
  }
];
