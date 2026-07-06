export interface IDefectCode {
  id: string;
  code: string;
  name: string;
  category: string;
}

export interface IJournalRow {
  id: string;
  batch: string;
  product: string;
  defectCode: string | null;
}

export const defectCodes: IDefectCode[] = [
  { id: 'd1', code: 'DEF-001', name: 'Поверхностные трещины', category: 'Металлургия' },
  { id: 'd2', code: 'DEF-014', name: 'Неполное соединение', category: 'Сварка' },
  { id: 'd3', code: 'DEF-027', name: 'Отклонение геометрии', category: 'Механика' },
  { id: 'd4', code: 'DEF-052', name: 'Коррозия', category: 'Химия' },
  { id: 'd5', code: 'DEF-088', name: 'Нарушение маркировки', category: 'Упаковка' }
];

export const initialJournal: IJournalRow[] = [
  { id: 'j1', batch: 'ПБ-240201', product: 'Лист г/к 4мм', defectCode: null },
  { id: 'j2', batch: 'ПБ-240203', product: 'Балка двутавр 30Ш1', defectCode: null },
  { id: 'j3', batch: 'ПБ-240207', product: 'Уголок 50×5', defectCode: null },
  { id: 'j4', batch: 'ПБ-240210', product: 'Лист х/к 1мм', defectCode: null }
];
