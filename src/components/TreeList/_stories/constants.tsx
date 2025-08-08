import React from 'react';

import {
  Button,
  IconCircleOutlined24,
  IconDeleteBinOutlined24,
  IconEditPenOutlined24,
  IconFolderFilled24,
  IconWarningFilled24
} from '@components/index';

import { TNodeItem } from '../types';

/* eslint-disable no-console */
const SideControls = () => {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button
        type="button"
        onClick={() => console.log('Edit')}
        iconButton={<IconEditPenOutlined24 />}
        variant="secondary"
        color="ghost"
        size="s"
        title="Edit"
      />
      <Button
        type="button"
        onClick={() => console.log('Delete')}
        iconButton={<IconDeleteBinOutlined24 />}
        variant="secondary"
        color="ghost"
        size="s"
        title="Delete"
      />
    </div>
  );
};

export const DEFAULT_TREE_DATA: TNodeItem[] = [
  {
    key: '0-0',
    title: 'Производство стали',
    rightSideControls: <SideControls />,
    children: [
      {
        key: '0-0-0',
        title: 'Конвертерный цех',
        children: [
          { key: '0-0-0-0', title: 'Конвертер №1' },
          { key: '0-0-0-1', title: 'Конвертер №2' },
          { key: '0-0-0-2', title: 'МНЛЗ №3' }
        ]
      },
      {
        key: '0-0-1',
        title: 'Электросталеплавильный цех',
        children: [
          { key: '0-0-1-0', title: 'ДСП №1' },
          { key: '0-0-1-1', title: 'МНЛЗ №4' }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Прокатное производство',
    children: [
      {
        key: '0-1-0',
        title: 'Цех горячей прокатки',
        children: [
          { key: '0-1-0-0', title: 'Стан 2000' },
          { key: '0-1-0-1', title: 'Нагревательные печи' }
        ]
      },
      {
        key: '0-1-1',
        title: 'Цех холодной прокатки',
        children: [
          { key: '0-1-1-0', title: 'Стан 1400' },
          { key: '0-1-1-1', title: 'Травильная линия' }
        ]
      }
    ]
  },
  {
    key: '0-2',
    title: 'Вспомогательное производство',
    children: [
      { key: '0-2-0', title: 'Кислородный цех' },
      { key: '0-2-1', title: 'Энергетический цех' }
    ]
  }
];

export const ENHANCED_TREE_DATA = [
  {
    key: '0-0',
    title: 'Производство стали',
    icon: <IconFolderFilled24 />,
    rightSideControls: <SideControls />,
    children: [
      {
        key: '0-0-0',
        title: 'Конвертерный цех',
        icon: <IconFolderFilled24 />,
        children: [
          {
            key: '0-0-0-0',
            title: 'Конвертер №1',
            icon: <IconCircleOutlined24 />,
            children: []
          },
          {
            key: '0-0-0-1',
            title: 'Конвертер №2 (заблокирован)',
            icon: <IconWarningFilled24 />,
            disabled: true
          },
          {
            key: '0-0-0-2',
            title: 'МНЛЗ №3 (нельзя перетаскивать)',
            icon: <IconCircleOutlined24 />,
            disableDraggable: true
          }
        ]
      },
      {
        key: '0-0-1',
        title: 'Электросталеплавильный цех (полностью заблокирован)',
        icon: <IconWarningFilled24 />,
        disabled: true,
        children: [
          { key: '0-0-1-0', title: 'ДСП №1', icon: <IconCircleOutlined24 /> },
          { key: '0-0-1-1', title: 'МНЛЗ №4', icon: <IconCircleOutlined24 /> }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Прокатное производство',
    icon: <IconFolderFilled24 />,
    children: [
      {
        key: '0-1-0',
        title: 'Цех горячей прокатки',
        icon: <IconFolderFilled24 />,
        children: [
          {
            key: '0-1-0-0',
            title: 'Стан 2000',
            icon: <IconCircleOutlined24 />
          },
          {
            key: '0-1-0-1',
            title: 'Нагревательные печи (нельзя перетаскивать)',
            icon: <IconCircleOutlined24 />,
            disableDraggable: true
          }
        ]
      },
      {
        key: '0-1-1',
        title: 'Цех холодной прокатки',
        icon: <IconFolderFilled24 />,
        children: [
          {
            key: '0-1-1-0',
            title: 'Стан 1400',
            icon: <IconCircleOutlined24 />
          },
          {
            key: '0-1-1-1',
            title: 'Травильная линия (заблокирована)',
            icon: <IconWarningFilled24 />,
            disabled: true
          }
        ]
      }
    ]
  },
  {
    key: '0-2',
    title: 'Вспомогательное производство',
    icon: <IconFolderFilled24 />,
    disableDraggable: true,
    children: [
      {
        key: '0-2-0',
        title: 'Кислородный цех',
        icon: <IconCircleOutlined24 />
      },
      {
        key: '0-2-1',
        title: 'Энергетический цех',
        icon: <IconCircleOutlined24 />
      }
    ]
  }
] as TNodeItem[];
