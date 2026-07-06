export interface IMachineRow {
  id: string;
  machine: string;
  shift: string;
  assignee: string;
  order: string;
  priority: 'Низкий' | 'Обычный' | 'Высокий';
}

export const initialData: IMachineRow[] = [
  { id: 'm1', machine: 'Стан-350 №1', shift: '1-я', assignee: 'Петров И.', order: 'ЗК-10421', priority: 'Высокий' },
  { id: 'm2', machine: 'Стан-350 №2', shift: '1-я', assignee: 'Сидоров А.', order: 'ЗК-10438', priority: 'Обычный' },
  { id: 'm3', machine: 'Стан-500', shift: '1-я', assignee: 'Иванов С.', order: 'ЗК-10457', priority: 'Обычный' },
  { id: 'm4', machine: 'Пресс-800', shift: '1-я', assignee: 'Фомин К.', order: 'ЗК-10462', priority: 'Низкий' },
  { id: 'm5', machine: 'Пресс-1200', shift: '1-я', assignee: 'Орлов Д.', order: 'ЗК-10479', priority: 'Высокий' }
];
