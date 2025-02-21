import React from 'react';

import { TIconName } from '@components/Icon/IconsDirectory/unionType';
import { Checkbox, Status } from '@components/index';
import { EStatusColor } from '@components/Status/enums';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';

import { EStatus, ISelectionWithGrouping } from './types';

const rawMaterials = ['Никель', 'Олово', 'Медь', 'Цинк', 'Алюминий', 'Железо'];

const enterpriseNames = ['Алтай', 'СГОК', 'Стагдок', 'Атриум', 'Пилигрим', 'МелТЭК'];

export const data: ISelectionWithGrouping[] = Array.from({ length: 20 }, (_, i) => {
  const name = rawMaterials[Math.floor(Math.random() * rawMaterials.length)];
  const enterprise = enterpriseNames[Math.floor(Math.random() * enterpriseNames.length)];
  const plan = Math.floor(Math.random() * 1000) + 100; // Планы от 100 до 1000
  const fact = Math.random() > 0.5 ? plan : Math.floor(Math.random() * (plan + 1)); // Факт ≤ План
  const status = fact === plan ? EStatus.Done : EStatus.InProcess;

  return {
    id: i + 1,
    name,
    plan,
    fact,
    enterprise,
    status
  };
});

const columnHelper = createColumnHelper<ISelectionWithGrouping>();

export const columns: ColumnDef<ISelectionWithGrouping>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected() || table.getIsSomeRowsSelected()}
        multiple={table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
        <Checkbox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
        />
      </div>
    ),
    meta: {
      rowSpan: 2
    },
    size: 56
  },
  columnHelper.accessor('name', {
    header: 'Название',
    meta: {
      rowSpan: 2
    }
  }),
  columnHelper.group({
    header: 'Объем продукции',
    columns: [
      columnHelper.accessor(row => row.plan, {
        id: 'plan',
        header: 'План',
        meta: {
          isNumeric: true
        }
      }),
      columnHelper.accessor(row => row.fact, {
        id: 'fact',
        header: 'Факт',
        meta: {
          isNumeric: true,
          isLastInGroup: true 
        }
      })
    ]
  }),
  columnHelper.accessor('enterprise', {
    header: 'Предприятие',
    meta: {
      rowSpan: 2
    }
  }),
  columnHelper.accessor('status', {
    header: 'Статус',
    cell: ({ cell }) => {
      const status = cell.getValue() as EStatus;
      const icon = (
        status === EStatus.Done ? 'IconDoneCheckOutlined24' : 'IconScheduleTimeWatchOutlined24'
      ) as TIconName;
      const color = (status === EStatus.Done ? 'success' : 'warning') as EStatusColor;
      const title = status === EStatus.Done ? 'Выполнен' : 'В процессе';
      const props = { color, icon };

      return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <Status {...props}>{title}</Status>
        </div>
      );
    },
    meta: {
      rowSpan: 2
    }
  })
] as ColumnDef<ISelectionWithGrouping>[];
