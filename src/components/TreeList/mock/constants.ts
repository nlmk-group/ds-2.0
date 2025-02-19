import { TNodeItem } from '../types';

export const MOCK_TREE_DATA: TNodeItem[] = [
  {
    key: '0-0',
    title: 'Родитель 1',
    children: [
      {
        key: '0-0-0',
        title: 'Дочерний 1-1',
        children: [
          { key: '0-0-0-0', title: 'Лист 1-1-1' },
          { key: '0-0-0-1', title: 'Лист 1-1-2' }
        ]
      }
    ]
  },
  {
    key: '0-1',
    title: 'Родитель 2',
    children: [{ key: '0-1-0', title: 'Дочерний 2-1' }]
  }
];
